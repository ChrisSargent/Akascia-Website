// JavaScript Document


// 1. Have to create the script within the ak_status div on the SF page - this is because SF strips out the line breaks on home page components and it makes the API call fail. It calls onLinkedInLoad when it's done
script=document.createElement('script');
script.src="https://platform.linkedin.com/in.js"
script.innerHTML="\n api_key: 8re19a5y2ezz \n onLoad: onLinkedInLoad \n authorize: true";
document.getElementById('ak_status').appendChild(script);

// 2. This is called from the callback function of the linkedin loader. It calls displayStatus once the user is logged in.
function onLinkedInLoad() {
		IN.Event.on(IN, "auth", displayStatus);
	}
	
	// 2.1 Displays the signin with Linkedin button or shows that the use is logged in. Called by onLinkedInLoad
	function displayStatus() {
		var ak_statusDiv = document.getElementById("ak_status");

		ak_statusDiv.innerHTML +=
			"Logged in to Linkedin";
		checkPageAddress();

	}

// 3. This checks if the page is an Account Edit page (also for new accounts)
function checkPageAddress(){
	var page = document.title.indexOf("Account Edit:");

	if (page < 0){
		//Do Nothing
	}
	
	else {
		enteredID();
	}
}
	
// 4. Listens for any changes on the Linkedin ID Field and calls linkedinLookup if it's changed.
function enteredID(){
	var linkedinIDField = document.getElementById("00Nb000000951lY") || "";
	
	linkedinIDField.onblur=function(){linkedinLookup()}
}

// 5. Takes the value in the Linkedin ID value and queries it via the Linkedin API, requesting various facets.
function linkedinLookup(){
	var lookupID = document.getElementById("00Nb000000951lY").value;
	var urlEnd = ":(name,industry,website-url,employee-count-range,founded-year,status,company-type)";
	var url = "/companies/" + lookupID + urlEnd;
	console.log("Looking up company ID " + lookupID)
	
	if (lookupID !== ""){ // Checks if there is a value in the field
		IN.API.Raw()
		.url(url)
		.result(function (result) {
			console.log(result)
			updateValues(result)
		})
				
		.error(function (error) {
			displayError(error);
		});
	}
  }

//6. Takes the values returned by the linkedin lookup and sets all the variables to the appropriate values. If a value is undefined, it sets it to blank.
function updateValues(result){
	var resultCompanyType = result.companyType || "";
	var resultStatus = result.status || "";
	var resultEmployeeCountRange = result.employeeCountRange || "";

	var linkedinName = result.name;
	var linkedinWebsite = result.websiteUrl;
	var linkedinIndustry = result.industry;
	var linkedinFounded = result.foundedYear;

	var linkedinOwnership = resultCompanyType.name;
	var linkedinEmployees = resultEmployeeCountRange.name;
	var linkedinOperatingStatus = resultStatus.name;
	
	var oldName = document.getElementById("acc2").value;
	var aliasName = document.getElementById("00Nb0000005Ps2O").value;
	
	if (linkedinName != oldName && aliasName == ""){ // This records the old, original name if it is to be changed in the former names field.
		document.getElementById("00Nb0000005Ps2O").value = oldName
		}
	
	else if (linkedinName != oldName && aliasName != ""){ // This records the old, original name if it is to be changed in the former names field.
		document.getElementById("00Nb0000005Ps2O").value += "\n" + oldName;
		}
		
	if (linkedinName){ // This checks if the result var exists (i.e. the var is NOT undefined) and if so, updates the field, otherwise it leaves it untouched.
		document.getElementById("00Nb0000009527U").value=linkedinName;
		document.getElementById("acc2").value=linkedinName;
		}
	
	if (linkedinWebsite){
		document.getElementById("00Nb000000952wr").value=linkedinWebsite;
		document.getElementById("acc12").value=linkedinWebsite;
		}
		
	if (linkedinIndustry){
		document.getElementById("acc7").value=linkedinIndustry;
		}
		
	if (linkedinFounded){
		document.getElementById("00Nb0000009527j").value=linkedinFounded;
		}
		
	if (linkedinOwnership){
		document.getElementById("acc14").value=linkedinOwnership;
		}
		
	if (linkedinEmployees){
		document.getElementById("00Nb0000009527e").value=linkedinEmployees || "";
		}
		
	if (linkedinOperatingStatus){
		document.getElementById("00Nb000000952wh").value=linkedinOperatingStatus || "";
		}
}

//7. Displays an error message if the Linkedin ID was not found and then calls resetPage to clear the values
function displayError(){
	alert("Sorry, this ID was not found, please select another");
	resetPage();
}

//8. Called by displayError - resets all the values on the page
function resetPage(){
	document.getElementById("00Nb0000009527U").value="";
	document.getElementById("acc2").value="";
	document.getElementById("00Nb000000952wr").value="";
	document.getElementById("acc12").value="";
	document.getElementById("acc7").value="";
	document.getElementById("acc14").value="";
	document.getElementById("00Nb000000952wh").value="";
	document.getElementById("00Nb0000009527j").value="";
	document.getElementById("00Nb0000009527e").value="";
}