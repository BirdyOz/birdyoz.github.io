# Wodonga Snap Retheming

This document outline the taks and 'Steps to replicate' for the Wodonga snap retheming, as seen at: [Wodonga - Open Learning (formerly MoodleRooms) - Dress rehearsal site](https://wodonga-tafevc.mrooms.net/)

<!-- MarkdownTOC -->

- [Task list](#task-list)
- [Steps to replicate](#steps-to-replicate)
    - [CSS theming changes](#css-theming-changes)
    - [Snap theme setting changes](#snap-theme-setting-changes)
    - [Language pack changes](#language-pack-changes)
    - [Javascipt 'hacks'](#javascipt-hacks)

<!-- /MarkdownTOC -->


<a id="task-list"></a>
## Task list ##

- Retheming of log in screen
    + [ ] Collapse whitespace
    + [ ] Remove duplicate login buttons
    + [ ] Theme out footer elements
    + [ ] Remove social media
- Amendments to the SNAP ‘My Courses’ interface
    + [ ] Rename 'Dashboard' to 'Help'
    + [ ] Relocate the logout
    + [ ] Rename the close box to last viewed.  Reposition to the left of logout
    + [ ] Style the logout and last viewed to appear as bootstrap buttons
    + [ ] Remove the course progress bar
- Accessibility and contrast changes
    + [ ] Change colour of hidden/conditional items to #BC243C
- Edits to Moodle course interface
    + [ ] Relocate the Course Dashboard to the top of LH navigation
- Review and confirm changes
    + [ ] Confirm changes with Geoff
    + [ ] Document all chnages
    + [ ] Sign off and handover


<a id="steps-to-replicate"></a>
## Steps to replicate ##

<a id="css-theming-changes"></a>
### CSS theming changes ###

1. Copy the contents of the file [/css/wodonga-snap.css](/css/wodonga-snap.css)
2. Paste the contents of this into the SNAP theme settings, as found at: 'Appearance > Themes > Snap > Custom CSS' (theme_snap | customcss)

<a id="snap-theme-setting-changes"></a>
### Snap theme setting changes ###


<a id="language-pack-changes"></a>
### Language pack changes ###

Language pack chnages control changes to terminology, such as reffering to 'Courses' as 'Units'

<a id="javascipt-hacks"></a>
### Javascipt 'hacks' ###

For functional changes that cannot be controlled through CSS or Moodle configuration changes described above, Javascript can be deployed to manipulate the DOM and re-render the page dynamically.

Moodle snap theme has built in JQuery support, that provides a ready means to maniplulate the DOM.
