import { ensureCursor, refreshCursor, teardownCursor } from './cursor'
let isInitialized = false;

export function initializeSiteEffects() {
  if (typeof window === 'undefined' || isInitialized) {
    return;
  }

  isInitialized = true;

  ensureCursor();
}

export function applySiteEffects() {
  if (typeof window === 'undefined') {
    return;
  }

  refreshCursor();
}

export function teardownSiteEffects() {
  teardownCursor();
  isInitialized = false;
}