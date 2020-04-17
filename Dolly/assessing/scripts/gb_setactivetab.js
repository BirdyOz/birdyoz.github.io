// Designed by Greg Bird
// email: gbird@swin.edu.au
// Script determines which link is active and expands window accordingly

//test whether it is a DOM-compliant browser
if(document.getElementById && document.write) dom=true;


function setactivetab(){

if (dom) //if I'm clever enough
{
	var thisURL=window.location.href;
	var tablinks = document.getElementById("navcontainer").getElementsByTagName("a");
	for (var i = 0; i < tablinks.length; i++)
	//if a link matches the current URL
		if (tablinks[i]==thisURL) 
		{
		//change the class of the active link
		//change the class of the active link
		document.getElementsByTagName('a')[i+1].id="fred";
		//document.getElementsByTagName('a')[i+1].id = "fred";
		alert (document.getElementsByTagName('a')[i+1]+window.location.href);
		}
	}
}
