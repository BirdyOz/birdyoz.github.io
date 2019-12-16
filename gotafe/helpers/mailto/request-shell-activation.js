/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-03-08 10:05:22
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-12-16 17:50:06
*/

/**
 * ESTABLISH PLATFORM VARIABLE
 */

// Get page URL
var url = (window.location.href).split("#")[0];
// Get course ID
var courseid = getUrlParameter('id');
// Get page title
var title = document.title;


/**
 * ASSIGN EMAIL VARIABLES
 */

var to = "onlinecampus@gotafe.vic.edu.au";
var subj = `Shell ready for activation. (Course ID = ${courseid})`;
console.log("@GB: subj = ", subj);

// multiline body string
var body =
`This shell is ready for final edit and release:

${title}
URL: ${url}

I plan to begin teaching on:

I need these trainers enrolled in this shell:

Many thanks`;
console.log("@GB: body = ", body);

/**
 * COMPILE EMAIL.  URL encode all text and links
 */

var msg =`mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;

var html = '<a href="'+msg+'" class="btn btn-primary"><i class="fa fa-envelope-o"></i>  Send request for shell release</a><br>';


// Inject button.  Confirm that the releavnt page contents has loaded
// PRIOR to injectiong button.  This is to workaround Snap's lazyloading feature
$('p:contains("Once your shell is ready, use the link to send a confirmation mail")').after(html);



// Extract URL parameters
function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};