//Written by D. Gilogley, Instructure Inc
//2019.01.08 - Forgot/Set password
// If you put this in your Theme's JS - You can then had our the URL
// "example.instructure.com/login/canvas?forgotpassword=true"
// This will auto take them forgot/reset password page of the Canvas login


//=================================================================
//=============== Main JS Starts below ============================

//Ensure Jquery is loaded on the page
if (typeof jQuery == 'undefined' || typeof jQuery === undefined || typeof jQuery === null) {
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.type = 'text/javascript';
    jqTag.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
    headTag.appendChild(jqTag);
    jqTag.onload = myJQueryCode;
} else {
    myJQueryCode();
}

// Main function
function myJQueryCode() {
    //Ensure that the page has loaded
    $(document).ready(function () {
        //If on the login page
        if (document.location.pathname === "/login/canvas") {
            //if the URL is ".../login/canvas?newlogin=true" then take the user to the forgot password page
            if (getUrlVars().newlogin == "true") {
                $('.forgot_password_link').click();
            }
            //Change the text display to "Set or Forgetpassword" on the login page and forgot password page
            $('#login_forgot_password').text("Set or Forgot password?");
            $('#forgot_password_instructions').text("Enter your Email address and we'll send a link to set or change your password.");
        }
    });
}

//Function that gets the ? paramaters from a URL and returns them as a JSON array
function getUrlVars(url) {
    //if no variable, set it to the URL
    if (url === undefined) {
        url = window.location.href;
    }

    var vars = {};
    var parts = url.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = decodeURIComponent(value);
    });
    return vars;
}
//walkme
(function () {
    var walkme = document.createElement('script');
    walkme.type = 'text/javascript';
    walkme.async = true;
    walkme.src = 'https://cdn.walkme.com/users/82fdc2971f204542b025ca212b1e7522/walkme_82fdc2971f204542b025ca212b1e7522_https.js';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(walkme, s);
    window._walkmeConfig = {
        smartLoad: true
    };
})();

// 20190627 dcollett adding UoM privacy message link to footer

$('#footer-links').prepend('<a href="https://lms.unimelb.edu.au/canvas-privacy-collection-notice" target="_blank">Privacy collection notice</a>');

//20190716 dunt hiding the default email selection row

function removeDefaultEmail(){
    var node = document.getElementById('default_email_id');
    if (node){
        node.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode)
    }
}

if( document.readyState !== 'loading' ) {
    removeDefaultEmail();
} else {
    document.addEventListener('DOMContentLoaded', removeDefaultEmail);
}

//document.addEventListener("DOMContentLoaded", function () {
//    var node = document.getElementById('default_email_id');
//    if (node){
//        node.parentNode.parentNode.parentNode.removeChild(node.parentNode.parentNode)
//    }
//});

//=================================================================
// 20190724 marathv adding UI components for subject content builds
// Calling message handler here.. not waiting for page load
uomMessageHandler();
$(window).load(function () {
    uomUpdateBreadcrumbNav();
    uomCustomUIFunctions();
});

function uomCustomUIFunctions() {
    uomUICreateTiles();
    uomUITabGenerate();
    uomUISetupAccordions();
    uomUIShowHideLinks();
    uomUIClickReveal();
    uomUISetupButtons();
    uomUITextarea();
    uomUIVideoBugFix();
    uomUISetupSlider();
    uomUISetupModals();
    uomUICheckbox();
	  uomUIDropdown();
    uomUtilLocalStorageHandler();
}

function getIframeElementByWindow(sourceWindow) {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow === sourceWindow) {
            return iframes[i];
        }
    }

    return null;
}

function uomMessageHandler() {
    window.addEventListener('message', function (event) {

        try {
            var message = JSON.parse(event.data);
            if (message.subject === 'uomui.frameResize') {
                var iframe = getIframeElementByWindow(event.source);
                if (iframe) {
                    iframe.height = message.height + "px";
                    iframe.style.height = message.height + "px";
                    event.source.postMessage(JSON.stringify({
                        subject: "uomui.frameResize",
                        value: true
                    }), event.origin);
                }
            }
        } catch (err) {}

    }, false);
}

function uomFillSlider(slider) {

    // Update label
    var val = slider.parentElement.querySelector(".uom-ui-value-label");
    val.innerHTML = "Value: " + slider.value;
    slider.setAttribute("aria-valuenow", slider.value);

    var percentage = 100 * (slider.value - slider.min) / (slider.max - slider.min);
    // now we'll create a linear gradient that separates at the above point
    // Our background color will change here
    var bg = "linear-gradient(90deg, #4074B2 " + percentage + "%, #d3d3d3 " + (percentage + 0.1) + "%)";
    slider.style.background = bg;
}

function uomUISetupSlider() {
    var sliders = document.querySelectorAll('.uom-ui-slider');
    for (var i = 0; i < sliders.length; i++) {
        // Create slider element with attribute and set up event fro value change
        var thisSlider = document.createElement("input");
        var id = sliders[i].getAttribute("id");
        thisSlider.type = "range";
        thisSlider.min = sliders[i].hasAttribute("data-min") ? parseInt(sliders[i].getAttribute("data-min")) : "";
        thisSlider.max = sliders[i].hasAttribute("data-max") ? parseInt(sliders[i].getAttribute("data-max")) : "";
        thisSlider.value = sliders[i].hasAttribute("data-value") ? parseInt(sliders[i].getAttribute("data-value")) : "";
        thisSlider.step = sliders[i].hasAttribute("data-step") ? parseInt(sliders[i].getAttribute("data-step")) : "";
        thisSlider.classList.add("uom-ui-slider-input");
        thisSlider.oninput = function () {
            uomFillSlider(this);
        }

        var id = (id != null)? id : ("uom-slider"+i);
        thisSlider.setAttribute("id", id);

        // Add aria attributes
        thisSlider.setAttribute("aria-valuemin", thisSlider.min);
        thisSlider.setAttribute("aria-valuemax", thisSlider.max);
        thisSlider.setAttribute("aria-valuenow", thisSlider.value);

        var labels = document.createElement("div");
        labels.classList.add("labels");

        var minLabel = document.createElement("p");
        minLabel.innerHTML = thisSlider.min;
        var maxLabel = document.createElement("p");
        maxLabel.innerHTML = thisSlider.max;

        var valLabel = document.createElement("p");
        valLabel.innerHTML = "Value: " + thisSlider.value;
        valLabel.classList.add("uom-ui-value-label");

        labels.appendChild(minLabel);
        labels.appendChild(valLabel);
        labels.appendChild(maxLabel);
        sliders[i].appendChild(thisSlider);
        sliders[i].appendChild(labels);
    }
}

function uomUITabGenerate() {
    let tab = document.querySelectorAll('.uom-ui-tab');

    for (let i = 0; i < tab.length; i++) {

        tab[i].setAttribute("id", "uom-ui-tabid-" + i);
        let trigger = tab[i].getElementsByClassName('uom-ui-trigger');
        let panel = tab[i].getElementsByClassName('uom-ui-tab-panel');
        //Setting first heading a tab index 0
        trigger[0].setAttribute("tabindex", "0");
        trigger[0].setAttribute("aria-selected", "true");
        for (let j = 0; j < trigger.length; j++) {
            //Setting all attributes
            panel[j].setAttribute("tabindex", "0");
            trigger[j].setAttribute("role", "tab");
            trigger[j].setAttribute("aria-control", "ui-tablist-" + i + j);
            panel[j].setAttribute("aria-labelledby", "ui-tablist-" + i + j);
            if (j != 0) {
                //Setting every heading, except first heading a tab index -1 and aria-sellected false
                trigger[j].setAttribute("tabindex", "-1");
                trigger[j].setAttribute("aria-selected", "false");
                panel[j].style.display = "none";
            } else {
                trigger[j].classList.add("uom-ui-tab-selected");
            }

            trigger[j].setAttribute("data-id", "uom-ui-tab" + i + j);
            panel[j].setAttribute("data-id", "uom-ui-tab" + i + j);
            trigger[j].onclick = function () {
                let idx = this.closest(".uom-ui-tab").getAttribute('id');

                let tablist = document.getElementById(idx).getElementsByClassName('uom-ui-trigger');
                for (let l = 0; l < tablist.length; l++) {
                    tablist[l].classList.remove("uom-ui-tab-selected");
                    tablist[l].setAttribute("aria-selected", "false");
                    tablist[l].setAttribute("tab-index", "-1");
                    this.setAttribute("tab-index", "0");
                    this.setAttribute("aria-selected", "true");
                    if (l == (tablist.length - 1))
                        this.classList.add("uom-ui-tab-selected");
                }

                let panel = document.getElementById(idx).getElementsByClassName('uom-ui-tab-panel');
                for (let k = 0; k < panel.length; k++) {
                    panel[k].style.display = "none";
                }

                let dataattr = this.getAttribute('data-id');
                let element = document.body.querySelector('.uom-ui-tab-panel[data-id="' + dataattr + '"]');
                element.style.display = "block";

            }
            //Keyboard navigation for accessibility
            trigger[j].onkeydown = function (event) {
                let key = event.which.toString();
                let idx = this.closest(".uom-ui-tab").getAttribute('id');
                let tablist = document.getElementById(idx).getElementsByClassName('uom-ui-trigger');
                for (let l = 0; l < tablist.length; l++) {

                    switch (key) {
                        case '39':
                        case '40':
                            if (this == tablist[l]) {
                                tablist[l].setAttribute("tabindex", "-1");
                                tablist[l].setAttribute("aria-selected", "false");
                                if (l == (tablist.length - 1)) {
                                    tablist[0].onclick();
                                    tablist[0].focus();
                                    tablist[0].setAttribute("tabindex", "0");
                                    tablist[0].setAttribute("aria-selected", "true");
                                } else {
                                    tablist[l + 1].onclick();
                                    tablist[l + 1].focus();
                                    tablist[l + 1].setAttribute("tabindex", "0");
                                    tablist[l + 1].setAttribute("aria-selected", "true");
                                }
                            } else {

                            }

                            break;

                        case '37':
                        case '38':
                            if (this == tablist[l]) {
                                tablist[l].setAttribute("tabindex", "-1");
                                if (l == 0) {
                                    tablist[tablist.length - 1].onclick();
                                    tablist[tablist.length - 1].focus();
                                    tablist[tablist.length - 1].setAttribute("tabindex", "0");
                                    tablist[tablist.length - 1].setAttribute("aria-selected", "true");
                                } else {
                                    tablist[l - 1].onclick();
                                    tablist[l - 1].focus();
                                    tablist[l - 1].setAttribute("tabindex", "0");
                                    tablist[l - 1].setAttribute("aria-selected", "true");
                                }
                            }
                            break;

                    }

                }
            }

        }

        tab[i].insertAdjacentHTML('beforeend', "<p style='clear:both;'></p>");
    }
}

function uomUISetupAccordions() {
    let accordion = document.querySelectorAll('.uom-ui-accordion');

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].setAttribute("id", "uom_ui_accordion_ids_" + i);
        let trigger = accordion[i].getElementsByClassName('uom-ui-accordion-trigger');
        let panel = accordion[i].getElementsByClassName('uom-ui-accordion-panel');

        for (var j = 0; j < trigger.length; j++) {
            trigger[j].setAttribute("id", "uom_ui_accordion_trigger_ids_" + i + j);
            panel[j].setAttribute("aria-labelledby", "uom_ui_accordion_trigger_ids_" + i + j);
            panel[j].setAttribute("role", "region");
            trigger[j].setAttribute("tabindex", "0");
            trigger[j].setAttribute("aria-controls", "uom_ui_accordion_sect_" + i + j);
            panel[j].setAttribute("id", "uom_ui_accordion_sect_" + i + j);

            if (panel[j].getAttribute("data-open")) {
                trigger[j].setAttribute("aria-expanded", "true");
            } else {
                panel[j].setAttribute("hidden", "");
                trigger[j].setAttribute("aria-expanded", "false");
            }
        }

        if (i == (accordion.length - 1))
            uomUIAccordion();
    }
}

function uomUIShowHideLinks() {

    var hideLinks = document.querySelectorAll(".uom-ui-container .showHideLinks");
    for (var i = 0; i < hideLinks.length; i++) {
        hideLinks[i].addEventListener('click', function () {
            var link = this;
            var parentDiv = link.parentElement;
            var text = parentDiv.querySelector('.fullCitation');
            if (text.style.display == "none" || text.style.display == "") {
                link.innerHTML = "Hide full citation &lt;"
                text.style.display = "inline-block";
            } else {
                link.innerHTML = "See full citation &gt;"
                text.style.display = "none";
            }
        });
    }
}

function uomUISetupButtons() {
    var buttons = document.querySelectorAll(".uom-ui-button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].setAttribute("role", "button");
        buttons[i].setAttribute("tabindex", "0");

        buttons[i].addEventListener('keydown', function (event) {
            var target = event.target;
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.stopImmediatePropagation();
                target.click();
            }
        });
    }
}

