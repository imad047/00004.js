

jQuery(document).ready(function() {
        $.colorbox({width:"400px", inline:true, href:"#subscribe"});
});
if (document.all){}
else document.captureEvents(Event.MOUSEMOVE);
document.onmousemove=mouse;
function mouse(e)
{
if (navigator.appName == 'Netscape'){
xcurs = e.pageX;
ycurs = e.pageY;
} else {
xcurs = event.clientX;
ycurs = event.clientY;
}
document.getElementById('subscribe').style.left = (xcurs-xxx)+'px';
document.getElementById('subscribe').style.top = (ycurs-yyy)+'px';
}
