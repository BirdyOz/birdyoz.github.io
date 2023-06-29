/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2017-03-31 13:08:18
 * @Last Modified by:   BirdyOz
 * @Last Modified time: 2023-05-31 11:20:10
 */


/*
 *
 * This script dymanically builds a Moodle course banner to include:
 *   - Descriptive title
 *   - Unit Code(s)
 *   - Qualification Code(s)
 *   - Year
 *   - A badge to indicate the site is in development (if appropriate)
 */


// Ensure that jQuery does not conflict with any Moodle code
$.noConflict();
jQuery(document).ready(function($) {
    // $(document).ready(function() {
    // Define global variables
    var logo, codes_array, details_array, code_text, title_text, qualification_text, qualification_name, year_text = "";

    //Set default branding logo to 'Main'
    $('header#page-header').addClass("Main");


    // Extract breadcrumbs.  Create an array.  Only select items from breadcrumbs which refer to categories.
    var breadcrumbs = $("ul.breadcrumb a[href*='categoryid'] span[itemprop='title']");

    // Loop through the breadcrumbs, looking for sub-branding
    $(breadcrumbs).each(function() {
        var breadcrumb = $(this).text();

        // Convert breadcrumb into "slug", then add class to #page-header.
        // This will allow for more granular sub-branding, once banner images have been developed

        var breadcrumb_class = "breadcrumbs-" + slugify(breadcrumb);
        $('header#page-header').addClass(breadcrumb_class);
    });



    // Extract course short description from breadcrumbs.  It is the current banner header
    var description = $('.page-header-headings > h1').text();

    // This regex pattern matches the GOTAFE 2017 course naming convention
    //  UNIT CODE: Unit Title ([Qualification(s), ]Year)
    //      OR
    //  UNIT CODE 1 | UNIT CODE 2 | UNIT CODE 3: Cluster Title([Qualification(s), ]Year)
    //
    // Examples:
    //  HLTEN511B: Provide nursing care for clients requiring palliative care (2016)
    //  AHCHBR203A: Provide daily care for horses (VETIS, 2016)
    //  SITXMPR501: Obtain and manage sponsorship (Hosp, 2016)
    //  BSBWOR502A: Ensure Team Effectiveness (ID16)
    //  AHCWRK502A | AHCWRK503A: Reports & Data Cluster 1 (Wine, ID17)
    //
    // Capture groups:
    // /^(.*)\:(.*)\((.*)\)
    //    $1    $2    $3
    //  $1 - Code(s)
    //  $2 - Descriptive title
    //  $3 - Qualification(s) (if defined) & Year

    var re = /^(.*)\:(.*)\((.*)\)/gi;
    var TitleArray = re.exec(description);


    // Only parses title if it matches the naming convention; ie it matches the pattern defined by the regex
    // This is to avoid unnecessary processing of descriptions that do not match the naming convention

    if (TitleArray) {

        // Extract unit codes_array
        codes_array = TitleArray[1].split("|").sort();
        // Trim whitespace
        codes_array = $.map(codes_array, function(value) {
            return value.trim();
        });

        // For each unit code, add class to #page-header.
        // This will allow for more granular sub-branding, should it be needed
        $.each(codes_array, function(index, val) {
            var code_class = "code-" + slugify(val);
            $('header#page-header').addClass(code_class);
        });

        // If there only one code
        if (codes_array.length === 1) {
            // Single Unit of Comptency
            code_text = "<div id =\"codes\"><span>Code: <\/span>" + codes_array + "<\/div>";

        } else {
            // Cluster of 2 or more units
            // concatenate with ", ".  Use " & " before the last code
            code_text = "<div id =\"codes\"><span>Codes: <\/span>" + codes_array.slice(0, codes_array.length - 1).join(", ") + " & " + codes_array[codes_array.length - 1] + "<\/div>";
        }
        // Append below banner heading
        $('.page-header-headings').append(code_text);

        // Extract descriptive title
        title_text = TitleArray[2].trim();

        // Update banner heading, to match descriptive title
        $('.page-header-headings > h1').text(title_text);

        // Extract year and qualification
        details_array = TitleArray[3].split(",");
        details_array = $.map(details_array, function(value) {
            return value.trim();
        });
        console.log("@GB: details_array = ", details_array);

        // Separate out year from qualification
        if (details_array.length === 1) {
            year_text = details_array[0];
        } else {
            // If there is a qualification, add it to the banner
            qualification_str = details_array.slice(0, details_array.length - 1).join(", ");
            qualification_text = "<div id =\"qualification\"><span>qualification: <\/span>" + qualification_name + "<\/div>";
            $('.page-header-headings').append(qualification_text);

            // Add 'qualification' class to #page-header.
            var qualification_class = "qualification-" + slugify(qualification_str);
            $('header#page-header').addClass(qualification_class);
            year_text = details_array[details_array.length - 1];
        }

        // Update Page Headings to prepend year.  Add as a bootstrap panel
        $('.page-header-headings').prepend("<div id =\"year\" class=\"panel pull-right text-center\"> <div class=\"panel-body \">" + year_text + "<\/div>");

        // Add 'Year' class to #page-header.
        var year_class = "year-" + slugify(year_text);
        $('header#page-header').addClass(year_class);

        // Is this subject 'In Development'?
        if (year_text.substring(0, 2) === "ID") {
            // Add footer to 'Year' panel
            $('#year').prepend("<div class=\"panel-heading\">In Development<\/div>");
            $('#year').addClass("panel-danger");
        }

        // Is this subject 'In Development'?
        if (year_text.substring(0, 2) === "LD") {
            // Add footer to 'Year' panel
            $('#year').prepend("<div class=\"panel-heading\">Learning Development<\/div>");
            $('#year').addClass("panel-danger");
        }

        // Is this subject 'In Development'?
        if (year_text.substring(0, 2) === "SP") {
            // Add footer to 'Year' panel
            $('#year').prepend("<div class=\"panel-heading\">Staff Sandpit<\/div>");
            $('#year').addClass("panel-danger");
        }
    }
});


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