var whitespace = " \t\n\r";
var defaultEmptyOK = false

function isEmpty(s)
{   
	return ((s == null) || (s.length == 0))
}

function isWhitespace (s)
{
   var i;

    // Is s empty?
    if (isEmpty(s)) return true;

    // Search through string's characters one by one
    // until we find a non-whitespace character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);

        if (whitespace.indexOf(c) == -1) return false;
    }

    // All characters are whitespace.
    return true;
}

function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}

function isInteger (s)

{   var i;

    if (isEmpty(s)) 
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-numeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number.
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    // All characters are numbers.
    return true;
}

function isEmail (s)
{
   if (isEmpty(s)) 
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
	       else return (isEmail.arguments[1] == true);
	   
	    // is s whitespace?
	    if (isWhitespace(s)) return false;
	    
	    // there must be >= 1 character before @, so we
	    // start looking at character position 1 
	    // (i.e. second character)
	    var i = 1;
	    var sLength = s.length;

	    // look for @
	    while ((i < sLength) && (s.charAt(i) != "@"))
	    { i++
	    }

	    if ((i >= sLength) || (s.charAt(i) != "@")) return false;
	    else i += 2;

	    // look for .
	    while ((i < sLength) && (s.charAt(i) != "."))
	    { i++
	    }

	    // there must be at least one character after the .
	    if ((i >= sLength - 1) || (s.charAt(i) != ".")) return false;
	    else return true;
}

function isIntegerInRange (s, a, b)
{   if (isEmpty(s)) 
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    // Catch non-integer strings to avoid creating a NaN below,
    // which isn't available on JavaScript 1.0 for Windows.
    if (!isInteger(s, false)) return false;

    // Now, explicitly change the type to integer via parseInt
    // so that the comparison code below will work both on 
    // JavaScript 1.2 (which typechecks in equality comparisons)
    // and JavaScript 1.1 and before (which doesn't).
    var num = parseInt (s);
    return ((num >= a) && (num <= b));
}
function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];

    // The next line is a bit byzantine.  What it means is:
    // a) s must be a signed integer, AND
    // b) one of the following must be true:
    //    i)  s is empty and we are supposed to return true for
    //        empty strings
    //    ii) this is a number >= 0

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}

function isSignedInteger (s)

{   if (isEmpty(s)) 
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);

    else {
        var startPos = 0;
        var secondArg = defaultEmptyOK;

        if (isSignedInteger.arguments.length > 1)
            secondArg = isSignedInteger.arguments[1];

        // skip leading + or -
        if ( (s.charAt(0) == "-") || (s.charAt(0) == "+") )
           startPos = 1;    
        return (isInteger(s.substring(startPos, s.length), secondArg))
    }
}

	
function isAlphanumeric (s)

{   var i;

    if (isEmpty(s))
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    // Search through string's characters one by one
    // until we find a non-alphanumeric character.
    // When we do, return false; if we don't, return true.

    for (i = 0; i < s.length; i++)
    {   
        // Check that current character is number or letter.
        var c = s.charAt(i);

        if (! (isLetter(c) || isDigit(c) ) )
        return false;
    }

    // All characters are numbers or letters.
    return true;
}
function isLetter (c)
{   return ( ((c >= "a") && (c <= "z")) || ((c >= "A") && (c <= "Z")) || (c == "_") )
}



// Returns true if character c is a digit 
// (0 .. 9).

function isDigit (c)
{   return ((c >= "0") && (c <= "9"))
}


function containsdigit(param)
{
	mystrLen=param.length;
	for(i=0;i<mystrLen;i++)
	{
		if((param.charAt(i)=="0") || (param.charAt(i)=="1") || (param.charAt(i)=="2") || (param.charAt(i)=="3") || (param.charAt(i)=="4") || (param.charAt(i)=="5") || (param.charAt(i)=="6") || (param.charAt(i)=="7") || (param.charAt(i)=="8") || (param.charAt(i)=="9"))
		{
			return true;
		}
	}
	return false;
}

function containscharacters(param)
{
	mystrLen=param.length;
	flag=false;
	for(i=0;i<mystrLen;i++)
	{
		if(((param.charAt(i)>="A") && (param.charAt(i)<="Z")) || ((param.charAt(i)>="a") && (param.charAt(i)<="z")) || ((param.charAt(i)==".")||(param.charAt(i)==" ")))
		{
			flag=true;
		}
	else 
		return false
	}
	return flag
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}



