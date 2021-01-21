/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2019-01-15 16:04:39
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2021-01-21 15:17:42
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

    add_text_to_grader(text_to_grader);
    // Limit the enrolments for the lecturer role to just 'guest'
    limit_enrolment_options();
});

function add_text_to_grader(text) {
    if (window.location.href.indexOf('/grade/report/grader/index.php') > 0 || window.location.href.indexOf('/local/gradebook_reskin/index.php') > 0) {
        $(".card-monash").after(text);
    }
}

function limit_enrolment_options() {
    //If I am on the enrolment screem and I DO NOT have "limit_enrolment=off"
    if (window.location.href.indexOf("user/index.php?id=") > 0 & window.location.href.indexOf("limit_enrolment=off") < 0) {

        var fit_email = $('.myprofileitem.email').text().toLowerCase();
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
            $('.inplaceeditable').attr('data-options', '');
            $('.quickediticon .fa-pencil').hide();

            // Hide edit and un enrol links

            $('a.editenrollink').hide();
            $('a.unenrollink').hide();


            //Selectively turn these back on again, if role = guest
            var guests = $('a.quickeditlink');
            console.log("@GB: guests = ", guests);
            $.each(guests, function(index, val) {
                /* iterate through array or object */
                txt = $.trim($(this).text());
                console.log("@GB: txt = ", txt);
                // If Guest
                if (txt == "Guest") {
                    console.log("@GB: Guest found");
                    // Turn links back on again
                    $('a.editenrollink').eq(index).show();
                    $('a.unenrollink').eq(index).show();
                }
            });

            // Listen for mouse click on 'Enrol users' button
            $(".enrol_manual_plugin").click(function() {
                // Wait 3 secs while the list loads
                setTimeout(function() {
                    var options = $('select#id_roletoassign option');
                    if (options.length > 0) {
                        console.log("@GB: options = ", options);
                        $.each(options, function(index, val) {
                            txt = $(this).text();
                            console.log("@GB: txt = ", txt);
                            if (txt == "Guest") {
                                console.log("@GB: Guest found");
                                $(this).attr('selected', 'selected');

                            } else {
                                $(this).remove()
                            }
                            /* iterate through array or object */
                        });
                    }

                }, 2000);
            });
        }
    }

}