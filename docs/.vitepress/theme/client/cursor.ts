type CursorPoint = {
  x: number;
  y: number;
}

const CURSOR_STYLE = `* { cursor: none !important; }`;
const CURSOR_TRAIL_EASING = 0.2;

let cursorInstance: Cursor | null = null;

function isCoarsePointerDevice() {
  return window.matchMedia('(pointer: coarse)').matches || /AppWebKit.*Mobile.*/.test(window.navigator.userAgent);
}

class Cursor {
  cursorElement: HTMLDivElement | null = null;
  cursorDotElement: HTMLDivElement | null = null;
  styleElement: HTMLStyleElement | null = null;
  animationFrameId: number | null = null;
  isMounted = false;
  pointerTargets = new Set<Element>();
  pos: { curr: CursorPoint | null; prev: CursorPoint | null } = {
    curr: null,
    prev: null
  };

  handleMouseMove = (event: MouseEvent) => {
    if (!this.cursorElement || !this.cursorDotElement) {
      return;
    }

    this.moveDot(event.clientX, event.clientY);

    if (this.pos.curr === null) {
      this.move(event.clientX, event.clientY);
    }

    this.pos.curr = {
      x: event.clientX,
      y: event.clientY
    };

    this.cursorElement.classList.remove('hidden');
    this.cursorDotElement.classList.remove('hidden');
    this.cursorElement.classList.toggle('hover', this.targetUsesPointerCursor(event.target));
  };

  handleMouseEnter = () => {
    this.cursorElement?.classList.remove('hidden');
    this.cursorDotElement?.classList.remove('hidden');
  };

  handleMouseLeave = () => {
    this.cursorElement?.classList.add('hidden');
    this.cursorDotElement?.classList.add('hidden');
  };

  handleMouseDown = () => {
    this.cursorElement?.classList.add('active');
  };

  handleMouseUp = () => {
    this.cursorElement?.classList.remove('active');
  };

  mount() {
    if (isCoarsePointerDevice()) {
      this.destroy();
      return;
    }

    this.ensureElements();

    if (this.isMounted) {
      return;
    }

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseenter', this.handleMouseEnter);
    document.addEventListener('mouseleave', this.handleMouseLeave);
    document.addEventListener('mousedown', this.handleMouseDown);
    document.addEventListener('mouseup', this.handleMouseUp);

    this.isMounted = true;
    this.render();
  }

  refresh() {
    if (isCoarsePointerDevice()) {
      this.destroy();
      return;
    }

    this.ensureElements();
  }

  destroy() {
    if (this.animationFrameId !== null) {
      window.cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.isMounted) {
      document.removeEventListener('mousemove', this.handleMouseMove);
      document.removeEventListener('mouseenter', this.handleMouseEnter);
      document.removeEventListener('mouseleave', this.handleMouseLeave);
      document.removeEventListener('mousedown', this.handleMouseDown);
      document.removeEventListener('mouseup', this.handleMouseUp);
      this.isMounted = false;
    }

    this.styleElement?.remove();
    this.cursorElement?.remove();
    this.cursorDotElement?.remove();
    this.styleElement = null;
    this.cursorElement = null;
    this.cursorDotElement = null;
    this.pointerTargets.clear();
    this.pos = {
      curr: null,
      prev: null
    };
  }

  ensureElements() {
    if (!this.cursorElement) {
      this.cursorElement = document.createElement('div');
      this.cursorElement.id = 'cursor';
      this.cursorElement.classList.add('hidden');
      document.body.appendChild(this.cursorElement);
    }

    if (!this.cursorDotElement) {
      this.cursorDotElement = document.createElement('div');
      this.cursorDotElement.id = 'cursor-dot';
      this.cursorDotElement.classList.add('hidden');
      document.body.appendChild(this.cursorDotElement);
    }

    if (!this.styleElement) {
      this.styleElement = document.createElement('style');
      this.styleElement.textContent = CURSOR_STYLE;
    }

    this.collectPointerTargets();

    if (!this.styleElement.isConnected) {
      document.body.appendChild(this.styleElement);
    }
  }

  collectPointerTargets() {
    this.styleElement?.remove();
    this.pointerTargets.clear();

    const elements = document.body.getElementsByTagName('*');

    for (const element of elements) {
      if (window.getComputedStyle(element).cursor === 'pointer') {
        this.pointerTargets.add(element);
      }
    }
  }

  targetUsesPointerCursor(target: EventTarget | null) {
    let element = target instanceof Element ? target : null;

    while (element) {
      if (this.pointerTargets.has(element)) {
        return true;
      }

      element = element.parentElement;
    }

    return false;
  }

  move(left: number, top: number) {
    if (!this.cursorElement) {
      return;
    }

    this.cursorElement.style.left = `${left}px`;
    this.cursorElement.style.top = `${top}px`;
  }

  moveDot(left: number, top: number) {
    if (!this.cursorDotElement) {
      return;
    }

    this.cursorDotElement.style.left = `${left}px`;
    this.cursorDotElement.style.top = `${top}px`;
  }

  render() {
    if (this.pos.curr && this.pos.prev) {
      this.pos.prev.x = (1 - CURSOR_TRAIL_EASING) * this.pos.prev.x + CURSOR_TRAIL_EASING * this.pos.curr.x;
      this.pos.prev.y = (1 - CURSOR_TRAIL_EASING) * this.pos.prev.y + CURSOR_TRAIL_EASING * this.pos.curr.y;
      this.move(this.pos.prev.x, this.pos.prev.y);
    } else if (this.pos.curr) {
      this.pos.prev = { ...this.pos.curr };
    }

    this.animationFrameId = window.requestAnimationFrame(() => this.render());
  }
}

export function ensureCursor() {
  if (typeof window === 'undefined') {
    return;
  }

  if (!cursorInstance) {
    cursorInstance = new Cursor();
  }

  cursorInstance.mount();
}

export function refreshCursor() {
  if (!cursorInstance) {
    ensureCursor();
    return;
  }

  cursorInstance.refresh();
}

export function teardownCursor() {
  cursorInstance?.destroy();
  cursorInstance = null;
}