function uomUIClickReveal() {
    var reveal = document.querySelectorAll(".uom-ui-reveal");
    var info = document.getElementsByClassName('uom-ui-hidden-content');

    for (var i = 0; i < reveal.length; i++) {
        reveal[i].setAttribute("aria-expanded", "false");
        reveal[i].setAttribute("aria-controls", "uom-ui-collapsible-" + i);
        reveal[i].setAttribute("role", "button");
        reveal[i].setAttribute("tabindex", "0");
        info[i].setAttribute("id", "uom-ui-collapsible-" + i);
        info[i].setAttribute("aria-hidden", "true");

        reveal[i].addEventListener('click', function () {
            if (uomUtilHasClass(this, "uom-disabled")) {
                return;
            }

            var afterclick = this.getAttribute("data-afterclick");

            if (afterclick == "disable") {
                this.classList.add("uom-disabled");
							this.setAttribute("aria-disabled", "true");
							this.setAttribute("tabindex", "-1");
						} else if (afterclick == "hide") {
							this.style.visibility = "hidden";
						} else if (afterclick == "hideinplace") {
							$(this).hide();
						}
            // Get associated info container
            var infoContainer = document.getElementById(this.getAttribute("aria-controls"));

            // Toggle if no afterclick attributes are set
            if (uomUtilHasClass(infoContainer, "show")) {
                this.setAttribute("aria-expanded", "false");
                infoContainer.setAttribute("aria-hidden", "true");
                infoContainer.classList.remove("show");
                return;
            }

            this.setAttribute("aria-expanded", "true");
            infoContainer.setAttribute("aria-hidden", "false");
            infoContainer.classList.add("show");

        });

        reveal[i].addEventListener('keydown', function (event) {
            var target = event.target;
            if (event.keyCode === 13 || event.keyCode === 32) {
                event.stopImmediatePropagation();
                target.click();
            }
        });
    }
}

function uomUICheckbox() {
    var checkBox = document.querySelectorAll(".uom-ui-checkbox");

    for (var i = 0; i < checkBox.length; i++) {
        var text = checkBox[i].innerHTML;
        checkBox[i].innerHTML = `<label class='uom-ui-checkbox'><input type="checkbox" data-index="${i}"><span class="uom-ui-checkbox-tick"></span> <span>${text}</span></label>`;
        checkBox[i].classList.remove("uom-ui-checkbox");
        checkBox[i].style.margin = "0";

        // If the checklist items are in a list add style
        if (checkBox[i].parentElement.tagName.toLowerCase() == "ul" || checkBox[i].parentElement.tagName.toLowerCase() == "ol") {
            checkBox[i].parentElement.classList.add("uom-ui-checklist-parent");
        }
    }
}

function uomUtilHasClass(target, className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}

function uomUIAccordion() {
    Array.prototype.slice.call(document.querySelectorAll('.uom-ui-accordion')).forEach(function (accordion) {

        // Allow for multiple accordion sections to be expanded at the same time
        var allowMultiple = accordion.hasAttribute('data-allow-multiple');
        // Allow for each toggle to both open and close individually
        var allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

        // Create the array of toggle elements for the accordion group
        var triggers = Array.prototype.slice.call(accordion.querySelectorAll('.uom-ui-accordion-trigger'));
        var panels = Array.prototype.slice.call(accordion.querySelectorAll('.uom-ui-accordion-panel'));


        accordion.addEventListener('click', function (event) {
            var target = event.target;

            if (target.classList.contains('uom-ui-accordion-trigger')) {
                // Check if the current toggle is expanded.
                var isExpanded = target.getAttribute('aria-expanded') == 'true';
                var active = accordion.querySelector('[aria-expanded="true"]');

                if (!isExpanded) {
                    // Set the expanded state on the triggering element
                    target.setAttribute('aria-expanded', 'true');
                    // Hide the accordion sections, using aria-controls to specify the desired section
                    document.getElementById(target.getAttribute('aria-controls')).removeAttribute('hidden');

                } else {
                    // Set the expanded state on the triggering element
                    target.setAttribute('aria-expanded', 'false');
                    // Hide the accordion sections, using aria-controls to specify the desired section
                    document.getElementById(target.getAttribute('aria-controls')).setAttribute('hidden', '');
                }

                event.stopPropagation();
            }
        });

        // Bind keyboard behaviors on the main accordion container
        accordion.addEventListener('keydown', function (event) {
            var target = event.target;
            var key = event.which.toString();

            var isExpanded = target.getAttribute('aria-expanded') == 'true';
            var allowToggle = (allowMultiple) ? allowMultiple : accordion.hasAttribute('data-allow-toggle');

            // 33 = Page Up, 34 = Page Down
            var ctrlModifier = (event.ctrlKey && key.match(/33|34/));

            // Is this coming from an accordion header?
            if (target.classList.contains('uom-ui-accordion-trigger')) {
                // Up/ Down arrow and Control + Page Up/ Page Down keyboard operations
                // 38 = Up, 40 = Down
                if (key.match(/38|40/) || ctrlModifier) {
                    var index = triggers.indexOf(target);
                    var direction = (key.match(/34|40/)) ? 1 : -1;
                    var length = triggers.length;
                    var newIndex = (index + length + direction) % length;

                    triggers[newIndex].focus();

                    event.preventDefault();
                } else if (key.match(/35|36|13|32/)) {
                    // 35 = End, 36 = Home keyboard operations
                    switch (key) {
                        // Go to first accordion
                        case '36':
                            triggers[0].focus();
                            break;
                            // Go to last accordion
                        case '35':
                            triggers[triggers.length - 1].focus();
                            break;
                        case '32':
                            target.click();
                            event.stopPropagation();
                            break;
                        case '13':
                            target.click();
                            event.stopPropagation();

                            break;
                    }
                    event.preventDefault();

                }

            }
        });

        // These are used to style the accordion when one of the buttons has focus
        accordion.querySelectorAll('.uom-ui-accordion-trigger').forEach(function (trigger) {

            trigger.addEventListener('focus', function (event) {
                accordion.classList.add('focus');
            });

            trigger.addEventListener('blur', function (event) {
                accordion.classList.remove('focus');
            });

        });

        // Minor setup: will set disabled state, via aria-disabled, to an
        // expanded/ active accordion which is not allowed to be toggled close
        if (!allowToggle) {
            // Get the first expanded/ active accordion
            var expanded = accordion.querySelector('[aria-expanded="true"]');

            // If an expanded/ active accordion is found, disable
            if (expanded) {
                expanded.setAttribute('aria-disabled', 'true');
            }
        }

    });
}


function uomUITextarea() {
    var text = document.querySelectorAll(".uom-ui-textcontainer");

    for (var i = 0; i < text.length; i++) {
        var html = text[i].innerHTML;
        var original_html = text[i].innerHTML;
        var placeholder = text[i].getAttribute("data-placeholder");
        var id = text[i].getAttribute("id");
        original_html = original_html.replace("", "<textarea class='uom-ui-textarea'></textarea>");

        var textAreaID = "id='"+ ((id != null)? id : ("uom-textBox"+i)) +"'";

        text[i].innerHTML = "<textarea class='uom-ui-textarea' placeholder='" + placeholder + "' "+ textAreaID +"></textarea>";
    }
}

// marathv - 22/07/2021
function uomUIDropdown() {
    var dropdown = document.querySelectorAll(".uom-ui-dropdown");

    for (var i = 0; i < dropdown.length; i++) {
        var thisSelect = document.createElement("select");
        //Set Id value
        var id = dropdown[i].getAttribute("id");
        var id = (id != null) ? id : ("uom-dropdown" + i);
        thisSelect.setAttribute("id", id);
        thisSelect.setAttribute("name", id);
        thisSelect.setAttribute("data-index", i);

        // Loop through all list items
        var lists = dropdown[i].querySelectorAll('ul,ol');
        // Only a single list
        if (lists.length <= 1){
            var listItems = dropdown[i].getElementsByTagName("li");
            for (var j = 0; j < listItems.length; j++) {
                var option = document.createElement("option");

                if (listItems[j].classList.contains("placeholder")){
                    option.setAttribute("disabled", 'disabled');
                    option.setAttribute("selected",'selected');
                }
                if (listItems[j].classList.contains("default")){
                    option.setAttribute("selected",'selected');
                }
                option.setAttribute("value", j);
                option.text = listItems[j].innerHTML;
                thisSelect.appendChild(option);
            }
        } else {
            // Multiple lists found ... create option groups
            var counter = 0;
            for (var j = 0; j < lists.length; j++) {
                // Create optgroup
                var optGroup = document.createElement("optgroup");
                var label = lists[j].getAttribute('data-label');
                optGroup.setAttribute('label', (label != null) ? label : '*optgroup label*');

                // Add list items to parent optgroup
                var listItems = lists[j].getElementsByTagName("li");
                for (var k = 0; k < listItems.length; k++) {
                    var option = document.createElement("option");

                    if (listItems[k].classList.contains("placeholder")){
                        option.setAttribute("disabled", 'disabled');
                        option.setAttribute("selected",'selected');
                    }
                    if (listItems[k].classList.contains("default")){
                        option.setAttribute("selected",'selected');
                    }
                    option.setAttribute("value", counter++);
                    option.text = listItems[k].innerHTML;
                    optGroup.appendChild(option);
                }

                thisSelect.appendChild(optGroup);
            }
        }



        dropdown[i].innerHTML = '';
        dropdown[i].appendChild(thisSelect);
    }
}

function uomUtilLocalStorageHandler() {
    var cururl = (window.location.href).split("?")[0];

    // Retrieve data for textareas
    var fillInText = document.querySelectorAll('.uom-ui-textarea');
    for (var i = 0; i < fillInText.length; i++) {
        var id = fillInText[i].getAttribute("id").replace("uom-",'');
        var thisData = localStorage.getItem(cururl + '-' + id);

        if (thisData != null) {
            fillInText[i].value = thisData;
        }


        fillInText[i].addEventListener('keyup', function () {
            var id = this.getAttribute("id").replace("uom-",'');
            var value = this.value;

            setTimeout(function () {
                localStorage.setItem(cururl + '-' + id, value);
            }, 500);

        });
    }

    // Retrieve data for slider inputs
    var sliders = document.querySelectorAll('.uom-ui-slider-input');
    for (var i = 0; i < sliders.length; i++) {
        var id = sliders[i].getAttribute("id").replace("uom-",'');
        var thisData = localStorage.getItem(cururl + '-' + id);

        if (thisData != null) {
            sliders[i].value = thisData;
        }

        uomFillSlider(sliders[i]);

        sliders[i].addEventListener('change', function (i) {
            var id = this.getAttribute("id").replace("uom-",'');
            var value = this.value;

            setTimeout(function () {
                localStorage.setItem(cururl + '-' + id, value);
            }, 500);
        });
    }

    // Retrieve data for checkboxes
    var check = document.querySelectorAll('.uom-ui-checkbox input');
    for (var i = 0; i < check.length; i++) {
        var thisData = localStorage.getItem(cururl + '-' + 'checkbox' + i);

        if (thisData != null) {
            check[i].checked = (thisData == 'true');
        }

        check[i].addEventListener('change',function (event) {
            var checkbox = event.target;
            var index = checkbox.getAttribute("data-index");
            localStorage.setItem(cururl + '-' + 'checkbox' + index, checkbox.checked);
        });
    }
	// marathv - 22/07/2021
  // Retrieve data for dropdown
  var dropdown = document.querySelectorAll('.uom-ui-dropdown select');
  for (var i = 0; i < dropdown.length; i++) {
    var thisData = localStorage.getItem(cururl + '-' + 'dropdown' + i);

    if (thisData != null) {
      dropdown[i].selectedIndex = parseInt(thisData);
    }

    dropdown[i].addEventListener('change', function(event) {
      var select = event.target;
      var index = select.getAttribute("data-index");
      localStorage.setItem(cururl + '-' + 'dropdown' + index, select.value);
    });
  }
}

/* Videos that a hidden on page load (inside tabs and accordions) needs to be reloaded when revealed to get a container height */
function uomUIVideoBugFix() {
    let tab = document.querySelectorAll('.uom-ui-trigger');
    let content = document.getElementsByClassName('uom-ui-tab-panel');

    for (var i = 0; i < tab.length; i++) {
        tab[i].addEventListener('click', function (i) {
            if (!uomUtilHasClass(content[i], "uom-ui-refresh-done")) {
                if (content[i].querySelectorAll(".uom-ui-video").length > 0) {
                    //Page refresh
                    content[i].innerHTML = content[i].innerHTML;
                    content[i].className += " uom-ui-refresh-done";
                }
            }
        }.bind(null, i));
    }
    let accordion = document.querySelectorAll('.uom-ui-accordion-trigger');
    let accordion_content = document.getElementsByClassName('uom-ui-accordion-panel');

    for (var i = 0; i < accordion.length; i++) {
        accordion[i].addEventListener('click', function (i) {
            if (!uomUtilHasClass(accordion_content[i], "uom-ui-refresh-done")) {
                if (accordion_content[i].querySelectorAll(".uom-ui-video").length > 0) {
                    //Page refresh
                    accordion_content[i].innerHTML = accordion_content[i].innerHTML;
                    accordion_content[i].className += " uom-ui-refresh-done";
                }
            }
        }.bind(null, i));
    }
}

// Add Modals 24102019 marathv
function uomUISetupModals() {
    $(".uom-ui-modal-trigger").each(function () {
        let target = $(this).data("target");

        var modalContainer = $(target);
        modalContainer.attr("tabindex", "-1");
        modalContainer.attr("role", "dialog");
        modalContainer.attr("aria-hidden", "true");
        if (modalContainer.find(".uom-ui-modal-header").length > 0){
            modalContainer.find(".uom-ui-modal-header").append("<button type='button' tabindex='0' class='uom-ui-button uom-primary uom-ui-modal-close' aria-label='Close modal'><span aria-hidden='true'>&times;</span></button>");
        } else {
            modalContainer.find(".uom-ui-modal-content, .uom-ui-modal-content-larger").prepend("<div class='uom-ui-modal-header'><button type='button' tabindex='0' class='uom-ui-button uom-primary uom-ui-modal-close' aria-label='Close modal'><span aria-hidden='true'>&times;</span></button></div>");
        }

        $(this).on("click", function () {
            let modalContainer = $($(this).data("target"));
            let el = modalContainer.find(".uom-ui-modal-close");
            var refocus = function(){
               el.focus();
            }
            setTimeout(refocus, 100);
            modalContainer.show();
        });
    });

    $(document).on("click", ".uom-ui-modal-close", function () {
        var modalContainer = $(this).closest(".uom-ui-modal-container");
        modalContainer.hide();
    });

    $(document).on("click", ".uom-ui-modal-container", function (event) {
        var target = $(event.target);
        if (!target.closest(".uom-ui-modal-content-large").length && !target.closest(".uom-ui-modal-content").length)
            $(this).hide();
    });

    $(document).on("keydown", ".uom-ui-modal-container", function (e) {
        var keyCode = (window.event) ? e.which : e.keyCode;
        if(keyCode == 27){
            $(this).hide();
        } // ESC pressed
    });
}

