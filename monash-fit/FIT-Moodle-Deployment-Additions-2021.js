/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2019-01-15 16:04:39
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2021-01-27 14:56:19
 *
 *
 * NOTE TO FIT Administators:
 * This script includes code to limit the enrolment options for lecturers.
 * To bypass this, add staff email details to the 'allowed_users' array,
 * OR append the URL to include '&limit_enrolment=off'
 */




// JQuery - on page load
$(function() {
    // Define text to graders
    var text_to_grader = '<div class="alert alert-warning" role="alert"> <strong>Attention Graders:</strong> (Put statement here)</div>';

    limit_enrolment_options();
});

function add_text_to_grader(text) {
    if (window.location.href.indexOf('/grade/report/grader/index.php') > 0 || window.location.href.indexOf('/local/gradebook_reskin/index.php') > 0) {
        $(".grade-navigation").before(text);
    }
}


function limit_enrolment_options() {
    //If I am on the enrolment screem and I DO NOT have "limit_enrolment=off"
    if (window.location.href.indexOf("user/index.php?id=") > 0 & window.location.href.indexOf("limit_enrolment=off") < 0) {

        // Determine current user
        var curr_userid = $('.logininfo');
        console.log("@GB: curr_userid = ", curr_userid);


        var fit_email = $('.myprofileitem>a').text().toLowerCase();
        console.log("@GB: fit_email = ", fit_email);

        // whitelist of allowed users who DO NOT have the enrolment restriction
        var allowed_users = [
            "jamie.fulcher@monash.edu",
            "margot.schuhmacher@monash.edu",
            "matt.chen@monash.edu",
            "milad.sayad@monash.edu",
            "rajib.uddin@monash.edu"
        ];

        if ($.inArray(fit_email, allowed_users) !== -1) {
            // I am an allowed user
            console.log("@GB: allowed_users = ", allowed_users);
        } else {
            // I am NOT an allowed user so restrict my access

            //find all role chnages (pen symbol)
            var change_role = $('.inplaceeditable');
            $.each(change_role, function(index, val) {
                // Extract roles as string
                txt = $(this).attr('data-options');
                console.log("@GB: txt = ", txt);
                // If roles include "Lecturer" (including quotes)
                if (txt.indexOf('"Lecturer"') !== -1) {
                    // Remove lecturer role from JSON string
                    txt = txt.replace('{"key":3,"value":"Lecturer"},','');
                    // Inject string back in as attributes.
                    // This will remove "lecturer" from the dropdown list
                    txt = $(this).attr('data-options',txt)
                }
            });

            // Listen for mouse click on 'Enrol users' button
            $(".enrol_manual_plugin").click(function() {
                // Wait 2 secs while the list loads
                setTimeout(function() {
                    var options = $('select#id_roletoassign option');
                    if (options.length > 0) {
                        $.each(options, function(index, val) {
                            txt = $(this).text();
                            // Assign role includes "Lecturer"
                            if (txt == "Lecturer") {
                                console.log("@GB: Lecturer found");
                                $(this).remove();
                                console.log("@GB: Lecturer removed");
                            }
                        });
                    }

                }, 2000);
            });
        }
    }

}