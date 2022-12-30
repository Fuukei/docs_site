
    const jsdom = require("jsdom");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(`
    <head>
    <script>
    var link = window.document.createElement('link');
    link.href = 'https://s.nmxc.ltd/sakurairo_wiki/icon.png';
    link.rel = 'icon';
    window.document.getElementsByTagName('head')[0].appendChild(link);
    </script>
    </head>
    `, { runScripts: "dangerously" });
    
    dom.window.document.head.children.length === 2; 
/*
var link = window.document.createElement('link');
link.href = 'https://s.nmxc.ltd/sakurairo_wiki/icon.png';
link.rel = 'icon';
window.document.getElementsByTagName('head')[0].appendChild(link);
*/