// Tiles UI component

function uomUICreateTiles() {

    if ($('table.uom-ui-tiles').length <= 0) return;

    $('table.uom-ui-tiles').each(function () {
        var classList = "uom-ui-grid uom-ui-two-col";
        classList += $(this).hasClass("uom-with-border") ? " uom-with-border" : "";
				// Check/Add class for uom-ui-tiles-tight tiles (narrower at 240px min width)
				classList += $(this).hasClass("uom-ui-tiles-tight") ? " uom-ui-tiles-tight" : "";
				// Check/Add class for uom-ui-no-banner (the first image will not render as a banner - usecase: for icons)
				classList += $(this).hasClass("uom-ui-tiles-no-banner") ? " uom-ui-tiles-no-banner" : "";

        // First create the list elements
        $(this).replaceWith($(this).html()
            .replace(/style=(["\'])[^\1]*?\1/gi, "")
            .replace(/<tbody/gi, `<ul class='${classList}'`)
            .replace(/<tr>/gi, "")
            .replace(/<\/tr>/gi, "")
            .replace(/<td/gi, "<li")
            .replace(/<\/td>/gi, "</li>")
            .replace(/<\/tbody/gi, "<\/ul")
        );
    });

    // Remove the image tags and replace with tile banner
    $(".uom-ui-grid:not(.uom-ui-tiles-no-banner) > li").each(function() {
    var prefix = '';
    var suffix = '';
    var imageEl = $(this).find("img:first");
    var html = "";
    if (imageEl.length > 0) {
      // Check if the tile image is a link and add link URL to the resultant DIV if it is.  gwyy 2020-07-22
      var imageParent = $(imageEl).parent();
      if (imageParent.is("A")) {
        prefix = '<a href="'+imageParent.attr("href")+'">';
        suffix = '</a>';
      }
      html = prefix+`<div class="tile-img-banner" style="background-image:url(${imageEl.attr("src")})"></div>`+suffix;
      // If the parent element only contains the image remove the parent else just remove the image
      if (imageEl.parent().children().length === 1) {
        imageEl.parent().remove();
      } else {
        imageEl.remove();
      }
    }
    $(this).wrapInner("<div class='tile-body'></div>");
    $(this).prepend(html);
  });
	// build tiles for all li that don't live in a ul with class.uom-ui-no-banner
	$(".uom-ui-grid.uom-ui-tiles-no-banner > li").each(function() {
		$(this).wrapInner("<div class='tile-body'></div>");
	});
}

// marathv 21/02/2020 .. Added to improve load time of Tiles UI
$(document).ready(function () {
    var observer = null;
    var elTag = 'ic-Layout-wrapper';

    var loadCustomUI = function () {
        uomUICreateTiles();
        if (observer) observer.disconnect();
    }

    startObserver = function () {
        var mcb = function (mutationsList) {
            var mutationHTML = '';
            for (var mutation of mutationsList) {
                mutationHTML = mutation.target.innerHTML;
                if ((mutationHTML).indexOf(elTag) > 1) {
                    loadCustomUI();
                    break;
                }
            }
        };

        observer = new MutationObserver(mcb);
        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true
        });
    }

    startObserver();
});

// END Tiles UI component

// 20190724 marathv End of UI components code
//=================================================================

/* 20220222 dcollett UOM Tealium Google Analytics */

(function(a,b,c,d){
  a="https://tags.tiqcdn.com/utag/unimelb/main/prod/utag.js";
  b=document;c="script";d=b.createElement(c);d.src=a;d.type="text/java"+c;d.async=true;
  a=b.getElementsByTagName(c)[0];a.parentNode.insertBefore(d,a);
})();

/* end UOM Tealium Google Analytics */


//=================================================================
// 20190830 marathv Start Canvas Breadcrumb fix

/* Global variables */
var uomCourseId = uomGetCourseId(); //which course are we in
var uomModuleItemId = uomGetParameterByName('module_item_id'); //used to id active page where data aren't in ENV
var uomCSRFToken = getCsrfToken();
var uomBreadcrumbsDiv = document.getElementById('breadcrumbs');

function uomUpdateBreadcrumbNav() {
    // Only update breadcrumbs if we are navigating using modules
    if (uomBreadcrumbsDiv && uomCourseId && !(uomModuleItemId == null || uomModuleItemId == '')) {
        uomGetSelfThenModulesForPage();
    }
}

/**
 * Get self id
 */
function uomGetSelfThenModulesForPage() {
    fetch('/api/v1/users/self', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "X-CSRF-Token": uomCSRFToken
            }
        })
        .then(uomStatusHandle)
        .then(uomJSONHandle)
        .then(function (data) {
            uomGetModulesForPage(uomCourseId, data.id);
        })
        .catch(function (error) {
            console.log('getSelfId Request failed', error);
        });
}

function uomFindModuleName(data) {
    if (data.items.length > 0 && data.modules.length > 0 && data.items[0].hasOwnProperty("current") && data.items[0].current !== null) {
        for (var i = 0; i < data.modules.length; i++) {
            if (data.modules[i].id === data.items[0].current.module_id)
                return data.modules[i].name;
        }
    }

    return null;
}

/*
 * Get modules and items for uomCourseId
 */
function uomGetModulesForPage(uomCourseId) {
    fetch('/api/v1/courses/' + uomCourseId + '/module_item_sequence?asset_type=ModuleItem&asset_id=' + uomModuleItemId, {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "X-CSRF-Token": uomCSRFToken
            }
        })
        .then(uomStatusHandle)
        .then(uomJSONHandle)
        .then(function (data) {
            var currentModuleID = data.items[0].current.module_id;
            var moduleName = uomFindModuleName(data);
            if (moduleName) {

                var list = uomBreadcrumbsDiv.querySelector("ul");
                var currentModItem = list.lastChild;

                // Remove all children except 1st 2
                while (list.childNodes.length > 2) {
                    list.removeChild(list.lastChild);
                }

                // Create breadcrumb for modules page
                var newCrumb = list.lastChild.cloneNode(true);
                newCrumb.querySelector("a").href = newCrumb.querySelector("a").href + "/modules";
                newCrumb.querySelector("span").innerHTML = "Modules";
                list.append(newCrumb);

                // Create breadcrumb for current module
                newCrumb = list.lastChild.cloneNode(true);
                newCrumb.querySelector("a").href = newCrumb.querySelector("a").href + "/" + currentModuleID;
                newCrumb.querySelector("span").innerHTML = moduleName;
                list.append(newCrumb);

                //Add the current item being displayed to the breadcrumb trail
                list.append(currentModItem);

                // Check if we need to add ellipsis.. only if breadcrumbs too long
                var maxWidth = document.querySelector(".ic-app-crumbs").offsetWidth;
                var currWidth = document.querySelector("#breadcrumbs").offsetWidth;
                if (currWidth >= maxWidth) {
                    var newWidth = maxWidth / (list.childNodes.length - 1);

                    for (var i = 0; i < list.childNodes.length; i++) {
                        list.childNodes[i].querySelector("span").style.maxWidth = newWidth + "px";
                        list.childNodes[i].querySelector("span").classList.add("ellipsis");
                    }
                }
            }

        })
        .catch(function (error) {
            console.log('getModules request failed', error);
        });
}

/*
 * Function which returns a promise (and error if rejected) if response status is OK
 */
function uomStatusHandle(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
/*
 * Function which returns json from response
 */
function uomJSONHandle(response) {
    return response.json()
}
/*
 * Function which returns csrf_token from cookie see: https://community.canvaslms.com/thread/22500-mobile-javascript-development
 */
function getCsrfToken() {
    var csrfRegex = new RegExp('^_csrf_token=(.*)$');
    var csrf;
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i].trim();
        var match = csrfRegex.exec(cookie);
        if (match) {
            csrf = decodeURIComponent(match[1]);
            break;
        }
    }
    return csrf;
}

/**
 * Function which gets query string parameters by name - see: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 */
function uomGetParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

/**
 * Function which gets the course id either from the ENV or from the URL
 */
function uomGetCourseId() {
    var uomCourseId = ENV.COURSE_ID || ENV.course_id;
    if (!uomCourseId) {
        var urlPartIncludingCourseId = window.location.href.split("courses/")[1];
        if (urlPartIncludingCourseId) {
            uomCourseId = urlPartIncludingCourseId.split("/")[0];
        }
    }
    return uomCourseId;
}

// 20190830 marathv End Canvas Breadcrumb fix
//=================================================================

// 20190925 marathv Code to load ALLY script
window.ALLY_CFG = {
    'baseUrl': 'https://prod-ap-southeast-2.ally.ac',
    'clientId': 155
};
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js');
//=================================================================

// 20191003 marathv Allow instructors to hide inactive users on the people page in a subject

$(window).load(function () {
    uomHideInactiveUsers();
});

function restripeTable() {
    $("tr.rosterUser").removeClass("uom-striped-style");
    $("tr.rosterUser:not(.inactive)").each(function (index) {
        if (index % 2 === 0)
            $(this).addClass("uom-striped-style");
    });
}

function updateRosterTable() {
    if ($("#uom_hideInactive").is(":checked") != true) return;

    $('tr.rosterUser:contains("inactive")').addClass('inactive');
    restripeTable();
}

var usersLoadedObserver = new MutationObserver(function (mutations) {
    var mutationHTML = '';
    for (var mutation of mutations) {
        mutationHTML = mutation.target.innerHTML;
        if ((mutation.target.classList &&
                mutation.target.classList.contains('paginatedLoadingIndicator')) ||
            (mutationHTML).indexOf('paginatedLoadingIndicator') > 1) {
            updateRosterTable();
            usersLoadedObserver.disconnect();
        }
    }

});

function uomHideInactiveUsers() {

    // If we are within a course and on the users/people page
    if (/^\/courses\/\d+\/users/.test(window.location.pathname)) {
        //create the check box
        var hideInactiveCheckbox = $('<span style="margin-left:4px"><input type="checkbox" name="hideInactive" value="hideInactive" id="uom_hideInactive" checked><label style="margin-left:5px; margin-top:8px" for="uom_hideInactive"> Hide Inactive Users</label></span>');

        // add the check box to the top of the people roster page
        hideInactiveCheckbox.insertAfter('select[name=enrollment_role_id]');

        // add a style element to hold the current state of the toggle
        var hideInactiveStyle = $('<style type="text/css" id="uom_hideInactiveStyle"></style>');

        hideInactiveStyle.insertAfter(hideInactiveCheckbox);

        // text of the CSS rule to hide the inactive rows in the people table
        var hideInactiveStyleRule = 'tr.rosterUser.inactive { display:none; } .ic-Table.ic-Table--striped tbody tr:nth-child(odd){background-color: #fff;} .ic-Table.ic-Table--striped tbody tr.uom-striped-style{ background-color: #f5f5f5 !important}';
        hideInactiveStyle.text(hideInactiveStyleRule);
        updateRosterTable();

        // Create an "on click" event for the check box
        // Update the style element for inactive users based on state of the check box
        $(document).on('click', '#uom_hideInactive', function (e) {
            if ($(this).is(":checked") == true) {
                hideInactiveStyle.text(hideInactiveStyleRule);
            } else {
                hideInactiveStyle.empty();
            }
            updateRosterTable();
        });

        // Should call when loader hidden
        var target = document.querySelector('#content-wrapper');
        usersLoadedObserver.observe(target, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });

        // If user selects a different role and hideInactive is on - re-stripe table
        $('select[name=enrollment_role_id]').on('change', function (e) {
            if ($("#uom_hideInactive").is(":checked") != true) return;

            var loading = setInterval(function () {
                if ($("input[name=search_term]").hasClass("loading") != true) {
                    updateRosterTable();
                    clearInterval(loading);
                }
            }, 50);
        });

        // Handle lazy load of users on scroll
        $(window).scroll(function () {
            if ($(".paginatedLoadingIndicator").css("display") == "block") {
                if ($("#uom_hideInactive").is(":checked") != true) return;

                // Should call when loader hidden
                var target = document.querySelector('.paginatedLoadingIndicator');
                usersLoadedObserver.observe(target, {
                    attributes: true,
                    childList: true,
                    subtree: true,
                    characterData: true
                });
            }
          });

        // make sure any visible elements have the inactive class
        var timeout = window.setInterval(function () {
            $('tr.rosterUser:contains("inactive")').addClass('inactive');
        }, 50);
    }
}

//=================================================================
// 20191018 marathv Change the "Add people" only allow user SIS ID entry to be selected and change the text and labels

$(window).load(function () {
    watchForAddPeopleModal();
});

