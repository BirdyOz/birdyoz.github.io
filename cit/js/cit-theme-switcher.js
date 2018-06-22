/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-06-22 15:01:21
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2018-06-22 16:10:04
 */

$(function() {

    // Inject CSS file - so that it loads before <body>
    $('head').append('<link rel="stylesheet" type="text/css" href="https://birdyoz.github.io/cit/css/variants.css">');

    // Preload banner variants
    $(['cit-banner-blue-green.jpg', 'cit-banner-blue-purple.jpg', 'cit-banner-green-blue.jpg', 'cit-banner-green-yellow.jpg', 'cit-banner-orange-pink.jpg', 'cit-banner-pink-blue.jpg', 'cit-banner-pink-orange.jpg', 'cit-banner-yellow-green.jpg', 'cit-default-snap-banner.jpg']).preload();


    // Switcher buttons - Trap click actions
    $('#switcher a').click(function(event) {
        var btn = $(this);
        lastClass = btn.attr('class').split(' ').pop();
        console.log("@GB: lastClass = ", lastClass);
        var btntxt = btn.text();
        $('#page-mast>h1>a').text(btntxt);
        $('body').alterClass('cit-banner-*', lastClass);
        event.preventDefault();
    });
});

// Swap out classes
$.fn.alterClass = function(removals, additions) {
    var self = this;
    if (removals.indexOf('*') === -1) {
        // Use native jQuery methods if there is no wildcard matching
        self.removeClass(removals);
        return !additions ? self : self.addClass(additions);
    }
    var patt = new RegExp('\\s' +
        removals.replace(/\*/g, '[A-Za-z0-9-_]+').split(' ').join('\\s|\\s') +
        '\\s', 'g');
    self.each(function(i, it) {
        var cn = ' ' + it.className + ' ';
        while (patt.test(cn)) {
            cn = cn.replace(patt, ' ');
        }
        it.className = $.trim(cn);
    });
    return !additions ? self : self.addClass(additions);
};

// Preload banner images
$.fn.preload = function() {
    this.each(function() {
        $('<img/>')[0].src = "https://birdyoz.github.io/cit/banners/" + this;
    });
};