//This is called whenever the hash changes so Google Analytics tracks pages.
function track_anchor(){
	ga('send', 'pageview', '/' + location.hash);
}


function callToutApp(){
	var t = document.createElement('script');
	t.type = 'text/javascript';
	t.async = true;
	
	var u = document.location.href;
	var ti = document.title;
	var hsh = window.location.hash;
	var i = "?title=" + encodeURIComponent(hsh) + "&url=" + encodeURIComponent(u);
	
	t.src =  'https://go.toutapp.com/site/tw1t9p9f6d' + i;
	var st = document.getElementsByTagName('script')[0];
	
	st.parentNode.insertBefore(t, st);
	}


//Field validation for Web Leads
function validateLeadForm(formid){
	
	var fsource=window.location.href;
	document.forms[formid]["fieldSource"].value=fsource;
		
	var c=document.forms[formid]["fieldEmail"].value;
	var atpos=c.indexOf("@");
	var dotpos=c.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=c.length)
	  {
	  alert("Please include a valid e-mail address");
	  return false;
	  }
}

//The following set of functions controls the page transitions and navigation
var bg_position = '0%';
var selected_left = '0px';
var selected_width = '0px';
var show_selected = true;
var target_hash = window.location.hash; //Sets the variable target_hash to be equal to the hash value of the page address.
var	target_hash_text = new String;

//Fades in the 'dark-screen' for page transitions
function darkscreen_fadein(){
	$(".ak_darkscreen").removeClass('invisible').animate({'opacity':'1','filter':'alpha(opacity=1)'},500);
}

function clear_all() {
	$(".ak_jshide_page,.ak_darkscreen").addClass('invisible').css({'opacity':'0','filter':'alpha(opacity=0)'});
}

//This function gives the variables bg_position, selected_left, selected_width and show_selected their correct values, depending on the requested page
function set_pg_variables(){
	
	switch(target_hash_text){
		case '#home':
		bg_position='0%'
		show_selected=false
		break	

		case '#aboutus':	
		bg_position='-100%'
		selected_left=$("#mn_about").position().left
		selected_width=$("#mn_about").width()
		show_selected=true
		break
			
		case '#people':
		bg_position='-200%'
		selected_left=$("#mn_people").position().left
		selected_width=$("#mn_people").width()
		show_selected=true
		break
		
		case '#chris':
		case '#steve':
		bg_position='-200%'
		selected_left=$("#mn_people").position().left
		selected_width=$("#mn_people").width()
		show_selected=true
		break
			
		case '#approach':
		bg_position='-300%'
		selected_left=$("#mn_approach").position().left
		selected_width=$("#mn_approach").width()
		show_selected=true
		break

		case '#average':
		bg_position='-400%'
		selected_left=$("#mn_approach").position().left
		selected_width=$("#mn_approach").width()
		show_selected=true
		break		

		case '#expertise':
		bg_position='-500%'
		selected_left=$("#mn_expertise").position().left
		selected_width=$("#mn_expertise").width()
		show_selected=true
		break

		case '#process':
		case '#diary':
		bg_position='-600%'
		selected_left=$("#mn_process").position().left
		selected_width=$("#mn_process").width()
		show_selected=true
		break
				
		case '#success':
		bg_position='-700%'
		selected_left=$("#mn_success").position().left
		selected_width=$("#mn_success").width()
		show_selected=true
		break

		case '#resources':
		bg_position='-800%'
		show_selected=false
		break

		case '#contactus':
		bg_position='-900%'
		show_selected=false
		break
		
		default:
		// Do nothing
		};
}

//Is called when the scrolling stops, fades in the requested page.
function page_fadein(){
	$(target_hash).removeClass('invisible').animate({'opacity':'1','filter':'alpha(opacity=1)'},400, function(){darkscreen_fadein()});
}

function movebg_fadepg() {
	//Finds out current position of the background and converts to percentage.
	var curr_bg_position = $("#ak_cont_jsbg").position().left / $("#ak_cont_jsbg").parent().width() * 100 + "%";	
	
	if (target_hash_text == '#diary' && curr_bg_position !== bg_position){
		$("#ak_cont_jsbg").clearQueue().animate({left: bg_position}, 600);
	}

	if (curr_bg_position == bg_position){
		page_fadein();
	}
			
	else {
		$("#ak_cont_jsbg").clearQueue().animate({left: bg_position}, 600, function(){page_fadein()});
	}
}

function move_selected(){
	var curr_selected_position = $("#ak_selected_js").position().left;
	
	if (show_selected == false){
		$("#ak_selected_js").fadeOut(400);
		return;
	}
	if (curr_selected_position == selected_left){
		return;
	}
	else if (show_selected == true){
		$("#ak_selected_js").clearQueue().animate({left:selected_left,width:selected_width}, 250).fadeIn(250);
	}
}

function page_transition(){
	target_hash = window.location.hash;
	if (target_hash == ''){		//Checks if the current page is the plain home page and if so, doesn't make any page transitions.
		track_anchor();
		callToutApp();
		return;
	}

	target_hash_text = target_hash.replace(/[0-9]/g, '');
	if (target_hash_text == '#diary') {		//Checks if the current page is a diary page and doesn't do any clearing of items.
		set_pg_variables();
		movebg_fadepg();
		track_anchor();
		callToutApp();
		return;
	}
	
	clear_all();
	set_pg_variables();		//Runs set_pg_variables to set the correct values of the variables: bg_position, according to the hash value of the target page.			
	movebg_fadepg();		//Sets up the right page according to the requested hash
	move_selected();
	track_anchor();
	callToutApp();
}

window.onhashchange=function (){
		page_transition();
}

function initialise(){
	page_transition();
	$("#ak_wrap_jsbg").show();
	$(".ak_cont_nojsbg,.ak_selected_nojs").hide();
}

$(window).bind("load", function() {
	set_pg_variables(); //The selected bar is in the wrong place because the fonts from Google don't download straight away - hence this is called again when the page has finished loading
	move_selected();
});

$(document).ready(function(){
	initialise();
});