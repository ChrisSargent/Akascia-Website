// JavaScript Document
(function($){

	if(!document.defaultView || !document.defaultView.getComputedStyle){ // IE6-IE8 workaround
		var oldCurCSS = $.curCSS;
		$.curCSS = function(elem, name, force){
			var curStyle = elem.currentStyle, ret;
			if(name === 'font-size'){
				name = 'fontSize';
			}
			if((name !== 'clip' && name !== 'fontSize') || !curStyle){
				return oldCurCSS.apply(this, arguments);
			}
			var style = elem.style;
			if ( !force && style ){
				ret = style[ name ];
			}
			if(name === 'clip'){
				ret = ret || 'rect('+ (curStyle.clipTop || 'auto') +' '+ (curStyle.clipRight || 'auto') +' '+ (curStyle.clipBottom || 'auto') +' '+ (curStyle.clipLeft || 'auto') +')';
			} else {
				ret = ret || curStyle.fontSize;
				if(!(/px/.test(ret))){
					// Remember the original values
					var width = style.width, rsWidth = elem.runtimeStyle.width;
	
					// Put in the new values to get a computed value out
					elem.runtimeStyle.width = elem.currentStyle.width;
					style.width = '100em';
					ret = style.pixelWidth / 100 + "px";
					// Revert the changed values
					style.width = width;
					elem.runtimeStyle.width = rsWidth;
				}
			}
			return ret;
		};
	}
})(jQuery);

(function($){
	var calcClipAuto = [
						function(){
							return 0;
						},
						function(elem){
							return $(elem).outerWidth();
						},
						function(elem){
							return $(elem).outerHeight();
						},
						function(elem){
							return 0;
						}
					],
					
					calcNumClip = function(prop, elem){
						return ((/em/.test(prop))) ? 
								(parseFloat($.curCSS(elem, 'fontSize'), 10) || 1) * (parseFloat(prop, 10) || 0) :
								(parseInt(prop, 10) || 0)
						;
					}
	;
	
	var calcClip = function(css, fx, isEnd){
			var ret 	= [];
			if(css === 'auto'){
				css = 'rect(auto auto auto auto)';
			}
			
			css = css.replace(/rect\(|\)/g, '').split(/,\s*|\s/);
			if(isEnd){
				fx.endClipStyle = 'rect('+ css.join(' ') +')';
			}
			for(var i = 0; i < css.length; i++){
				ret[i] = (css[i] !== 'auto') ? 
							calcNumClip(css[i], fx.elem) : 
							calcClipAuto[i](fx.elem);
			}
			
			return ret;
		};
	
	jQuery.fx.step.clip = function(fx){
		if (!fx.clipInit) {
			
			fx.start = calcClip($.curCSS(fx.elem, 'clip'), fx);
			fx.end = calcClip(fx.end, fx, true);
			fx.elmStyle = fx.elem.style;
			fx.clipInit = true;
		}
		
		fx.elmStyle.clip = 'rect('+ ( fx.pos * (fx.end[0] - fx.start[0]) + fx.start[0] ) +'px '+ (fx.pos * (fx.end[1] - fx.start[1]) + fx.start[1]) +'px '+ (fx.pos * (fx.end[2] - fx.start[2]) + fx.start[2]) +'px '+ (fx.pos * (fx.end[3] - fx.start[3]) + fx.start[3]) +'px)';
		
		if(fx.pos === 1 && fx.endClipStyle){
			fx.elmStyle.clip = fx.endClipStyle;
		}
	};
})(jQuery);

function fadepagein(){ //Waits and then fades in just the 'box' and scrolls in the quote on each first page
$(".box,.fade,.textreadmore").css({'opacity':'0','filter':'alpha(opacity=0)'}).addClass('invisible');
setTimeout(function(){
	$(".box,.fade,.textreadmore").removeClass('invisible').animate({'opacity':'1'},400);
}, 700);
$(".advancequote").stop(true,true).css("clip", "rect(0px 0px 20px 0px)");
setTimeout(function(){
	$(".advancequote").animate({"clip":"rect(0px 550px 20px 0px)"}, 400);
}, 750);
}

