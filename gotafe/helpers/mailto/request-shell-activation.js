/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-03-08 10:05:22
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-03-21 15:50:57
*/

var url = (window.location.href).split("#")[0];
var courseid = url.split("=")[1];
var title = document.title;



var msg ="mailto:onlinecampus@gotafe.vic.edu.au?subject=Shell%20ready%20for%20activation%20%28Course%20ID%20%3D%20" + courseid + "%29&body=This%20shell%20is%20ready%20for%20final%20edit%20and%20release%3A%20%0A%0A" + title + " %0AURL%3A%20https%3A%2F%2Fgotafe.trainingvc.com.au%2Fcourse%2Fview.php%3Fid%3D" + courseid + "%0A%0AI%20plan%20to%20begin%20teaching%20on%3A%0A%0AI%20need%20these%20trainers%20enrolled%20in%20this%20shell%3A%0A%0AMany%20thanks";


var html = '<a href="'+msg+'" class="btn btn-primary"><i class="fa fa-envelope-o"></i>  Send request for shell release</a><br>';

document.write(html);