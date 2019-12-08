/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-03-08 10:05:22
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-12-09 10:55:06
*/



var url = (window.location.href).split("#")[0];
console.log("@GB: url = ", url);
var courseid = getUrlParameter('id');
console.log("@GB: courseid = ", courseid);
var title = document.title;
console.log("@GB: title = ", title);


var msg ="mailto:onlinecampus@gotafe.vic.edu.au?subject=Shell%20ready%20for%20activation%20%28Course%20ID%20%3D%20" + courseid + "%29&body=This%20shell%20is%20ready%20for%20final%20edit%20and%20release%3A%20%0A%0A" + title + " %0AURL%3A%20https%3A%2F%2Fgotafe.trainingvc.com.au%2Fcourse%2Fview.php%3Fid%3D" + courseid + "%0A%0AI%20plan%20to%20begin%20teaching%20on%3A%0A%0AI%20need%20these%20trainers%20enrolled%20in%20this%20shell%3A%0A%0AMany%20thanks";


var html = '<a href="'+msg+'" class="btn btn-primary"><i class="fa fa-envelope-o"></i>  Send request for shell release</a><br>';
console.log("@GB: html = ", html);

// $('p:contains("Once your shell is ready, use the link to send a confirmation mail")').after(html);


document.write(html);



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