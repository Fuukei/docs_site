var vitepress_debug = 0;
if(vitepress_debug == 1){
    vitepress_client();
}
else{
    vitepress_server();
}

function vitepress_server(){
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
}
function vitepress_client(){
    var link = window.document.createElement('link');
    link.href = 'https://s.nmxc.ltd/sakurairo_wiki/icon.png';
    link.rel = 'icon';
    window.document.getElementsByTagName('head')[0].appendChild(link);
    
}

