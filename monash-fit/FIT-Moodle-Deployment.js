/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2019-01-15 16:04:39
 * @Last Modified by:   birdyoz
 * @Last Modified time: 2019-01-24 16:05:11
 *
 *
 * NOTE TO FIT Administators:
 * This script includes code to limit the enrolment options for lecturers.
 * To bypass this, add staff email details to the 'allowed_users' array,
 * OR append the URL to include '&limit_enrolment=off'
 */




// JQuery - on page load
$(function() {
    // Add back to top button
    back_to_top();

    // In the Boost theme, extract the show-hide button from the cog menu and integrate back into UI
    extract_show_hide();

    // Limit the enrolments for the lecturer role to just 'guest'
    limit_enrolment_options();

    // Add 'Contact support', but only if editing is on
    if ($('body.editing').length > 0) {
        // Invoke contact support button
        contact_support();
    }

    // 'Lift' the Turn editing on/off button from the Boost cog menu
    // and integrate it back into the Moodle UI
    editing_on_off();


    // Button colur switcher, bsed on LocalStorage (Confirm with FIT)
    localStorage.getItem('liElements');
    localStorage.getItem('aElements');
    var btn = localStorage.getItem('btn');

    localStorage.getItem('aElements');
    localStorage.getItem('tdElements');

    var btn = document.getElementsByClassName('btn');
    for (var i = 0; i < btn.length; i++) {
        btn[i].style.color = localStorage.getItem('btn');
    }
});

function back_to_top() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function() {
            backToTop();
        });
        $('#back-to-top').on('click', function(e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
}


function contact_support() {
    // Get user and environment variables
    var fit_user = $('.myprofileitem.fullname').text();
    console.log("@GB: fit_user = ", fit_user);
    var fit_URL = document.location.href;
    console.log("@GB: fit_URL = ", fit_URL);
    var fit_ID = getUrlParameter('id');
    console.log("@GB: fit_ID = ", fit_ID);
    var fit_email = $('.myprofileitem.email').text();
    console.log("@GB: fit_email = ", fit_email);
    var fit_unit = $('.m-l-0 .font-weight-bold').text();
    console.log("@GB: fit_unit = ", fit_unit);

    // Load external script
    $.getScript("//d3932137p5ikt7.cloudfront.net/widget_v3/loader.min.js")
        .done(function(script, textStatus) {
            sb_contact_form('initialize', {
                company: 'fit-monash',
                height: '500px',
                position: 'bottom',
                email: fit_email,
                name: fit_user,
                subject: 'Moodle issue in \'' + fit_unit + '\' (ID: ' + fit_ID + ')',
                locale: 'en',
                captcha: 'false',
                forwarding_address_id: '14662'
            });
        })
        .fail(function(jqxhr, settings, exception) {
            console.log("@GB: exception = ", exception);
            console.log("@GB: settings = ", settings);
        });
}


function extract_show_hide() {
    // Target the turn editing on/off menu item
    var menu = $('.context-header-settings-menu a[href*="edit=o"]');


    if (menu.length) {
        console.log("@GB: menu = ", menu);
        var html = $(menu).html();

        // set different button themes for editing on or off
        if (html.indexOf("Turn editing on") >= 0) {
            var state = "btn-primary";
        } else {
            var state = "btn-success";
        }
        console.log("@GB: html = ", html);
        var href = $(menu).attr('href');
        console.log("@GB: href = ", href);
        var btn = '<a class="btn ' + state + '" id="edit-on-off" href="' + href + '"><span>' + html + '</span></a>';
        console.log("@GB: btn = ", btn);

        // Add button before breadcrumbs
        $("#page-navbar").before(btn);
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
                console.log("@GB: n = ", n);
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

var getUrlParameter = function getUrlParameter(sParam) {
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