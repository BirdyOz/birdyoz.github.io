/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2019-03-08 10:05:22
* @Last Modified by:   Greg Bird
* @Last Modified time: 2019-03-14 08:54:52
*/

var url = (window.location.href).split("#")[0];
var title = document.title;

var msg = "mailto:onlinecampus@gotafe.vic.edu.au?subject=Request%20of%20a%20Moodle%20shell%20check%20and%20self%20enrol%20activation&amp;cc=amclachlan@gotafe.vic.edu.au%20&amp;body=The%20following%20shell%20is%20ready%20for%20final%20check%20and%20release.%20%0A%0A" + encodeURI(title) + "%0AURL%3A%20" + encodeURI(url) + "%0A%0AThe%20assessment%20and%20feedback%20methodology%20used%20is%20%28choose%20one%29%3A%20%0A%0AA1%3A%20Full%20Assessment%20online%20grading%20and%20feedback%0A%0A%20%20%20%20%20%20-%20%20%20Online%20Moodle%20assessments%20have%20been%20created%20%28eg%20Moodle%20Assignment%2C%20Quiz%2C%20Forum%29%2C%20with%20advanced%20grading%20for%20each%20assessment%2C%20and%20online%20Final%20Result%20is%20set%20up.%20%28This%20option%20can%20include%20assessments%20where%20you%20have%20uploaded%20the%20instructions%20or%20resources%20to%20a%20learner%20in%20word%2C%20pdf%20etc%20in%20additional%20files%20within%20the%20assessment%29%0A%0AA2%3A%20Paper%20based%20Assessment%20with%20online%20grading%20and%20feedback%0A%0A%20%20%20%20%20%20-%20%20Assessment%20Tool%20for%20Learners%20FLA-43%20is%20uploaded%2C%20Moodle%20assessment%20tool%20and%20advanced%20grading%20is%20set%20up%20for%20each%20assessment%20task%20and%20online%20Final%20Result%20is%20set%20up.%20%28This%20option%20can%20also%20include%20online%20quiz%20assessment%29%0A%0AA3%20Paper%20based%20Assessment%20and%20Paper%20based%20feedback%0A%0A%20%20%20%20%20%20-%20%20Assessment%20tool%20for%20Learners%20FLA-43%20is%20uploaded%20on%20the%20Assessment%20tab%2C%20Assessment%20Feedback%20form%20is%20uploaded%20in%20the%20Teacher%20Resource%20tab%2C%20and%20an%20online%20Final%20Result%20is%20created.%20%0A%0AAn%20initial%20piece%20of%20learning%20material%20and%20commencement%20activity%20%28quiz%2C%20forum%2C%20lesson%29%20for%20each%20Unit%20have%20been%20created%20in%20the%20Let%E2%80%99s%20Start%20Learning%20tab.%0A%0AThe%20delivery%20plan%2C%20assessment%20map%20and%20assessment%20tool%20for%20assessors%20have%20been%20uploaded%20to%20the%20Teacher%20Resources%20tab.%0A%0A%0A%0AKind%20regards";


var html = '<a href="'+msg+'" class="btn btn-primary"><i class="fa fa-envelope-o"></i>  Send confirmation email</a><br>';

document.write(html);