function watchForAddPeopleModal() {
    var modalId = 'addpeople__peoplesearch'; // ID of "Add People" modal
    var observer = null;

    var getElementByText = function (parent, text, exactMatch) {
        var children = parent.getElementsByTagName('*');
        var i;
        for (var i = 0; i < children.length; ++i) {
            if (exactMatch) {
                if (children[i].innerHTML == text) {
                    return children[i];
                }
            } else {
                if (children[i].innerHTML.lastIndexOf(text, 0) == 0) {
                    return children[i];
                }
            }
        }

        return null;
    }

    var alterAddPeopleModal = function () {
        var label = document.querySelector("label[for=peoplesearch_radio_sis_user_id]");
        if (label) {
            var el = getElementByText(label, "SIS ID", true);
            if (el) el.textContent = "Username";
        }

        var sisOption = document.getElementById("peoplesearch_radio_sis_user_id");
        if (sisOption) {
            sisOption.click();
        }

        var container = document.querySelector(".addpeople__peoplesearch");
        if (container) {
            var el = getElementByText(container, "Example: student_2708, student_3693", false);
            // 21072020 marathv - Change instructions for enrollers in communities
            if (el) el.innerHTML = "<p style='margin:0'>Enrol users into this Community with the Student role</p><ul><li>To add Staff users, enter their usernames (e.g. janed1, mfoster)</li><li>To add Student users, enter their ID number (e.g. 101010, 1234567)</li></ul>";
        }

        var cancelBtn = document.getElementById('addpeople_cancel');
        if (cancelBtn) {
            cancelBtn.onclick = function () {
                if (observer) observer.disconnect();
            }
        }

        var closeBtn = document.querySelector('#add_people_modal [data-cid=CloseButton] button');
        if (closeBtn) {
            closeBtn.onclick = function () {
                if (observer) observer.disconnect();
            }
        }

        // Can use ESC to close the modal
        document.onkeydown = function (evt) {
            evt = evt || window.event;
            if (evt.keyCode === 27) {
                if (observer) observer.disconnect();
            }
        };
    }

    startObserver = function () {
        //            var detectedModal = false;
        var mcb = function (mutationsList) {
            var mutationHTML = '';
            for (var mutation of mutationsList) {
                mutationHTML = mutation.target.innerHTML;
                if ((mutationHTML).indexOf(modalId) > 1) {
                    //                        detectedModal = true;
                    alterAddPeopleModal();
                    break;
                }


                // Remove all roles from dropdown except student
                // 24072020 marathv - Restore all access to root admins
                if (!isAdmin) {
                    if (/role=\"listbox\"/.test(mutationHTML)) {
                        var id = $("#peoplesearch_select_role").attr("aria-controls");
                        if ((mutationHTML).indexOf(id) > 0) {
                            $("#" + id).find("li").each(function () {
                                if (!(/student/i.test($(this).text()))) {
                                    $(this).hide();
                                }
                            });
                        }
                    }
                }
            }
        };

        observer = new MutationObserver(mcb);
        observer.observe(document.body, {
            attributes: true,
            childList: true,
            subtree: true
        });
    }

    // If we are within a course and on the users/people page
    if (/^\/courses\/\d+\/users/.test(window.location.pathname)) {

        document.getElementById('addUsers').onclick = startObserver;
    }

    // EDIT: if you have admin rights to access the accounts page you can add users from there
    if (/^\/accounts/.test(window.location.pathname)) {
        var adminUserCheck = isRootAdmin();
        // 24072020 marathv - Restore all access to root admins
        adminUserCheck.then(function(data){
            isAdmin = data; // Set global variable for isAdmin flag
        });

        // Using jquery for event delegation because the table contents are lazy loaded
        $(document).on('click', "#content td button", function () {
            startObserver();
        });
    }
}
// 2020-03-20 dcollett adding additional menu items to global nav menu - communities / library / study skills
// see: https://community.canvaslms.com/message/101582-global-nav-custom-tray
/**
// @name        Global Nav - Custom Tray
// @namespace   https://github.com/robert-carroll/ccsd-canvas
//
// https://creativecommons.org/licenses/by/3.0/
**/

const globalNavCustomTray = t => {
  const n = t.title.replace(/\s/, "_").toLowerCase(),
    s = `global_nav_${n}_tray`,
    i = "ic-app-header__menu-list-item",
    e = `${i}--active`;
  var a = `<span id="${s}" style="display: none;">\n    <span class="global-nav-custom-tray gnct-easing">\n    <span role="region" aria-label="Global navigation tray" class="Global-navigation-tray">\n\n    <span class="gcnt-tray-close-wrapper">\n    <button id="${s}_close" type="button" role="button" tabindex="0" class="gcnt-tray-close-btn" style="margin:0px;">\n    <span class="gcnt-tray-close-svg-wrapper">\n    <svg name="IconXSolid" viewBox="0 0 1920 1920" style="fill:currentColor;width:1em;height:1em;" width="1em" height="1em" aria-hidden="true" role="presentation" disabled="true">\n    <g role="presentation"><svg version="1.1" viewBox="0 0 1920 1920">\n    <path d="M1743.858.012L959.869 783.877 176.005.012 0 176.142l783.74 783.989L0 1743.87 176.005 1920l783.864-783.74L1743.858 1920l176.13-176.13-783.865-783.74 783.865-783.988z" stroke="none" stroke-width="1"></path>\n    </svg></g></svg><span class="gcnt-tray-close-txt">Close</span></span></button></span>\n\n    <div class="tray-with-space-for-global-nav">\n    <div id="custom_${n}_tray" class="gnct-content-wrap">\n    <h2 class="gcnt-tray-h2">${t.title}</h2><hr role="presentation"/>\n\n    <ul class="gcnt-list">`;
  t.trayLinks.forEach((function(t) {
    a += `<li class="gcnt-list-item">\n        <span class="gcnt-list-link-wrapper">\n        <a target="_blank" rel="noopener" class="gcnt-list-link" href="${t.href}" role="button" tabindex="0">${t.title}</a>\n        </span>`, a += t.desc && t.desc.length > 1 ? `<div class="gcnt-link-desc">${t.desc}</div>` : "", a += "</li>"
  })), a += t.footer.length > 1 ? `<li class="gcnt-list-item"><hr role="presentation"/></li><li class="gcnt-list-item">${t.footer}</li>` : "", a += "</ul></div></div></span></span></span>";
  var l = $("#main"),
    o = $("#menu"),
    c = $("<li>", {
      id: `global_nav_${n}_menu`,
      class: `${i} rc-gnct`,
      html: `<a id="global_nav_${n}_link" role="button" href="javascript:void(0)" class="ic-app-header__menu-list-link">\n        <div class="menu-item-icon-container" role="presentation"><span class="svg-${n}-holder"></span></div>\n        <div class="menu-item__text">${t.title}</div></a>`
    });
  if (1 == /^icon-[a-z]/.test(t.icon_svg)) c.find(`.svg-${n}-holder`).append($("<div>", {
    id: `global_nav_${n}_svg`,
    class: "menu-item-icon-container",
    html: `<i class="icon-line ${t.icon_svg} gnct_inst_menu_icon"></i></div>`,
    role: "presentation"
  }));
  else if (/^http/.test(t.icon_svg)) c.find(`.svg-${n}-holder`).load(t.icon_svg, (function() {
    let s = $(this).find("svg")[0],
      i = `global_nav_${n}_svg`;
    s.setAttribute("id", i), s.setAttribute("class", "ic-icon-svg menu-item__icon ic-icon-svg--apps svg-icon-help ic-icon-svg-custom-tray"), "object" == typeof t.svg_size && (s.setAttribute("height", t.svg_size.height), s.setAttribute("width", t.svg_size.width))
  }));
  else if (/^<svg/.test(t.icon_svg)) {
    c.find(`.svg-${n}-holder`).append($(t.icon_svg));
    let s = c.find(`.svg-${n}-holder`).find("svg")[0],
      i = `global_nav_${n}_svg`;
    s.setAttribute("id", i), s.setAttribute("class", "ic-icon-svg menu-item__icon ic-icon-svg--apps svg-icon-help ic-icon-svg-custom-tray"), "object" == typeof t.svg_size && (s.setAttribute("height", t.svg_size.height), s.setAttribute("width", t.svg_size.width))
  }

  function r() {
    o.find("a").each((function() {
      this.onmouseup = this.blur()
    })), a.find(".gnct-easing").animate({
      left: "-200px",
      opacity: .8
    }, 100, "linear", (function() {
      a.hide(), c.removeClass(e)
    }))
  }
  o.append(c), l.append(a), c = $(`#global_nav_${n}_menu`), a = $(`#${s}`), c.click((function() {
    $(this).hasClass(e) ? r() : ($(".rc-gnct").not(c).click((function() {
      r()
    })), o.find("a").each((function() {
      this.onmouseup = this.blur()
    })), a.show(), a.find(".gnct-easing").animate({
      left: "0px",
      opacity: 1
    }, 100, "linear", (function() {
      $(`.${i}`).removeClass(e), c.addClass(e)
    })))
  })), $(`.${i}`).not(c).click((function() {
    r()
  })), $(`#${s}_close`).click((function() {
    r()
  }))
};

(function() {

  const CommunityIconTray = {
    title: 'Communities', // the menu item or tray name, what users will see
    icon_svg: '<svg viewBox="0 0 26 26"><path d="M9.9,9.2a.58.58,0,0,0,.6.6c.4,0,.5-.2.5-.6a2,2,0,0,1,4,0,.58.58,0,0,0,.6.6.53.53,0,0,0,.6-.6,3,3,0,0,0-1.5-2.6,2.5,2.5,0,0,0,.8-1.8,2.4,2.4,0,0,0-4.8,0,2.5,2.5,0,0,0,.8,1.8A2.92,2.92,0,0,0,9.9,9.2Zm1.8-4.4A1.3,1.3,0,1,1,13,6.1,1.26,1.26,0,0,1,11.7,4.8Z"/><path d="M15,18.1a3.47,3.47,0,0,0,1.3-2.6A3.33,3.33,0,0,0,13,12.2a3.27,3.27,0,0,0-3.3,3.3A3.32,3.32,0,0,0,11,18.1a4.66,4.66,0,0,0-2.6,4.2.6.6,0,0,0,1.2,0,3.5,3.5,0,0,1,7,0,.58.58,0,0,0,.6.6.53.53,0,0,0,.6-.6A5.26,5.26,0,0,0,15,18.1Zm.1-2.6a2.2,2.2,0,1,1-2.2-2.2A2.22,2.22,0,0,1,15.1,15.5Z"/><path d="M8.6,14.1a3.28,3.28,0,0,0-1.5-2.7A2.14,2.14,0,0,0,8,9.6,2.48,2.48,0,0,0,5.5,7.1,2.54,2.54,0,0,0,3,9.6a2.34,2.34,0,0,0,.8,1.8,3.28,3.28,0,0,0-1.5,2.7.58.58,0,0,0,.6.6.58.58,0,0,0,.6-.6,2,2,0,0,1,4,0,.58.58,0,0,0,.6.6C8.3,14.7,8.6,14.6,8.6,14.1ZM6.8,9.6A1.3,1.3,0,1,1,5.5,8.3,1.32,1.32,0,0,1,6.8,9.6Z"/><path d="M22.1,11.5A2.42,2.42,0,0,0,23,9.7a2.5,2.5,0,0,0-5,0,2.34,2.34,0,0,0,.8,1.8,3.28,3.28,0,0,0-1.5,2.7.6.6,0,1,0,1.2,0,1.87,1.87,0,0,1,.5-1.4,2,2,0,0,1,1.5-.6,2,2,0,0,1,2,2,.6.6,0,0,0,1.2,0A3.11,3.11,0,0,0,22.1,11.5Zm-.4-1.9a1.3,1.3,0,1,1-1.3-1.3A1.32,1.32,0,0,1,21.7,9.6Z"/><path d="M13,26A13,13,0,1,1,26,13,13,13,0,0,1,13,26ZM13,1.2A11.8,11.8,0,1,0,24.8,13,11.82,11.82,0,0,0,13,1.2Z"/></svg>',
    trayLinks: [{
      href: 'https://catalog.lms.unimelb.edu.au/browse/communities/student-induction/',
      title: 'Student induction and awareness',
      desc: 'Before you start your academic year you are required to familiarise yourself with the student induction and awareness modules.'
    },
    {
      href: 'https://catalog.lms.unimelb.edu.au/browse/communities/courses/academic-skills-hub',
      title: 'Academic Skills hub',
      desc: 'Complete interactive learning modules on the study skills of your choice.'
      }
    ],
    footer: 'LMS community sites are for the sharing of resources, communications and collaborative activities to discrete cohorts.'
  }
  globalNavCustomTray(CommunityIconTray);

  const LibraryIconTray = {
    title: 'Library', // the menu item or tray name, what users will see
    icon_svg: '<svg viewBox="0 0 24 24"><path d="M12,8A3,3 0 0,0 15,5A3,3 0 0,0 12,2A3,3 0 0,0 9,5A3,3 0 0,0 12,8M12,11.54C9.64,9.35 6.5,8 3,8V19C6.5,19 9.64,20.35 12,22.54C14.36,20.35 17.5,19 21,19V8C17.5,8 14.36,9.35 12,11.54Z" /></svg>',
    trayLinks: [{
        href: 'https://library.unimelb.edu.au/',
        title: 'Library home',
        desc: 'Your gateway to searching Discovery, the library Catalogue, and more.'
      },
			{
        href: "https://unimelb.libguides.com/new-students-library-guide",
        title: "New students' library guide",
        desc: "All the information you need to start using the Library's services and resources."
      },
      {
        href: 'https://library.unimelb.edu.au/services/library-guides',
        title: 'Library guides',
        desc: 'Find the best research resources and tools for your specific area of study.'
      },
     {
        href: 'https://library.unimelb.edu.au/libraries',
        title: 'Libraries by discipline and location',
      },
      {
        href: 'https://library.unimelb.edu.au/services/find-a-seat',
        title: 'Find a place to study - live updates',
      },
      {
        href: 'https://unimelb.libguides.com/researchessentials',
        title: 'Research essentials guide',
        desc: 'Level up your researching, reading and writing skills with these essential tips'
      },
      {
        href: 'https://library.unimelb.edu.au/recite',
        title: 'Re:cite',
        desc: 'The library’s guide to citing and referencing in your research and writing.'
      },

    ],
    footer: 'The library offers a range of services and support to help you effectively engage with scholarly information and library, archival, gallery and museum collections as you study.'
  }
  globalNavCustomTray(LibraryIconTray);

  const StudySkillsIconTray = {
    title: 'Study skills', // the menu item or tray name, what users will see
    icon_svg: '<svg viewBox="0 0 24 24"><path d="M3 17.25V21H6.75L17.81 9.93L14.06 6.18L3 17.25M22.61 18.36L18.36 22.61L13.16 17.41L14.93 15.64L15.93 16.64L18.4 14.16L19.82 15.58L18.36 17L19.42 18L20.84 16.6L22.61 18.36M6.61 10.83L1.39 5.64L5.64 1.39L7.4 3.16L4.93 5.64L6 6.7L8.46 4.22L9.88 5.64L8.46 7.05L9.46 8.05L6.61 10.83M20.71 7C21.1 6.61 21.1 6 20.71 5.59L18.37 3.29C18 2.9 17.35 2.9 16.96 3.29L15.12 5.12L18.87 8.87L20.71 7Z"  /></svg>',
    trayLinks: [{
        href: 'https://catalog.lms.unimelb.edu.au/browse/communities/courses/academic-skills-hub',
        title: 'Academic Skills hub',
        desc: 'Complete interactive learning modules on the study skills of your choice.'
      },
      {
        href: 'https://students.unimelb.edu.au/academic-skills',
        title: 'Academic Skills website',
        desc: 'Develop academic and professional skills you need throughout your time at University and beyond.'
      },
      {
        href: 'https://library.unimelb.edu.au/library-guides',
        title: 'Library guides',
        desc: 'Develop your research skills with these online guides. '
      },
      {
        href: 'https://studentit.unimelb.edu.au/',
        title: 'Student IT',
        desc: 'IT help to support your studies and build your digital capabilities.'
      },
    ],
    footer: ''
  }
  globalNavCustomTray(StudySkillsIconTray);

  const StudentSupportIconTray = {
    title: 'Student support', // the menu item or tray name, what users will see
    icon_svg: '<svg viewBox="0 0 512 512"><path d="M456.373 123.91H270.982V.311h-29.963v31.722H55.627L0 92.952l55.627 60.921h185.392v357.816h29.963v-265.94h185.391L512 184.83z"/></svg>',
    trayLinks: [
      {
        href: 'https://www.unimelb.edu.au/coronavirus/attending-campus',
        title: 'Attending campus',
        desc: 'Learn more about the measures we have put in place to keep our campus safe.'
      },
      {
        href: 'https://students.unimelb.edu.au/student-support',
        title: 'Support services for students',
        desc: 'Access a range of support services including health and well-being, financial aid, scholarships, international student support services.'
      },
      {
        href: 'https://library.unimelb.edu.au/library-opening-hours/virtual-library',
        title: 'Library services',
        desc: 'Find information about current Library services available to the University community.'
      },
      {
        href: 'https://students.unimelb.edu.au/student-support/advice-and-help/stop-1',
        title: 'Stop 1',
        desc: 'Connect with the full range of student services to support your success while studying. Visit us on campus at Parkville and Southbank, or connect with us online or over the phone.'
      },
      {
        href: 'https://studentit.unimelb.edu.au/',
        title: 'Student IT',
        desc: 'Ask about installing software, managing your digital uni life, or setting up your VPN.'
      },
      {
          href: 'https://services.unimelb.edu.au/counsel',
          title: 'Counselling and Psychological Services',
          desc: 'Free professional counselling to currently enrolled students and staff, as well as a range of workshops, mental health training, and helpful resources.'
        },
        {
          href: 'https://students.unimelb.edu.au/student-support/advice-and-help/student-services-workshops-and-sessions',
          title: 'Student support workshops',
          desc: 'Get the most out of your university experience and attend one of our workshops.'
        },
        {
          href: 'https://services.unimelb.edu.au/health',
          title: 'University Health Service',
          desc: 'We offer experienced medical doctors and nurses with a depth of knowledge relevant to student medical issues.'
        },

    ],
    footer: ''
  }
  globalNavCustomTray(StudentSupportIconTray);

})();

