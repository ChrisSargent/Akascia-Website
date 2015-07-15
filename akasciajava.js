// JavaScript Document

function trackanchor(){
	_gaq.push(['_trackPageview', location.pathname + location.search + location.hash]); //Makes Google Analytics track clicks to the pages (anchors)
}

function fadepagein(){ //Waits and then fades in just the 'box' on each first page
$(".box,.fade,.textreadmore").css({'opacity':'0','filter':'alpha(opacity=0)'}).addClass('invisible');
setTimeout(function(){
	$(".box,.fade,.textreadmore").removeClass('invisible').animate({'opacity':'1'},400);
}, 700);
}

function fadepageinalt(){ //Waits and then fades in the content of the Contact Us and Socialise page
$(".fade").css({'opacity':'0','filter':'alpha(opacity=0)'}).addClass('invisible');
setTimeout(function(){
	$(".fade").removeClass('invisible').animate({'opacity':'1'},400);
}, 700);
}

function hideelements(){
	$(".homepage,.companypage,.approachpage,.passionpage,.expertisepage,.successpage,.socialisepage,.contactuspage").css("background-image","none");
	$(".selectednojava").hide();
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

function showjavaelements () {
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
showjavaelements();
}

$(document).ready(function(){
   initialise()
 });