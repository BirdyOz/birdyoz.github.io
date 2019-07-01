/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @Date:   2018-06-22 15:01:21
 * @Last Modified by:   Greg Bird
 * @Last Modified time: 2019-07-01 14:09:21
 */

jQuery(document).ready(function($) {
    BuildBanner(); // Build dynamic banners
});

function BuildBanner() {
    // Extract breadcrumbs.  Create an array.  Only select items from breadcrumbs which refer to categories.
    var breadcrumbs = $(".breadcrumb-item>a");

    // Loop through the breadcrumbs, looking for sub-branding
    $(breadcrumbs).each(function() {
        var breadcrumb = $(this).text();
        // Convert breadcrumb into "slug", then add class to body
        var breadcrumb_class = "breadcrumb-" + slugify(breadcrumb);
        console.log("@GB: breadcrumb_class = ", breadcrumb_class);
        $('body').addClass(breadcrumb_class);
    });
}



function slugify(text) {
    // https://gist.github.com/mathewbyrne/1280286
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/[^\w\-]+/g, '') // Remove all non-word chars
        .replace(/\-\-+/g, '-') // Replace multiple - with single -
        .replace(/^-+/, '') // Trim - from start of text
        .replace(/-+$/, '') // Trim - from end of text
        .replace(/[\s_-]+/g, '-');
}