// END adding additional menu items to global nav menu - communities and library

// dcollett 2020-03-20 modify support menu in global nav _menu
$('#global_nav_help_link > div.menu-item__text').text ("LMS support")

// dcollett 2020-02-12 hide reset subject and end subject options from subject details settings page
if (location.href.match(/https.*courses\/\d+\/settings.*/g) != null) {
    var buttonLinkArray = $('#right-side-wrapper').find('a');
    for (i = 0; i < buttonLinkArray.size(); i++) {
        if (buttonLinkArray[i].search.toLowerCase().indexOf('event=conclude') !== -1 || (buttonLinkArray[i].href.match(/https.*courses\/\d+\/reset.*/g) !=null )) {
            buttonLinkArray[i].style.display = 'none';
        }
    }
}
// END hide reset subject and end subject options from subject details settings page

/** ======================== Students sanctions popup =========================================
** 28/02/2020 nwijesundera
** version 1.0
*/
$(window).ready(function () {
    //add css for warning and block icons
    //should we check if it's already loaded? Question for David
    var headTag = document.getElementsByTagName("head")[0];
    var jqTag = document.createElement('script');
    jqTag.src = 'https://kit.fontawesome.com/9a59658e1b.js';
    jqTag.crossorigin = 'anonymous';
    headTag.appendChild(jqTag);

    //call the sanction display function
    uomDisplaySanctionPopup();
});

function uomDisplaySanctionPopup() {
    //display only in Dashboard/soon after login
    //console.log(window.location.pathname);
    //must change url in Canva
    if (window.location.pathname === "/") {
        var userId = ENV.current_user.id;
        //get student sanctions
        var studentSanctions = getStudentSanctions(userId)

                .catch(function (error) {
                    console.log('get request failed', error);
                })
                ;
        //process async datat
        studentSanctions.then(function (data) {

            var html = `<div id="uom_sanction_modal" class="uom-ui-modal-container">
                    <div class="uom-ui-modal-content-large">
                        <div class="uom-ui-modal-header">
                            <p style="font-weight: bold">You have the following sanction(s)</p>

                        </div>
                        <div class="uom-ui-modal-body" >
                            <div id="uom_sanctions_data" style="overflow-y:auto;">
							<table class="uom-ui-table" id="uom_sanction_data_table">`;

            var isSanctioned = false;

            if (data.message === 'undefined' || data.message === undefined) {


                for (var s = 0; s < data.data.length; s++) {

                    if (data.data[s].message === 'undefined' || data.data[s].message === undefined) {

                        if (data.data[s].sanction_expiry_date === 'undefined' || data.data[s].sanction_expiry_date === undefined) {

                            html += `
					<tr>
						<td style="font-size:larger;font-weight:bold">${ data.data[s].sanction_action === 'Warning' ?
                                    '<i class="fas fa-exclamation-triangle"></i>' : '<i class="fas fa-ban"></i>' }</td>
						<td style="text-align:left">${data.data[s].sanction_description}
                                                </td>

					</tr>`;
                            isSanctioned = true;
                        }
                    }

                }
            }
            //let's process student enrolment sanctions

            var studentEnrolments = getStudentEnrolments(userId)
                    .catch(function (error) {
                        console.log('get request failed', error);
                    });
            studentEnrolments.then(function (enrolmentdata) {

                var enrolmentSanctionPromises = [];

                //get an array of custom data urls for each subject enrolment


                for (var o = 0; o < enrolmentdata.length; o++) {


                    if (enrolmentdata[o].message === 'undefined' || enrolmentdata[o].message === undefined) {

                        var zero = 0;
                        // console.log(enrolmentdata[o]);
                        enrolmentSanctionPromises.push(getStudentEnrolmentsSanctions(enrolmentdata[o].course_id, userId));
                    }
                    //}
                }

                Promise.all(enrolmentSanctionPromises)
                        .then(function (data)
                        {
                            //console.log('full data', data);
                            for (var s = 0; s < data.length; s++) {
                                //console.log(s,data.data[s]);
                                if (data[s].message === 'undefined' || data[s].message === undefined) {
                                    if (data[s].data[0].sanction_expiry_date === 'undefined' || data[s].data[0].sanction_expiry_date === undefined) {
                                    var options = {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    };
                                       // console.log('data', data[s].data[0]);
                                        html += `
					<tr>
                    <td style="font-size:larger;font-weight:bold;vertical-align:top">${ data[s].data[0].sanction_action === 'Warning' ?
                                                '<i class="fas fa-exclamation-triangle"></i>' : '<i class="fas fa-ban"></i>' }</td>
						<td style="text-align:left"><span style="font-weight:bold">SUBJECT:&nbsp;</span>
                                                ${data[s].data[0].subject_code}&nbsp;
                                                    <span style="font-weight:bold"> DATE APPLIED:&nbsp;</span>
                                                ${new Date(data[s].data[0].sanction_effective_date).toLocaleDateString("en-AU",options)}             &nbsp;
                                                    ${data[s].data[0].sanction_description}
                                                </td>

					</tr>`;
                                        isSanctioned = true;

                                    }
                                }
                            }

                            html += `
		</table></div>
			</div>
						<div class="uom-ui-modal-footer" >
                            <div class ="uom-ui-emphasise" style="vertical-align:top">You can check your fees, due dates and payment options by accessing your Statement of Liability and Student Invoice via <a href="https://my.unimelb.edu.au" target="_blank">my.unimelb.</a>
							<div style="text-align:right"> <button class="uom-ui-button uom-primary uom-ui-modal-close" id="uom_btn_confirm_sanctions">OK</button></div>
							</div>

						</div>
                    </div>
                </div>
		`;
                            if (isSanctioned) {
                                $("#uom_sanction_modal").remove();
                                $("#content-wrapper").append(html);
                                $("#uom_sanction_modal").show();
                                // close when ok is clicked
                                $(document).on("click", "#uom_btn_confirm_sanctions", function () {
                                    $("#uom_sanction_modal").hide();
                                });
                            }

                        })
                        .catch(function (error) {
                            console.log('get request failed', error);
                        });

            });



        });
    }
}


//get student enrolments
async function getStudentEnrolments(userId)
{
    var studentEnrolmentUrl = '/api/v1/users/self/enrollments?state[]=inactive&type[]=StudentEnrollment';

    const data = await  fetch(studentEnrolmentUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
                    //'X-CSRF-Token': uomCSRFToken


        }
    })
            .then(function (response) {
                return response.json();
            });

    return data;

}

//check student sanctions
async function getStudentSanctions(userId) {

    var studentSanctionUrl = '/api/v1/users/self/custom_data/sanctions?ns=unimelb.student.sanctions';

    const data = await fetch(studentSanctionUrl, {
        method: 'GET',
        //credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
                    //'X-CSRF-Token': uomCSRFToken

        }
    })
            .then(function (response) {
                return response.json();
            });
    return data;
}

//check student enrolment sanctions
async function getStudentEnrolmentsSanctions(canvasSubject, userId) {

    var studentEnrolmentUrl = '/api/v1/users/self/custom_data/sanctions?ns=unimelb.enrolment.sanctions-' + canvasSubject;

    const data = await  fetch(studentEnrolmentUrl, {
        method: 'GET',
        //credentials: 'include',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
                    //'X-CSRF-Token': uomCSRFToken

        }
    })
            .then(function (response) {
                return response.json();
            });

    return data;
}

// ** ======================== END students sanctions popup =========================================
// marathv 14022020 H5P element resizer script

var h5pScript = document.createElement('script');
h5pScript.setAttribute('charset', 'UTF-8');
h5pScript.setAttribute('src', 'https://h5p.com/canvas-resizer.js');
document.body.appendChild(h5pScript);

// dcollett 04032020 add message to non-SSO log in page for lost staff/students
// dcollett 03302022 add message to non-SSO log in page for ex.users & college tutors - mobile users
$("#login_form").prepend('<div style="background-color:#ffdca2;color:#272727;padding:1rem 1.125rem 1.25rem;margin:1rem 0;"><p>Only use this login if:</p><ul><li>You are a non-University of Melbourne account holder</li><li>You have been directed to use this option.</li></ul><p>External users and college tutors: <a href="https://canvastools-prod.le.unimelb.edu.au/canvasExternalUserTool/forgotmypassword.jsp">reset your password here</a></p><p><a style="color:#984140" href="https://canvas.lms.unimelb.edu.au/login/saml"><strong>Staff and student users: login here</strong></a></p></div>');

// dcollett 2020-03-20 change page title on non-SSO log in page

if (document.URL.indexOf("https://canvas.lms.unimelb.edu.au/login/canvas") >= 0) {
  document.title = "non-UoM user log in to Canvas";
};

// dcollett 2020-03-05 add norobots meta tag to non-SSO log in page
// https://developers.google.com/search/docs/guides/javascript-seo-basics#use-meta-robots-tags-carefully

var UoMmetaRobots = document.querySelector('meta[name="robots"]');
// if there was no robots meta tag, add one
if (!UoMmetaRobots) {
  UoMmetaRobots = document.createElement('meta');
  UoMmetaRobots.setAttribute('name', 'robots');
  document.head.appendChild(UoMmetaRobots);
}
// tell Googlebot to exclude this page from the index
UoMmetaRobots.setAttribute('content', 'noindex');

//=================================================================
/*
** =============== Interim Grade column Edit ==================
** 22/06/2020 marathv
*/



