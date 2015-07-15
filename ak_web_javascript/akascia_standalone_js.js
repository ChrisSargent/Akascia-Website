//This is called whenever the hash changes so Google Analytics tracks pages.
function googleGA(){
	ga('send', 'pageview');
}

function callToutApp() {
	var tout_action_taken;
	var tout_automatically_mark_email_as_success;

	var t = document.createElement('script');
	t.type = 'text/javascript';
	t.async = true;
	var u = document.location.href;
	var ti = document.title;
	
	if(u.indexOf("funded_now_what") > -1 || u.indexOf("8adsfjh8kjhq7") > -1){
		tout_action_taken = "Read the Article"; // You can change this to anything
		tout_automatically_mark_email_as_success = true;
	}
	
	else{
		tout_action_taken = null;
		tout_automatically_mark_email_as_success = false;
	}

//	console.log(tout_action_taken);
//	console.log(tout_automatically_mark_email_as_success);
	
	if(tout_automatically_mark_email_as_success){
		u+='#success=true';
	}
	
	var i = "?action_taken=" + encodeURIComponent(tout_action_taken) + "&title=" + encodeURIComponent(ti) + "&url=" + encodeURIComponent(u);
	t.src =  'https://go.toutapp.com/action/tw1t9p9f6d' + i;
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

function initialise(){
	googleGA()
	callToutApp()
}

window.onload = initialise();