var demo = document.getElementsByClassName("Demo")

if ( /*@cc_on!@*/ false || (!!window.MSInputMethodContext && !!document.documentMode)) window.location.href = "/upgrade-your-browser/index.html?referrer=" + encodeURIComponent(window.location.href);
function handleRouting() {
    var AccessPath = window.location.pathname;
    switch (AccessPath){
        case '/secret':
                var ClassChange = document.getElementsByClassName('NotFound')[0];
                ClassChange.getElementsByClassName('code')[0].innerHTML = "000"
                ClassChange.getElementsByClassName('title')[0].innerHTML = "你不该来这里"
                fetch('https://v1.hitokoto.cn?min_length=20&max_length=32')
                    .then(response => response.json())
                        .then(data => {
                            ClassChange.getElementsByClassName('quote')[0].innerHTML = data.hitokoto + '&nbsp;----&nbsp;'+ data.from
                            })
                    .catch(console.error)

                ClassChange.getElementsByClassName('action')[0].getElementsByClassName('link')[0].innerHTML =  "回头吧，孩子"
            break;
        case '/secret.html':
            break;
        default:
            break;
    }
}

handleRouting();

window.addEventListener("hashchange", handleRouting)
window.addEventListener('load', function () {
	
    if (Boolean(window.navigator.userAgent.match(/AppWebKit.*Mobile.*/))) {
        document.getElementById('cursor').style.display = 'none'
    }
})

document.getElementsByTagName('head')[0].appendChild(script);
var script = document.createElement('script');
    var url = '/js/cursor.js'
	script.setAttribute('type','text/javascript');
	script.setAttribute('src',url);