function fadepageinalt(){ //Waits and then fades in the content of and scrolls in the quote the Contact Us page
$(".fade").css({'opacity':'0','filter':'alpha(opacity=0)'}).addClass('invisible');
setTimeout(function(){
	$(".fade").removeClass('invisible').animate({'opacity':'1'},400);
}, 700);
$(".advancequote").stop(true,true).css("clip", "rect(0px 0px 20px 0px)");
setTimeout(function(){
	$(".advancequote").animate({"clip":"rect(0px 550px 20px 0px)"}, 400);
}, 750);
}

function hideelements(){
	$(".homepage,.companypage,.approachpage,.passionpage,.expertisepage,.successpage,.socialisepage,.contactuspage").css("background-image","none");
	$(".selectednojava").hide();
}

function trackanchor(){
	_gaq.push(['_trackPageview', location.pathname + location.search + location.hash]); //Makes Google Analytics track clicks to the pages (anchors)
}

function gotohome() {   
hideelements();
$("#selected").stop(false, true).fadeOut(400);
$("#background").clearQueue().animate({left: "0px"}, 600);
fadepagein();
trackanchor()
}

function gotocompany() {
hideelements();
$("#selected").stop(false, true).fadeIn(200).dequeue().animate({"left":"253px"}, 200);
$("#background").clearQueue().animate({left: "-1000px"}, 600);
fadepagein();
trackanchor()
}

function gotoapproach() {   
hideelements();
$("#selected").stop(false, true).fadeIn(200).dequeue().animate({"left": "367px"},200);
$("#background").clearQueue().animate({left: "-2000px"}, 600);
fadepagein();
trackanchor()
}

function gotopassion() {   
hideelements();
$("#selected").stop(false, true).fadeIn(200).dequeue().animate({"left": "479px"}, 200);
$("#background").clearQueue().animate({left: "-3000px"}, 600);
fadepagein();
trackanchor()
}

function gotoexpertise() {   
hideelements();
$("#selected").stop(false, true).fadeIn(200).dequeue().animate({"left": "590px"}, 200);
$("#background").clearQueue().animate({left: "-4000px"}, 600);
fadepagein();
trackanchor()
}

function gotosuccess() {   
hideelements();
$("#selected").stop(false, true).fadeIn(200).dequeue().animate({"left": "700px"}, 200);
$("#background").clearQueue().animate({left: "-5000px"}, 600);
fadepagein();
trackanchor()
}

function gotosocialise() {   
hideelements();
$("#selected").stop(false, true).fadeOut(400);
$("#background").clearQueue().animate({left: "-6000px"}, 600);
fadepageinalt();
trackanchor()
}

function gotocontactus() {   
hideelements();
$("#selected").stop(false, true).fadeOut(400);
$("#background").clearQueue().animate({left: "-7000px"}, 600);
fadepageinalt();
trackanchor()
}

function normaltextsize() {
$(".textarea *").css("font-size","12px");
$(".normal,.big,.bigger").css("color","#444444");
$(".normal").css("color","#bbbbbb");
$(".textcontainer").css("bottom","100px");
}

function bigtextsize() {
$(".textarea *").css("font-size","13px");
$(".normal,.big,.bigger").css("color","#444444");
$(".big").css("color","#bbbbbb");
$(".textcontainer").css("bottom","90px");
}

function biggertextsize() {
$(".textarea *").css("font-size","14px");
$(".normal,.big,.bigger").css("color","#444444");
$(".bigger").css("color","#bbbbbb");
$(".textcontainer").css("bottom","80px");
}

function hidenonjavaelements () {
$(".textsize").show();
}

function validateForm()
{
var x=document.forms["subForm"]["cm-name"].value;
if (x==null || x=="")
  {
  alert("Please fill in the 'Name' field.");
  return false;
  }

var z=document.forms["subForm"]["ykjyl-ykjyl"].value;
var atpos=z.indexOf("@");
var dotpos=z.lastIndexOf(".");
if (atpos<1 || dotpos<atpos+2 || dotpos+2>=z.length)
  {
  alert("Please include a valid e-mail address");
  return false;
  }
}

function initialise () {
hidenonjavaelements();
}

$(document).ready(function(){
   initialise()
 });