
console.log('ggodd')
console.log(location.pathname)

function triggerClick(el) {
    if (el) {
        var nodeName = el.nodeName,
            safari_chrome = /webkit/.test(navigator.userAgent.toLowerCase());
        if (safari_chrome && (nodeName != 'INPUT' || nodeName != 'BUTTON')) {
            try {
                var evt = document.createEvent('Event');
                evt.initEvent('click', true, true);
                el.dispatchEvent(evt);
            } catch (e) { alert(e) };
        } else {
            el.click();
        }
    }
}

setInterval(()=>{
if (location.pathname == "/product/10086009079805.html") {
    console.log('click buy now')
    const btns = document.querySelectorAll('#pro-operation a')
    btns.forEach(el => triggerClick(el))
    // triggerClick(document.getElementById('prdDetailBuyNow'))
} else {
    console.log('click confirm submit')
    triggerClick(document.getElementById('confirmSubmit'))
}}, 100)