function getquerystring()
{
    var referer = document.referrer;
    document.form1.referer.value=referer;

    var strSearch = window.location.search;
    if((strSearch.indexOf('&name=') ) > 0)
    {
        var strName = strSearch.substring((strSearch.indexOf('&name=')+6),strSearch.lastIndexOf('&'));
        document.form1.fname.value = strName.replace(/%20/g, " ");
    }
    if((strSearch.indexOf('&EmaiId'))>0)
    {
        var strEmail = strSearch.substring((strSearch.indexOf('&EmaiId')+8),strSearch.length);
        document.form1.email.value = strEmail;
    }
    if((strSearch.lastIndexOf('&mobile=')) > 0)
    {
        var strMobile = strSearch.substring((strSearch.lastIndexOf('&mobile=')+8),(strSearch.indexOf('&name=')));
        document.form1.mobile.value = strMobile;
    }
    var search = window.location.search;
    if(search == "?error=1")
    {
        alert("You have already applied for this plan.\nYou will receive a call from our executive shortly.");
        return false;
    }
}

function getquerystring2() {
    var referer = document.referrer;
    document.form1.referer.value = referer;
}

function RepetativeDigit(param)
{
    if((param == "0000000000") || (param == "1111111111") || (param == "2222222222") || (param == "3333333333") || (param == "4444444444") || (param == "5555555555") || (param == "6666666666") || (param == "7777777777") ||(param == "8888888888") || (param == "9999999999") || (param == "1234567890") || (param == "0123456789"))
   {
        return true;
   } 
   return false;
}

function formcheck()
{
	if(isWhitespace(document.form1.fname.value) || isEmpty(document.form1.fname.value))
		{
			alert("Please Enter Full Name");
			document.form1.fname.focus();
			return false;
		}
	else if(document.form1.fname.value == "Name")
		{
			alert("Please Enter Full Name");
			document.form1.fname.focus();
			return false;
		}
	else if(containsdigit(document.form1.fname.value)==true)
		{
			alert("Please Enter Alphabets Only");
			document.form1.fname.select();
			return false;
		}
	else if(containscharacters(document.form1.fname.value)==false)
		{
			alert("Please Enter Alphabets Only");
			document.form1.fname.focus();
			return false;
		}
	else if(isWhitespace(document.form1.age.value) || isEmpty(document.form1.age.value))
		{
			alert("Please Enter Your Age");
			document.form1.age.focus();
			return false;
		}
	else if(document.form1.age.value == "Age")
		{
			alert("Please Enter Your Age");
			document.form1.age.focus();
			return false;
		}
	else if(isNaN(document.form1.age.value))
		{
			alert("Please Enter Numbers Only");
			document.form1.age.focus();
			return false;
		}
	else if(document.form1.city.value == "City")
		{
			alert("Please Enter City");
			document.form1.city.focus();
			return false;
		}
	else if(isWhitespace(document.form1.std.value) || isEmpty(document.form1.std.value))
		{
			alert("Please Enter Your Std Code");
			document.form1.std.focus();
			return false;
		}
	else if(document.form1.std.value == "STD")
		{
			alert("Please Enter Your Std Code");
			document.form1.std.focus();
			return false;
		}
	else if(isNaN(document.form1.std.value))
		{
			alert("Please Enter Numbers Only");
			document.form1.std.select();
			return false;
		}
	else if(isWhitespace(document.form1.tel.value) || isEmpty(document.form1.tel.value))
		{
			alert("Please Enter Your Telephone");
			document.form1.tel.focus();
			return false;
		}
	else if(document.form1.tel.value == "Tel. No.")
		{
			alert("Please Enter Your Telephone");
			document.form1.tel.focus();
			return false;
		}
	else if(isNaN(document.form1.tel.value))
		{
			alert("Please Enter Numbers Only");
			document.form1.tel.select();
			return false;
		}
	else if(isWhitespace(document.form1.mobile.value) || isEmpty(document.form1.mobile.value))
		{
			alert("Please Enter Mobile Number (Do not prefix 0 or +91)");
			document.form1.mobile.focus();
			return false;
		}
	else if(document.form1.mobile.value == "Mobile No.")
		{
			alert("Please Enter Mobile Number (Do not prefix 0 or +91)");
			document.form1.mobile.focus();
			return false;
		}
	else if(isNaN(document.form1.mobile.value))
		{
			alert("Please Enter Numbers Only");
			document.form1.mobile.focus();
			return false;
		}
	else if((document.form1.mobile.value.substr(0,1)!=9)||(document.form1.mobile.value.length !=10))
		{
			alert("Please Enter a Valid Mobile Number");
			document.form1.mobile.focus();
			return false;
		}
	else if(RepetativeDigit(document.form1.mobile.value))
	{
			alert("Please Enter a Valid Mobile Number");
			document.form1.mobile.focus();
			return false;	
	}
	else if (isWhitespace(document.form1.email.value) || isEmpty(document.form1.email.value))
		{
			alert("Please Enter Your Email Address");
			document.form1.email.focus();
			return false;
		}
	else if (document.form1.email.value == "Email")
		{
			alert("Please Enter Your Email Address");
			document.form1.email.focus();
			return false;
		}
	else if (isEmail(document.form1.email.value) != true)
		{
			alert("Please Enter Your Valid Email Address");
			document.form1.email.focus();
			return false;
		}
	else if (document.form1.creditcard.selectedIndex==0)
		{
			alert("Please Select Credit Card Type");
			document.form1.creditcard.focus();
			return false;
        }
    else if (document.form1.creditcard.value == "yes"){		
        if (document.form1.bank.selectedIndex==0)
        {
	        alert("Please Select Bank");
	        document.form1.bank.focus();
	        return false;
        }
		}		
	return true;

}