(function () {
    /* Global variables */
    var uomCourseId = uomGetCourseId(); //which course are we in
    var uomCSRFToken = getCsrfToken();
    var customColumnData = {};
    var gradingStandardID = null;
    var interimOptions = null;
    var currentInterimData = {}; //Keep track of the the edits made in this view

    var gradingSchemes = [
        {
            "id": 2271,
            "code": "ST",
            "values": [
//            {grade: "MIS",	description: "Missing Result"},
            {grade: "WXT",	description: "WH Extension"},
            {grade: "S",	description: "WH SP Exam"},
            {grade: "WAF",	description: "WH Assess TBC"},
            {grade: "NH",	description: "Not Completed/Fail"},
            {grade: "NA",	description: "Not Assessed"},
//            {grade: "GNS",	description: "Grade Not Submitted"}
            ]
        },
        {
            "id": 2274,
            "code": "PF",
            "values": [
//            { grade: "MIS", description:	"Missing Result"},
            { grade: "WXT", description:	"WH Extension"},
            { grade: "S", description:	"WH SP Exam"},
            { grade: "WAF", description:	"WH Assess TBC"},
            { grade: "NH", description:	"Not Completed/Fail"},
            { grade: "NA", description:	"Not Assessed"},
//            { grade: "GNS", description:	"Grade Not Submitted"}
            ]
        },
        {
            "id": 2269,
            "code": "SC",
            "values": [
            { grade: "CNT",	description: "Continuing Result"},
            { grade: "CTC",	description: "Continuing (Comp)"},
            { grade: "CNF",	description: "Continuing (Fail)"},
//            { grade: "MIS",	description: "Missing Result"},
            { grade: "WXT",	description: "WH Extension"},
            { grade: "S",	description: "WH SP Exam"},
            { grade: "WAF",	description: "WH Assess TBC"},
            { grade: "NH",	description: "Not Completed/Fail"},
            { grade: "NA",	description: "Not Assessed"},
//            { grade: "GNS",	description: "Grade Not Submitted"}
            ]
        },
        {
            "id": 2270,
            "code": "SI",
            "values": [
            {grade: "CNT", description: "Continuing Result"},
            { grade: "NA", description: "Not Assessed"}
            ]
        },
        {
            "id": 2272,
            "code": "PC",
            "values": [
            { grade: "CNT",	description: "Continuing Result"},
            { grade: "CTC",	description: "Continuing (Comp)"},
            { grade: "CNF",	description: "Continuing (Fail)"},
//            { grade: "MIS",	description: "Missing Result"},
            { grade: "WXT",	description: "WH Extension"},
            { grade: "S",	description: "WH SP Exam"},
            { grade: "WAF",	description: "WH Assess TBC"},
            { grade: "NH",	description: "Not Completed/Fail"},
            { grade: "NA",	description: "Not Assessed"},
//            { grade: "GNS",	description: "Grade Not Submitted"}
            ]
        },
        {
            "id": 2273,
            "code": "PI",
            "values": [
            { grade: "CNT",	description: "Continuing Result"},
            { grade: "NA",	description: "Not Assessed"}
            ]
        }
    ];

    function cancelClickPropogation(e){
        if (!e)
          e = window.event;

        //IE9 & Other Browsers
        if (e.stopPropagation) {
          e.stopPropagation();
        }
        //IE8 and Lower
        else {
          e.cancelBubble = true;
        }
    }

    function createColumnToggleMenu() {
        let interval = null;

        var alterViewMenu = function () {
            var menu = $("span[dir=ltr] ul[role=menu] li:last-child ul[role=menu]"); // find the menu
            // clone the existing menu item.. doing this to capture the autogenerated classes for CSS
            var sampleItem = menu.find("li:last");

            $.each(customColumnData, function (key, value) {
                //Skip the Canvas notes column
                if (key === 'notes')
                    return;

                var newMenuItem = sampleItem.clone(true);
                // Change the auto-generated IDs
                var id = newMenuItem.find("span[role=menuitemcheckbox]").attr("aria-labelledby");
                newMenuItem.find("span[role=menuitemcheckbox]").attr("tabindex", "-1");
                newMenuItem.find("span[role=menuitemcheckbox]").attr("id", "uom_menu_" + key);
                newMenuItem.find("span[role=menuitemcheckbox]").attr("aria-labelledby", "uom_btn_" + key);
                newMenuItem.find("svg").parent("span").remove();

                newMenuItem.find("span[role=menuitemcheckbox] span:first").prepend(`<span class="uom-check-icon" style="visibility:${(value.hidden)? "hidden": "visible"}"><svg name="IconCheck" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" style="width: 1em; height: 1em;"><g role="presentation"><path d="M1743.858 267.012L710.747 1300.124 176.005 765.382 0 941.387l710.747 710.871 1209.24-1209.116z" fill-rule="evenodd" stroke="none" stroke-width="1"></path></g></svg></span>`);

                newMenuItem.find("#" + id).text(value.title);
                newMenuItem.find("#" + id).addClass("uom_btn_toggle_col");
                newMenuItem.find("#" + id).attr("data-key", key);
                newMenuItem.find("#" + id).attr("id", "uom_btn_" + key);
                newMenuItem.find("#" + id).attr("id", "uom_" + key);

                menu.find("li:last-child").after(newMenuItem);

            });
            clearInterval(interval);
        };

        $(document).on("click", "span[data-component=ViewOptionsMenu] button", function () {
            interval = setInterval(alterViewMenu, 100);
        });

        $(document).on("click", ".uom_btn_toggle_col", function () {
            $("span[dir=ltr]").hide();
            let key = $(this).data("key");
            let data = {
                "column": {
                    "hidden": !customColumnData[key].hidden
                }
            };

            fetch("/api/v1/courses/" + uomCourseId + "/custom_gradebook_columns/" + customColumnData[key].id, {
                    method: 'PUT',
                    credentials: 'include',
                    headers: {
                        "Accept": "application/json",
                        "Content-Type": "application/json",
                        "X-CSRF-Token": uomCSRFToken
                    },
                    body: JSON.stringify(data)
                })
                .then(uomStatusHandle)
                .then(uomJSONHandle)
                .then(function (data) {
                    customColumnData[key].hidden = !customColumnData[key].hidden;

                    // Need to reload because data not present on client needs to be fetched
                    location.reload();
                });
        });
    }

    // Check if the user has permission to access grades at course level
    async function getCustomGradebookColumns() {
        const data = await fetch('/api/v1/courses/' + uomCourseId + '/custom_gradebook_columns?include_hidden=true&per_page=100', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "X-CSRF-Token": uomCSRFToken
            }
        }).then(uomJSONHandle);

        return data;
    }


    $(window).load(function () {
        // If we are within the gradebook page
        if (/^\/courses\/\d+\/gradebook/.test(window.location.pathname)) {

            var customGradebookCols = getCustomGradebookColumns()
                .catch(function (error) {
                    console.log('Failed to get gradebook columns', error);
                });

            customGradebookCols.then(function (columnList) {
                // Store custom column IDs to use later
                for (let i = 0; i < columnList.length; i++) {
                    let customCol = columnList[i];
                    var tag = customCol.title.toLowerCase().replace(/\s+/g, '_');
                    if (tag in customColumnData) {
                        tag += "_" + i;
                    }
                    customColumnData[tag] = customCol;
                }

                // Create the toggle menu to show/ hide custom columns
                createColumnToggleMenu();

                let promises = [];
                promises.push(getCourseLevelPermissions());
                promises.push(getAccountLevelPermissions());

                Promise
                    .all(promises)
                    .then(function (data) {
                        // Check if user has permissions on either level
                        for (let i = 0; i < data.length; i++) {
                            // If any of them are true enable feature
                            if (data[i].hasOwnProperty("manage_grades")) {
                                if (data[i]["manage_grades"]) {
                                    setTimeout(function () {
                                        configureCustomColInteraction();
                                    }, 1000);

                                    break;
                                }
                            }
                        }
                    }).catch(function (error) {
                        console.log('Failed to get permissions for user', error);
                    });

            });
        }
    });

    // Check if the user has permission to access grades at course level
    async function getCourseLevelPermissions() {
        const data = await fetch('/api/v1/courses/' + uomCourseId + '/permissions?permissions[]=manage_grades', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "X-CSRF-Token": uomCSRFToken
            }
        }).then(uomJSONHandle);

        return data;
    }

    // Check if the user has permission to access grades at account level
    async function getAccountLevelPermissions(){
        // Get account ID
        const data = await  fetch('/api/v1/courses/' + uomCourseId, {
                method: 'GET',
                credentials: 'include',
                headers: {
                    "Accept": "application/json",
                    "X-CSRF-Token": uomCSRFToken
                }
            }).then(uomStatusHandle)
              .then(uomJSONHandle)
              .then(function (data) {
                    let subaccountID = (data.hasOwnProperty("account_id"))? data["account_id"] : '';

                    // Use the account ID to get account level permissions
                    return fetch('/api/v1/accounts/' + subaccountID + '/permissions?permissions[]=manage_grades', {
                        method: 'GET',
                        credentials: 'include',
                        headers: {
                            "Accept": "application/json",
                            "X-CSRF-Token": uomCSRFToken
                        }
                    }).then(uomJSONHandle);
                });

        return data;
    }

    // Get modules and items for uomCourseId
    function configureCustomColInteraction() {
        // If interim grade column exists.. add click events on the column
        if (customColumnData.hasOwnProperty('interim_grade')) {
            fetchInterimGradesOptions();
            $(document).on("click", "div#gradebook_grid .slick-row div.custom_column.custom_col_" + customColumnData['interim_grade'].id, editInterimGradeColumn);

            $(document).on("mouseenter", "div#gradebook_grid .slick-row div.custom_column.custom_col_" + customColumnData['interim_grade'].id, function () {
                $(this).addClass("active");
            });

            $(document).on("mouseout", "div#gradebook_grid .slick-row div.custom_column.custom_col_" + customColumnData['interim_grade'].id, function () {
                $(this).removeClass("active");
            });
        }

        // If interim grade column exists.. add click events on the column
//        if (customColumnData.hasOwnProperty('interim_grade_notes')) {
//            $(document).on("click", "div#gradebook_grid .slick-row div.custom_column.custom_col_" + customColumnData['interim_grade_notes'].id, editInterimGradeNotes);
//        }
    }

    function fetchInterimGradesOptions() {
        fetch('/api/v1/courses/' + uomCourseId + '/settings', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Accept": "application/json",
                "X-CSRF-Token": uomCSRFToken
            }
        })
            .then(uomStatusHandle)
            .then(uomJSONHandle)
            .then(function (data) {
                if (data.hasOwnProperty('grading_standard_id')) {
                    gradingStandardID = data.grading_standard_id;

                    // Find matching grading scheme
                    var result = gradingSchemes.find(obj => {
                        return obj.id === gradingStandardID
                    });

                    // FIXME: Need to fetch from somewhere
                    if (typeof result !== 'undefined')
                        interimOptions = result.values;
                }
            })
            .catch(function (error) {
                console.log('failed to get settings', error);
            });
    }

    /*
    ** Create and display the Interim Grades modal
    */
    function launchInterimGradesModal(studentName, uomStudentID, canvasStudentID, value) {
        // If we could not get the grading scheme ID here
        if (interimOptions == null){
            alert("Failed to get grading scheme for this course.");
            return;
        }

        var html = `
        <div id="uom-interim-grades-modal" class="uom-ui-modal-container" style="z-index:10020">
            <div class="uom-ui-modal-content-large" style="margin-top:4rem">
                <div class="uom-ui-modal-header">
                    <h2>Interim Grade</h2>
                    <button type="button" tabindex="0" class="uom-ui-button uom-primary uom-ui-modal-close" aria-label="Close modal"><span aria-hidden="true">×</span></button>
                </div>
                <div class="uom-ui-modal-body">
                    <h4 style="color:#3FA7C2">${studentName} - ${uomStudentID}</h4>
                    <div id="uom-grade-options" data-value="${value}"></div>
                    <p class="uom-error" style="font-size:smaller; color:red"></p>
                    <div style="text-align:right">
                        <button class="uom-ui-button uom-warning" data-student-id="${canvasStudentID}" id="uom-btn-clear-interim-grade">Clear</button>
                        <button class="uom-ui-button uom-success" data-student-id="${canvasStudentID}" id="uom-btn-save-interim-grade">Save</button>
                    </div>
                </div>
            </div>
        </div>`;

        var gradeOptions = `<table class="uom-ui-table uom-striped">
            <tr>
                <th>Grade Code</th>
                <th>Grade Description</th>
            </tr>`;

        // Loop through all the interim grade options and populate the form
        for (let i = 0; i < interimOptions.length; i++) {
            gradeOptions += `<tr ${(value == interimOptions[i].grade) ? " class='uom-checked'" : ""}>
                <td><label><input style="margin:0; margin-right:1rem;" type="radio" id="uom-interim-grade-option${i}" name="uom-interim-grade-options" value="${interimOptions[i].grade}" ${(value == interimOptions[i].grade) ? "checked" : ""}> ${interimOptions[i].grade}</label></td>
                <td>${interimOptions[i].description}</td>
            </tr>`;
        }

        gradeOptions += `</table>`;

        $("#uom-interim-grades-modal").remove();
        $("body").append(html);
        $('#uom-grade-options').append(gradeOptions);
        $("#uom-interim-grades-modal").show();
        $("#uom-interim-grades-modal #uom-btn-confirm-grades").focus();
    }

    /*
    ** Handler for click events on the interim column.. will launch the modal with possible interim grade values
    */
    function editInterimGradeColumn() {
        // Hide the canvas textbox
        var value = $("div.dontblur textarea").val().trim();
        $("div.dontblur").hide();

        var gradebookRow = $(this).closest('.ui-widget-content');
        let name = gradebookRow.find('div.primary-column .student-name').text();

        // Check if the Custom column student ID value is available
        var uomStudentID = "";
        if (customColumnData.hasOwnProperty('student_id')) {
            // If data is available on page
            var studentIDCell = gradebookRow.find('div.custom_column.custom_col_' + customColumnData["student_id"].id);
            if (studentIDCell.length > 0 && studentIDCell.text().length > 0) {
                uomStudentID = studentIDCell.text();
            }
        }

        // If Student ID cell is not available or is empty
        // Get the student ID value stored in the primary Name cell
        canvasStudentID = gradebookRow.find('div.primary-column .student-grades-link').data("student_id");
        launchInterimGradesModal(name, uomStudentID, canvasStudentID, value);

    }

    /*
     ** Handler for click events on the interim column.. will launch the modal with possible interim grade values
     */
