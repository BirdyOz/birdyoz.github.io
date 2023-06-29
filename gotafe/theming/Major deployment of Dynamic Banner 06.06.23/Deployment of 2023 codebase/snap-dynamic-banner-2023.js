/*
 * @Author: Greg Bird (@BirdyOz, greg.bird.oz@gmail.com)
 * @First Created:   2017-03-31 13:08:18
 * @Last Modified by:   gbird
 * @Last Modified time: 2023-06-09 15:49:13
 */


jQuery(document).ready(function($) {
    BuildBanner(); // Build dynamic banners
    AddSearhToMyCourses(); // Add search box to Snap's My Courses UI
});

function BuildBanner() {
    console.log("@GB: BuildBanner invoked (Ver 31.05.23)");
    // Only invoke The BuildBarrer function if within a course
    // If I am not at the site level, I must be in a course
    if ($('.format-site').length === 0) {
        // I am in a course, so add a 'hook' to set general styles
        $('body').addClass('gotafe-in-course');
        // Define global variables
        var logo, unitcodes_array, details_array, code_text, title_text, qualification_text, qualification_name, year_text = "";
        // Extract breadcrumbs.  Create an array.  Only select items from breadcrumbs which refer to categories.
        var breadcrumbs = $(".breadcrumb-item>a[href*='categoryid']");
        // Loop through the breadcrumbs, looking for sub-branding
        $(breadcrumbs).each(function() {
            var breadcrumb = $(this).text();
            // Convert breadcrumb into "slug", then add class to body
            var breadcrumb_class = "gotafe-breadcrumb-" + slugify(breadcrumb);
            console.log("@GB: breadcrumb_class = ", breadcrumb_class);
            $('body').addClass(breadcrumb_class);
        });

        // Extract course short description from breadcrumbs.  It is the current banner header
        var description = $('#page-mast>h1>a').text();

        // This regex pattern matches the GOTAFE 2023 course naming convention
        //  UNIT CODE: Unit Title ([qualification, ]Year)
        //      OR
        //  UNIT CODE 1 | UNIT CODE 2 | UNIT CODE 3: Cluster Title ([qualification, ]Year)
        //
        // Examples:
        //  HLTEN511B: Provide nursing care for clients requiring palliative care (2023)
        //  AHCHBR203A: Provide daily care for horses (ACM40412, 2023)
        //  ACMBEH302|ABC123|XYZ345: Provide enrichment for animals (ACM20121-ACM30122-ACM40418, ID23)
        //
        // Capture groups:
        // /^(.*)\:(.*)\((.*)\)
        //    $1    $2    $3
        //  $1 - Code(s)
        //  $2 - Descriptive title
        //  $3 - qualification (if defined) & Year

        var re = /^(.*)\:(.*)\((.*)\)/gi;
        var TitleArray = re.exec(description);

        // Only parse title if it matches the naming convention; ie it matches the pattern defined by the regex
        // This is to avoid unnecessary processing of descriptions that do not match the naming convention
        if (TitleArray) {
            // Extract unitcodes_array
            unitcodes_array = TitleArray[1].split("|").sort();
            // Trim whitespace
            unitcodes_array = $.map(unitcodes_array, function(value) {
                return value.trim();
            });

            // Extract descriptive title
            title_text = TitleArray[2].trim();
            // Update banner heading, to match descriptive title
            $('#page-mast>h1>a').text(title_text);

            // Extract year and qualification
            details_array = TitleArray[3].split(",");
            details_array = $.map(details_array, function(value) {
                return value.trim();
            });

            // Extract year
            year_text = details_array[details_array.length - 1];
            // Update Page Headings to prepend year.  Add as a bootstrap panel
            $('#page-mast>h1').before("<div id =\"gotafe-banner-year\" class=\"card border-white text-white bg-dark ml-2 mb-1 float-right text-center\"> <div class=\"card-body p-1 pl-4 pr-4\">" + year_text + "<\/div>");
            // Add 'Year' class to #page-header.
            var year_class = "gotafe-year-" + slugify(year_text);
            $('body').addClass(year_class);
            // If I have one or more qualifications

            if (details_array.length > 1) {

                // Find Qual Codes(s)
                qualification_str = details_array.slice(0, details_array.length - 1).join(", ");
                qualcodes_array = qualification_str.split("-");

                // For each qualcode code, add class to body.
                // This will allow for more granular sub-branding, once banner images have been developed
                $.each(qualcodes_array, function(index, val) {
                    var qualcode_class = "gotafe-qualcode-" + slugify(val);
                    console.log("@GB: qualcode_class = ", qualcode_class);
                    $('body').addClass(qualcode_class);
                });

                // If there is more than one code
                if (qualcodes_array.length === 1) {
                    // Single qualification
                    qualification_text = "<div id =\"gotafe-banner-quals\"><span class=\"text-muted\">Qualification: <\/span>" + qualcodes_array + "<\/div>";
                } else {
                    // Cluster of 2 or more quals
                    // concatenate with ", ".  Use " & " before the last code
                    qualification_text = "<div id =\"gotafe-banner-quals\"><span class=\"text-muted\">Qualifications: <\/span>" + qualcodes_array.slice(0, qualcodes_array.length - 1).join(", ") + " & " + qualcodes_array[qualcodes_array.length - 1] + "<\/div>";
                }
                $('#page-mast>h1').after(qualification_text);
            }


            // For each unit code, add class to body.
            // This will allow for more granular sub-branding, should it be needed
            $.each(unitcodes_array, function(index, val) {
                var unitcode_class = "gotafe-unitcode-" + slugify(val);
                console.log("@GB: unitcode_class = ", unitcode_class);
                $('body').addClass(unitcode_class);
            });

            // If there is more than one code
            if (unitcodes_array.length === 1) {
                // Single Unit of Comptency
                code_text = "<div id =\"gotafe-banner-units\"><span class=\"text-muted\">Unit: <\/span>" + unitcodes_array + "<\/div>";
            } else {
                // Cluster of 2 or more units
                // concatenate with ", ".  Use " & " before the last code
                code_text = "<div id =\"gotafe-banner-units\"><span class=\"text-muted\">Units: <\/span>" + unitcodes_array.slice(0, unitcodes_array.length - 1).join(", ") + " & " + unitcodes_array[unitcodes_array.length - 1] + "<\/div>";
            }
            // Append below banner heading
            $('#page-mast>h1').after(code_text);
            // Is this subject 'In Development'?
            if (year_text.substring(0, 2) === "ID") {
                // Add footer to 'Year' panel
                $('#gotafe-banner-year').prepend("<div class=\"card-header\">In Development<\/div>");
                $('#gotafe-banner-year').toggleClass('bg-danger bg-dark');
            }
            // Is this subject 'Learning Development'?
            if (year_text.substring(0, 2) === "LD") {
                $('#gotafe-banner-year .card-body').text("Learning and Development");
                $('#gotafe-banner-year').toggleClass('bg-success bg-dark');
            }
            // Is this subject 'Staff Sandpit'?
            if (year_text.substring(0, 2) === "SP") {
                $('#gotafe-banner-year .card-body').text("Staff Sandpit");
                $('#gotafe-banner-year').toggleClass('bg-info bg-dark');
            }
            // Is this subject 'Not Required'?
            if (year_text.substring(0, 2) === "NR") {
                $('#gotafe-banner-year .card-body').text("Not required");
                $('#gotafe-banner-year').toggleClass('bg-danger gotafe-not-required bg-dark');
            }
            // If I am a master copy
            if (year_text.toLowerCase().includes("master copy")) {
                $('#gotafe-banner-year .card-body').text("MASTER COPY");
                $('#gotafe-banner-year').toggleClass('bg-danger bg-dark');
            }
        }
    }
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

function AddSearhToMyCourses() {
    // Adds a search box to the top of the SNAP "My Courses" UI
    var snip = '<div class="clearfix"></div> <div class="card-block snap-mycourses-search"> <div class="card-text content"> <div class="no-overflow"> <form id="coursesearch" action="/course/search.php" method="get"> <fieldset class="coursesearchbox invisiblefieldset"> <label for="shortsearchbox">Search all courses </label> <input name="search" id="shortsearchbox" type="text" value=""> <input type="submit" value="Go"> </fieldset> </form> </div> <div class="footer"></div> </div>';
    $('#snap-pm-courses-current').prepend(snip);
    $('#snap-pm-courses-current').not(':has(#snap-pm-courses-current-cards)').addClass('gotafe-no-courses');
}