function creditcard_yesno() {
    if (document.form1.creditcard.value == "yes") {
        /*document.frmsubmit.creditcard.disabled=false;*/
        document.form1.bank.disabled = false;
    }
    else if (document.form1.creditcard.value == "no") {
        /*document.frmsubmit.creditcard.disabled=true;*/
    document.form1.bank.disabled = true;
    }
    else if (document.form1.creditcard.value == "nil") {
        /*document.frmsubmit.creditcard.disabled=false;*/
    document.form1.bank.disabled = false;
    }
}

function getQueryData()
{   
    var strQueryString = window.location.search;
    var strSearch_Engine = "DS", strClient_Name = "TataAIG";
    var strCampaign_Name = "Yahoo-form", strAdgroup = "Umbrella", strSearch_Vs_Content = "DI", strKeywords = "120*600";
    try
    {
        strSearch_Engine = strQueryString.substring((strQueryString.indexOf("=")+1),((strQueryString.indexOf("&"))));
        document.getElementById("SearchEngine").value = strSearch_Engine;
        //alert(strSearch_Engine);
        
        strQueryString = strQueryString.substring((strQueryString.indexOf("&")+1),strQueryString.length);
        strClient_Name = strQueryString.substring((strQueryString.indexOf("=")+1),((strQueryString.indexOf("&"))));
        document.getElementById("ClientName").value = strClient_Name;
        //alert(strClient_Name);
        
        strQueryString = strQueryString.substring((strQueryString.indexOf("&")+1),strQueryString.length);
        strCampaign_Name = strQueryString.substring((strQueryString.indexOf("=")+1),((strQueryString.indexOf("&"))));
        document.getElementById("Campaign").value = strCampaign_Name;
        //alert(strCampaign_Name);
        
        strQueryString = strQueryString.substring((strQueryString.indexOf("&")+1),strQueryString.length);
        strAdgroup = strQueryString.substring((strQueryString.indexOf("=")+1),((strQueryString.indexOf("&"))));
        document.getElementById("Adgroup").value = strAdgroup;
        //alert(strAdgroup);
        
        strQueryString = strQueryString.substring((strQueryString.indexOf("&")+1),strQueryString.length);
        strSearch_Vs_Content = strQueryString.substring((strQueryString.indexOf("=")+1),((strQueryString.indexOf("&"))));
        document.getElementById("Search_Vs_Content").value = strSearch_Vs_Content;   
        //alert(strSearch_Vs_Content);
        
        
        strQueryString = strQueryString.substring((strQueryString.indexOf("&")+1),strQueryString.length);
        if((strQueryString.indexOf("&")) > 0)
            strKeywords = strQueryString.substring((strQueryString.indexOf("=")+1),((strQueryString.indexOf("&"))));
        else
            strKeywords = strQueryString.substring((strQueryString.indexOf("=")+1),strQueryString.length);
        document.getElementById("Keyword").value = strKeywords;            
        
    }catch(err)
    {
        strQueryString = "";
    }
    
    try
    {
        var strError = window.location.search;
        if(strError != "")
        {
            var strIsError = strError.substring((strError.indexOf("error=")+6),strError.length)
            if(strIsError == "exists")
            {
                alert("You have already applied for this policy.")
                return false;
            }
        }
            
    }catch(err)
    {
        strQueryString = "";
    }
    

}
