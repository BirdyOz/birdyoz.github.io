/*
* @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
* @First Created:   2020-06-01 09:30:44
* @Last Modified by:   birdyoz
* @Last Modified time: 2020-06-01 10:31:06
*/

/*
* Extend Snap's category based branding to include sub-categories
*/

$(function() {
    // Extract breadcrumbs.  Only select hrefs which link to categories.
    var breadcrumbs = $(".breadcrumb-item>a[href*='category']");

    // Loop through the breadcrumbs
    $(breadcrumbs).each(function() {
        // Get category href
        var url = $(this).attr("href");

        // Get category id
        var id = url.substr(url.indexOf("=") + 1);

        // add category as class to body
        $('body').addClass("category-" + id)
    });
});
