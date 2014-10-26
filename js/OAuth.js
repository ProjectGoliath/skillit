var state = "DCEEFWF45453sdffef424";
var apiKey = "75l45q2keur3cw";
var authCode;
var secretKey = "dakq8V3R97IuJKzy";
var redirect = "http://localhost:8000/linkedin_redirect.html";
var request_access_token_uri;
var access_token;



function connectLinkedInUser()
{
	//authorizes user sign in, next page URL receives authorization code
	window.location.href = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code"
	+"&client_id=" + apiKey
	+"&scope=r_fullprofile%20r_emailaddress%20r_network%20rw_groups"
	+"&state=" + state
	+"&redirect_uri=" + redirect;
	
}



//runs this function after auth page load ^
//must use authorization code from URL parameter to retrieve user token
function reqAccessToken()
{
	//parsing URL params
	var params = location.search.split("&");
	var authCodeString = params[0];
	var authCodeS = authCodeString.split("=");
	
	//saves authorization code to global variable
	authCode = authCodeS[1];
	console.log("authorization code: " + authCode); //prints authCode into console
	
	
	request_access_token_uri = "https://www.linkedin.com/uas/oauth2/accessToken?grant_type=authorization_code"
	+"&code=" + authCode 
	+"&redirect_uri=" + redirect
	+"&client_id=" + apiKey
	+"&client_secret=" + secretKey;
	
	
	
	
	
	// var xhr = new XMLHttpRequest();
// 	xhr.open("POST", request_access_token_uri, false);
// 	xhr.send();
// 	console.log(xhr.status);
	
	//trying to request OAuth user access token
	// opens a new window of token and time
	//window.open(request_access_token_uri, "json_window", "menubar=1, resizable=1, width = 350, height = 250");
	//$.post(request_access_token_uri,
    //function(data,status){
      //alert("Data: " + data + "\nStatus: " + status);
    //});
	

	
	

}