//    function editInterimGradeNotes() {
//        var gradebookRow = $(this).closest('.ui-widget-content');
//        $('.uom-interim-notes').remove();
//        let position = $(this).offset();
//
//        canvasStudentID = gradebookRow.find('div.primary-column .student-grades-link').data("student_id");
//        currentValue = $(".student_" + canvasStudentID + " .custom_column.custom_col_" + customColumnData['interim_grade_notes'].id).text();
//
//        $('body').append(`<div class="dontblur uom-interim-notes"  data-student="${canvasStudentID}" style="z-index: 10000; position: absolute; background: white; padding: 5px; border: 3px solid gray; border-radius: 10px; top: ${position.top}px; left:${position.left}px"><textarea hidefocus="" rows="5" maxlength="255" style="width: 250px; height: 80px; border: 0px; outline: 0px;">${currentValue}</textarea><div style="text-align: right;"><button class="uom-btn-save-notes">Save</button><button class="uom-btn-dismiss-notes">Cancel</button></div></div>`);
//
//        $(document).on("click", ".uom-interim-notes .uom-btn-dismiss-notes", function () {
//            $('.uom-interim-notes').remove();
//        });
//
//        $(document).on("click", ".uom-interim-notes .uom-btn-save-notes", function (event) {
//            event.stopImmediatePropagation();
//            var data = {
//                "column_data": {
//                    "content": $('.uom-interim-notes textarea').val().trim()
//                }
//            };
//
//            studentID = $('.uom-interim-notes').data('student');
//
//            // Save the selected grade in the custom column in Canvas
//            fetch(`/api/v1/courses/${uomCourseId}/custom_gradebook_columns/${customColumnData['interim_grade_notes'].id}/data/${studentID}`, {
//                    method: 'PUT',
//                    credentials: 'include',
//                    headers: {
//                        "Accept": "application/json",
//                        "Content-Type": "application/json",
//                        "X-CSRF-Token": uomCSRFToken
//                    },
//                    body: JSON.stringify(data)
//                })
//                .then(uomStatusHandle)
//                .then(uomJSONHandle)
//                .then(function (data) {
//                    let studentID = $('.uom-interim-notes').data('student');
//                    let value = $('.uom-interim-notes textarea').val().trim();
//                    $(".student_" + studentID + " .custom_column.custom_col_" + customColumnData['interim_grade_notes'].id).text(value);
//                    $('.uom-interim-notes').remove();
//                    if (studentID in currentInterimData){
//                        var obj = currentInterimData[studentID];
//                        obj["notes"] = value;
//                    } else {
//                        currentInterimData[studentID] = {"notes" : value};
//                    }
//                })
//                .catch(function (error) {
//                    alert('Failed to edit gradebook. Please try again later.');
//                });
//        });
//    }

    /*
     ** POST data to the custom column in canvas
     */
    function saveInterimGradeData(studentID, value) {
        var data = {
            "column_data": {
                "content": value
            }
        };

        // Save the selected grade in the custom column in Canvas
        fetch(`/api/v1/courses/${uomCourseId}/custom_gradebook_columns/${customColumnData['interim_grade'].id}/data/${studentID}`, {
                method: 'PUT',
                credentials: 'include',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-Token": uomCSRFToken
                },
                body: JSON.stringify(data)
            })
            .then(uomStatusHandle)
            .then(uomJSONHandle)
            .then(function (data) {
                $("#uom-interim-grades-modal").hide();
//                $(".student_" + studentID + " .custom_column.custom_col_" + customColumnData['interim_grade'].id).text(value);
                $("div.dontblur textarea").val(value);
                $("div.dontblur button:contains('Save')").click();

                setTimeout(function(){
                    $("div.dontblur button:contains('Cancel')").click();
                }, 100);
            })
            .catch(function (error) {
                alert('Failed to edit gradebook. Please try again later.');
            });
    }

    /*
     ** Handler for Clear button on interim grades modal
     */
    $(document).on("click", "#uom-btn-clear-interim-grade", function (e) {

        cancelClickPropogation(e);

        // Unselect the current selected item if any
        if ($('#uom-grade-options input[name="uom-interim-grade-options"]:checked').length > 0) {
            $('#uom-grade-options tr.uom-checked').removeClass('uom-checked');
            $('#uom-grade-options input[name="uom-interim-grade-options"]:checked').prop("checked", false);

            // If you are clearing the old value
            if ($('#uom-grade-options').data("value").length > 0) {
                $("#uom-interim-grades-modal .uom-error").text("The current grade selection has been cleared. Please click 'Save' if you want to save this change.");
            }
        }
    });


    $(document).on("click", "input[name=uom-interim-grade-options]", function (e) {

//        e.preventDefault();
        cancelClickPropogation(e);

        $('#uom-grade-options tr.uom-checked').removeClass('uom-checked');
        if ($(this).is(":checked")) {
            $(this).closest('tr').addClass('uom-checked');
        }

        // Check if the value has been changed from what is currently in the cell... if yes display info
        if ($('#uom-grade-options input[name="uom-interim-grade-options"]:checked').length > 0) {
            var oldValue = $('#uom-grade-options').data("value");

            if (oldValue.length != 0 && oldValue != $('#uom-grade-options input[name="uom-interim-grade-options"]:checked').val()) {
                $("#uom-interim-grades-modal .uom-error").text("To save this change in the interim grade please click the 'Save' button.");
            } else {
                $("#uom-interim-grades-modal .uom-error").text("");
            }
        }

//        return false;
    });


    /*
     ** Handler for Save button on interim grades modal
     */
    $(document).on("click", "#uom-btn-save-interim-grade", function (e) {

        cancelClickPropogation(e);

        var oldValue = $('#uom-grade-options').data("value");
        var displayAlert = false;
        var selected = "";
        var studentID = $(this).data('student-id');

        // Check if an option has been selected
        if ($('#uom-grade-options input[name="uom-interim-grade-options"]:checked').length <= 0) {
            // Are we clearing the existing value
            if (oldValue.length != 0) {
                selected = "";
                var msg = "This action will clear the interim grade for this user. Do you want to continue?";
                displayAlert = true;
            } else {
                // Nothing is selected and old value is empty... Prompt with error
                $("#uom-interim-grades-modal .uom-error").text("Please select a grade before saving.");
                return;
            }
        } else {
            // A value has been selected
            selected = $('#uom-grade-options input[name="uom-interim-grade-options"]:checked').val();

            // If this value differs from the old value
            if (oldValue != selected) {
                msg = `This action will change the current interim grade for this user to ${selected}. Do you want to continue?`;
                displayAlert = true;
            }
        }

        // If we need a confirmation from user ... display and wait for confirmation
        if (displayAlert) {
            if (!confirm(msg)) {
                return; // If user response was negative... do nothing
            }
        }

        // Save the value
        saveInterimGradeData(studentID, selected);
    });

    $(document).on("click",'#uom-interim-grades-modal .uom-ui-modal-close', function () {
        setTimeout(function(){
            $("div.dontblur button:contains('Cancel')").click();
        }, 100);
    });

    // Function which returns a promise (and error if rejected) if response status is OK
    function uomStatusHandle(response) {
        if (response.status >= 200 && response.status < 300) {
            return Promise.resolve(response)
        } else {
            return Promise.reject(new Error(response.statusText))
        }
    }

    // Function which returns json from response
    function uomJSONHandle(response) {
        return response.json()
    }

    //Function which returns csrf_token from cookie see: https://community.canvaslms.com/thread/22500-mobile-javascript-development
    function getCsrfToken() {
        var csrfRegex = new RegExp('^_csrf_token=(.*)$');
        var csrf;
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            var match = csrfRegex.exec(cookie);
            if (match) {
                csrf = decodeURIComponent(match[1]);
                break;
            }
        }
        return csrf;
    }

    // Function which gets query string parameters by name - see: https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
    function uomGetParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    // Function which gets the course id either from the ENV or from the URL
    function uomGetCourseId() {
        var uomCourseId = ENV.COURSE_ID || ENV.course_id;
        if (!uomCourseId) {
            var urlPartIncludingCourseId = window.location.href.split("courses/")[1];
            if (urlPartIncludingCourseId) {
                uomCourseId = urlPartIncludingCourseId.split("/")[0];
            }
        }
        return uomCourseId;
    }

})();

//=================================================================
// dcollett 2020-03-05 plagiarism declaration - assignments & turnitin c/o Sydney Uni
// gwyy 2020-05-29 Added a check to not display notice if a DIV with id integration_declaration exists.
// dcollett & gwyy 2020-10-05 Ensure Gradescope and Cadmus display a plagiarism notice is displayed EXCEPT if a DIV with ID "integration_declaration" exists, in which case hide it.
// gwyy 2020-10-12 Insert plagiarism notice for quizzes/assignments that are NOT created by integration in both student and Edit modes.  Do not insert for quizzes/assignments in for all Integration assignments and quizzes regardless.
window.addEventListener('load', function () {
    if (window.location.pathname.match(/\/courses\/[0-9]+\/assignments\/[0-9]+/g)) {
        function appendAHCSNoticeAssignment() {
            var displayNotice = true;
            var insertMode = 0;
            var referenceNode = document.querySelector("#content div.description.user_content.enhanced");
            var examPlagiarismNotice = document.getElementById("integration_declaration");
            var pageHasIntegrationDeclaration = document.documentElement.innerHTML.includes('id=\\"integration_declaration\\"');
            var inEditMode = window.location.href.indexOf("/edit") > -1;
            if (examPlagiarismNotice !== null || (pageHasIntegrationDeclaration && inEditMode)) { // Don't display notice if Exam plagiarism notice is already displayed or if in Edit mode.
                displayNotice = false;
            }
            if (referenceNode === null || typeof referenceNode == 'undefined') {
                referenceNode = document.querySelector("div.tool_content_wrapper");
                insertMode = 1;
            }
            if (referenceNode === null) {
                referenceNode = document.querySelector("#edit_assignment_wrapper .control-group");
                insertMode = 0;
            }
            if (referenceNode === null) {
                console.log("setTimeout");
                window.setTimeout(appendAHCSNoticeAssignment, 500);
                return;
            } else {
                // Check the external tool type.  If it's TurnItIn then show the plagiarism notice.  Updated gwyy 2020-10-05 to set displayNotice to TRUE if the externalTool is found but NOT set displayNotice to FALSE otherwise. This is because there may be other reasons why plagiarism notice needs to be shown.
                var externalTools = ["turnitin.com"];
                var externalToolFormNode = document.querySelector("div.tool_content_wrapper form[id=tool_form]");
                if (externalToolFormNode !== null && typeof externalToolFormNode != 'undefined') {
                    var externalToolInList = false;
                    for (var i = 0; i < externalTools.length; i++) {
                        if (externalToolFormNode.getAttribute("action").indexOf(externalTools[i]) >= 0) {
                            externalToolInList = true;
                            break;
                        }
                    }
                    if (externalToolInList) {
                        displayNotice = true;
                    } //: WAS displayNotice = externalToolInList ? true : false;
                }
                // Create the AHCS element and insert
                if (displayNotice) {
                    var elementAHCS = document.createElement("div");
                    // Put your Academic Honesty Statement in the variable below
                    var ahcs = '<div id="uom-plagiarism-declaration"><hr><h2>Plagiarism declaration</h2>' +
                        '<p>By submitting work for assessment I hereby declare that I understand the University’s policy on <a href="https://academicintegrity.unimelb.edu.au/" target="_blank">academic integrity</a> and that the work submitted is original and solely my work, and that I have not been assisted by any other person (collusion) apart from where the submitted work is for a designated collaborative task, in which case the individual contributions are indicated. I also declare that I have not used any sources without proper acknowledgment (plagiarism). Where the submitted work is a computer program or code, I further declare that any copied code is declared in comments identifying the source at the start of the program or in a header file, that comments inline identify the start and end of the copied code, and that any modifications to code sources elsewhere are commented upon as to the nature of the modification.</p></div>';
                    elementAHCS.innerHTML = ahcs;
                    if (insertMode == 0) {
                        referenceNode.appendChild(elementAHCS);
                    } else if (insertMode == 1) {
                        referenceNode.parentNode.insertBefore(elementAHCS, referenceNode);
                    }
                }
            }
        }
        appendAHCSNoticeAssignment();
    }
});

