/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2019-01-15 16:04:39
 * @Last Modified by:   birdyoz
 * @Last Modified time: 2019-01-15 18:08:20
 */


// JQuery - on page load
$(function() {
    // Add back to top button
    back_to_top();

    // In the Boost theme, extract the show-hide button from the cog menu and integrate back into UI
    extract_show_hide();

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

function editing_on_off(argument) {
    // body...
}

function contact_support() {
    // Get user and environment variables
    var fit_user = $('.myprofileitem.fullname').text();
    var fit_URL = document.location.href;
    var fit_ID = $.urlParam('id');
    var fit_email = $('.myprofileitem.email').text();
    var fit_unit = $('header>h1').text();

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
        console.log("@GB: html = ", html);
        var href = $(menu).attr('href');
        console.log("@GB: href = ", href);
        var btn = '<a class="btn btn-primary" id="edit-on-off" href="'+href+'">'+html+'</a>';
        console.log("@GB: btn = ", btn);
        $("page-navbar").before(btn);
    }
}