// dcollett 2020-04-01 plagiarism declaration - quizzes c/o Sydney Uni
// gwyy 2020-04-22 Exception created for surveys and practice quizzes
// gwyy 2020-04-24 Notice now displays when the Quiz Instructions have been left blank
// gwyy 2020-05-29 Added a check to not display notice if a DIV with id integration_declaration exists.
// gwyy 2020-10-12 Insert plagiarism notice for quizzes/assignments that are NOT created by integration in both student and Edit modes.  Do not insert for quizzes/assignments in for all Integration assignments and quizzes regardless.
var quiz_type;
if (typeof ENV !== 'undefined' && typeof ENV["QUIZ"] !== 'undefined' && typeof ENV["QUIZ"].quiz_type !== 'undefined') {
    quiz_type = ENV["QUIZ"].quiz_type;
}
window.addEventListener('load', function () {
    if (window.location.pathname.match(/\/courses\/[0-9]+\/quizzes\/[0-9]+/g)) {
        function appendAHCSNoticeQuiz() {
            var displayNotice = true;
            var insertMode = 0;
            var quizButtonNode = document.querySelector("#content div.take_quiz_button");
            var quizDescriptionNode = document.querySelector("#content span.value");
            var referenceNode = document.querySelector("#content div.description.user_content.enhanced");
            var examPlagiarismNotice = document.getElementById("integration_declaration");
            var pageHasIntegrationDeclaration = document.documentElement.innerHTML.includes('id=\\"integration_declaration\\"');
            var inEditMode = window.location.href.indexOf("/edit") > -1;
            if (referenceNode === null || typeof referenceNode == 'undefined') {
                referenceNode = document.querySelector("#quiz_title");
                insertMode = 2;
            }
            if (typeof quiz_type !== 'undefined' && (quiz_type == "practice_quiz" || quiz_type == "survey" || examPlagiarismNotice !== null || (pageHasIntegrationDeclaration && inEditMode))) {
                displayNotice = false; // Do not insert the plagiarism message because this is a practice quiz or the exam plagiarism notice is showing
            }
            if (referenceNode === null) {
                window.setTimeout(appendAHCSNoticeQuiz, 500);
                return;
            } else {
                // Create the AHCS element and insert
                if (displayNotice) {
                    var elementAHCS = document.createElement("div");
                    // Put your Academic Honesty Statement in the variable below
                    var ahcs = '<hr><h2>Plagiarism declaration</h2>' +
                        '<p>By submitting work for this quiz I hereby declare that I understand the University’s policy on <a href="https://academicintegrity.unimelb.edu.au/" target="_blank">academic integrity</a> and that the work submitted is original and solely my work, and that I have not been assisted by any other person (collusion) apart from where the submitted work is for a designated collaborative task, in which case the individual contributions are indicated. I also declare that I have not used any sources without proper acknowledgment (plagiarism). Where the submitted work is a computer program or code, I further declare that any copied code is declared in comments identifying the source at the start of the program or in a header file, that comments inline identify the start and end of the copied code, and that any modifications to code sources elsewhere are commented upon as to the nature of the modification.</p>';
                    elementAHCS.innerHTML = ahcs;
                    if (insertMode == 0) {
                        referenceNode.appendChild(elementAHCS);
                    } else if (insertMode == 1) {
                        referenceNode.parentNode.insertBefore(elementAHCS, referenceNode);
                    } else if (insertMode == 2) {
                        referenceNode.parentNode.insertBefore(elementAHCS, referenceNode.nextSibling);
                    }
                }
            }
        }
        appendAHCSNoticeQuiz();
    }
});

// END plagiarism declaration

//=================================================================
// marathv 20200520 Hide section tab in course settings
$(window).load(function () {
    if (/^\/courses\/\d+\/settings/.test(window.location.pathname) || /^\/courses\/\d+\/details/.test(window.location.pathname)) {
        $("#sections_tab").hide();
        $("#tab-sections").hide();
        $("#course_details_tab").click();
    }
});
//=================================================================
// marathv 21072020 Disable changes to enrollemnts via peoples page

var isAdmin = false;

function disableStaffEnrollemts() {
    $(".rosterUser .al-options a[data-event=deactivateUser]").hide();
    $(".rosterUser .al-options a[data-event=editRoles]").hide();
    $(".rosterUser .al-options a[data-event=removeFromCourse]").hide();
}

function enableStaffEnrollemts() {
    $(".rosterUser .al-options a[data-event=deactivateUser]").show();
    $(".rosterUser .al-options a[data-event=editRoles]").show();
    $(".rosterUser .al-options a[data-event=removeFromCourse]").show();
}

var dataLoadedObserver = new MutationObserver(function (mutations) {
    var mutationHTML = '';
    for (var mutation of mutations) {
        mutationHTML = mutation.target.innerHTML;
        if ((mutation.target.classList &&
                mutation.target.classList.contains('paginatedLoadingIndicator')) ||
            (mutationHTML).indexOf('paginatedLoadingIndicator') > 1 ||
            mutation.target.classList.contains('al-trigger')) {
            disableStaffEnrollemts();
        }

        if (mutation.target.id == "addUsers" || mutationHTML.indexOf('addUsers')) {
            $("#addUsers").hide();
        }
    }
});

$(document).ready(function () {
    // Should call when loader hidden
    if (/^\/courses\/\d+\/users/.test(window.location.pathname)) {
        var target = document.querySelector('#content-wrapper');
        dataLoadedObserver.observe(target, {
            attributes: true,
            childList: true,
            subtree: true,
            characterData: true
        });
    }
});


async function isRootAdmin() {
    var uomCSRFToken = getCsrfToken();
    const data = await fetch('/api/v1/accounts/1/admins?user_id=self', {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "X-CSRF-Token": uomCSRFToken
        }
    })
    .then(uomStatusHandle)
    .then(uomJSONHandle)
    .then(function (response) {
        var adminsList = response;
        // Add current re
        if (adminsList != null || adminsList.length > 0) {
            // Check if any of the assigned roles is account admin
            for (let i = 0; i < adminsList.length; i++) {
                if (adminsList[i]['role'].match(/AccountAdmin/i)) {
                    return true;
                }
            }
        }

        return false;
    }).catch(function (error) {
        console.log('failed to get admins list', error);
        return false;
    });
    return data;
}

async function isEnroller(uomCourseId) {
    var uomCSRFToken = getCsrfToken();
    const data = await fetch('/api/v1/courses/' + uomCourseId + '/enrollments?user_id=self', {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "X-CSRF-Token": uomCSRFToken
        }
    })
    .then(uomStatusHandle)
    .then(uomJSONHandle)
    .then(function (response) {
        var enrollemnts = response;
        for (let i = 0; i < enrollemnts.length; i++) {
            if (enrollemnts[i].role.toLowerCase() == "enroller"){
                return true;
            }
        }

        return false;
    }).catch(function (error) {
        console.log('failed to get enroller list', error);
        return false;
    });
    return data;
}

async function getCourseInfo(uomCourseId) {
    var uomCSRFToken = getCsrfToken();
    const data = await fetch('/api/v1/courses/' + uomCourseId, {
        method: 'GET',
        credentials: 'include',
        headers: {
            "Accept": "application/json",
            "X-CSRF-Token": uomCSRFToken
        }
    })
    .then(uomStatusHandle)
    .then(uomJSONHandle)
    .catch(function (error) {
        console.log('failed to get course info', error);
        return null;
    });
    return data;
}


$(window).load(function () {
    var uomCourseId = uomGetCourseId();

    // If we are within a course and on the users/people page
    if (/^\/courses\/\d+\/users/.test(window.location.pathname)) {

        $("#addUsers").hide(); // First hide the +People button
        const WORSHOP_SUB_ACCOUNT_ID = 155;
        var adminUserCheck = isRootAdmin();
        var enrollerRoleCheck = isEnroller(uomCourseId);
        var courseInfo = getCourseInfo(uomCourseId);

        Promise.all([adminUserCheck, enrollerRoleCheck, courseInfo])
            .then(function(data){
                // Get all responses
                isAdmin = data[0];
                var isEnroller = data[1];
                var courseInfo = data[2];

                // If admin user then return all access to People page
                // or we are in the workshop subaccount
                if (isAdmin) {
                    // marathv 20200520 Show people button
                    $("#addUsers").show();
                    enableStaffEnrollemts();
                    dataLoadedObserver.disconnect();
                    return;
                }

                let sisID = (courseInfo.hasOwnProperty('sis_course_id')) ? courseInfo.sis_course_id : courseInfo.course_code;
                // If this is not a TWC, playpen or community... hide +People button
                // marathv 28/10/2020 Bugfix: replaced match() function with test()
                if (sisID != null && !(/^COM_/i.test(sisID) || /^PP/i.test(sisID) || /^TWC/i.test(sisID))) {
                    // Dont need to look for enrollers... just hide the button
                    $("#addUsers").hide();
                } else {
                    if (isEnroller) {
                        //marathv 20200520 Hide people button
                        $("#addUsers").show();
                        enableStaffEnrollemts();
                        dataLoadedObserver.disconnect();
                    }
                }
            });
    }
});



//=====================================================================
// dsweeney 20201002 Disable 'show one question at a time' in exam shells

$(window).load(function () {
    disableExamShell();
});

async function disableExamShell() {
    // If we are editing a quiz
    if (/^\/courses\/\d+\/quizzes\/\d+\/edit/.test(window.location.pathname)) {
        var exam_assignment = 0;
        if (typeof ENV.ASSIGNMENT_ID != "undefined") {
            var response = await fetch('/api/v1/courses/'+ ENV.COURSE_ID + '/assignments/' + ENV.ASSIGNMENT_ID,{
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });
            var data = await response.json();
            if (data.sis_assignment_id) {
                exam_assignment = 1;
            }
        }
        // If this is an exam assignment disable the option to show one question at a time
        if ( exam_assignment > 0 ) {
            $('#quiz_one_question_at_a_time')[0].parentNode.parentNode.classList.add("disabled");
            $('#quiz_one_question_at_a_time')[0].setAttribute('disabled', 'disabled');
            $('#tinymce-parent-of-quiz_description').after('<div  style="color:red; margin-top:2rem; font-weight:bold">Some settings are locked. Please contact the Exams Office to request changes.</div>');
        }
    }
}


//=================================================================
// marathv 15-10-2020 Add "Import Quiz Content" UI

var getUrl = window.location;
var baseUrl = getUrl.origin;

var assignmentsObserver = new MutationObserver(function (mutations) {
    var mutationHTML = '';
    for (var mutation of mutations) {
        mutationHTML = mutation.target.innerHTML;
        if ((mutation.target.classList &&
                mutation.target.classList.contains('quiz-copy-to'))) {

            assignmentsObserver.disconnect();

            $(".quiz ul.al-options").each(function () {
                if ($(this).find(".uom-ui-importquiz").length > 0) {
                    return;
                }

                var quizID = $("div[id^=summary_quiz_]").attr("id").split("_").pop();

                var $sendToLink = $(this).find(".quiz-copy-to").closest("li");
                var $importQuizLink = $sendToLink.clone();
                var link = $importQuizLink.find('a');
                link.removeAttr('id');
                link.removeClass('quiz-copy-to icon-duplicate');
                link.addClass('uom-ui-importquiz icon-import-content');
                link.text('Import quiz content');
                //                link.attr('href', toolurl + "?quiz="+quizID);
                link.attr('data-quizid', quizID);
                //            $(this).append($importQuizLink);
                $importQuizLink.insertAfter($sendToLink);
            });


        }
    }
});

$(window).load(function () {

    // If we are on the quizzes
    if (/^\/courses\/\d+\/quizzes$/.test(window.location.pathname)) {

        // Add button to import content
        var container = $(".header-bar-right");
        var btnImportQuiz = `<a id="uom-ui-importquiz-all" class="btn btn-primary" href="" title="Import Quiz Content" aria-label="Import Quiz Content">
            <i class="icon-import-content"></i>&nbsp;Import Quiz Content
          </a>`;

        container.prepend(btnImportQuiz);


        $(document).on("click", '.uom-ui-importquiz, #uom-ui-importquiz-all', function (e) {
            e.preventDefault();

            var toollink = encodeURIComponent("https://canvastools-prod.le.unimelb.edu.au/canvasQuizDuplicator/canvasLtiAuth");

            var html = `
            <div id="uom-quizimport-modal" class="uom-ui-modal-container" style="z-index:10020">
                <div class="uom-ui-modal-content-large" style="margin-top:4rem">
                    <div class="uom-ui-modal-header">
                        <h2>Import Quiz Content</h2>
                        <button type="button" tabindex="0" class="uom-ui-button uom-primary uom-ui-modal-close" aria-label="Close modal"><span aria-hidden="true">×</span></button>
                    </div>
                    <div class="uom-ui-modal-body">
                        <iframe id="quiz-import-container" style="width: 100%; height: 512px; border: none;" src="${baseUrl+ "/courses/"+ ENV.COURSE_ID + "/external_tools/retrieve?display=borderless&url=" + toollink}"></iframe>
                    </div>
                </div>
            </div>`;

            $("#uom-quizimport-modal").remove();
            $("body").append(html);

            //            var toollink = encodeURIComponent($(this).attr('href'));
            $("#uom-quizimport-modal").show();
            $("#uom-quizimport-modal #uom-ui-modal-close").focus();
        });

    }
});

//=================================================================
// marathv 10-02-2021 Hide "Drop this Subject" button for Catalog subjects

$(document).ready(function () {
    $("a.self_unenrollment_link").hide();
});

// Adding this just in case the button did not get added to the DOM on ready
$(window).load(function () {
    $("a.self_unenrollment_link").hide();
});

//================================================================

// dsweeney 20210311 provide visual cue for completed/concluded subjects
$(window).load(function () {
	if (/^\/courses\/\d+\/settings/.test(window.location.pathname)) {
		let promises = [];

		promises.push(uomConcludedCourse());

		Promise.all(promises)
		.then(function (data) {
			var concluded = (data[0].hasOwnProperty("concluded"))? data[0]["concluded"] : false;
			if (concluded == true)
			{
				$(".coursesettings").addClass("uom-concluded");
				$('#tab-details h2').contents().first().replaceWith("Subject Details (concluded)");
			}
			console.log('concluded: ' + concluded);
		});
	}
});
async function uomConcludedCourse() {
	const data = await fetch('/api/v1/courses/' + uomCourseId + '?include=concluded', {
		method: 'GET',
		credentials: 'include',
		headers: {
			"Accept": "application/json",
			"X-CSRF-Token": uomCSRFToken
		}
	})
	.then(uomJSONHandle);
	return data;
}
