# Wodonga Snap Retheming

This document outline the taks and 'Steps to replicate' for the Wodonga snap retheming, as seen at: <br>
 **[Wodonga - Open Learning (formerly MoodleRooms) - Dress rehearsal site](https://wodonga-tafevc.mrooms.net/)**

<!-- MarkdownTOC -->

- [Task list](#task-list)
- [Steps to replicate](#steps-to-replicate)
    - [CSS theming changes](#css-theming-changes)
    - [Language pack changes](#language-pack-changes)

<!-- /MarkdownTOC -->


<a id="task-list"></a>
## Task list ##

- Retheming of log in screen
    + [x] Collapse whitespace
    + [x] Remove duplicate login buttons
    + [x] Theme out footer elements
    + [ ] Remove policies and mobile app links from footer
    + [x] Make "Browse all units" larger.
- Amendments to the SNAP ‘My Courses’ interface
    + [x] Rename 'Dashboard' to 'Help'
    + [x] Relocate the logout
    + [x] Rename the close box to last viewed.  Reposition to the left  of logout
    + [x] Style the logout and last viewed to appear as bootstrap buttons
    + [x] Remove the course progress bar
    + [x] On small format devices push content down to make space for buttons and render as text links
    + [x] Round the corners of buttons
- Accessibility and contrast changes
    + [x] Change colour of hidden/conditional items to #BC243C
- Edits to Moodle course interface
    + [x] Relocate the Course Dashboard to the top of LH navigation
- Review and confirm changes
    + [x] Confirm changes with Geoff
    + [x] Document all changes
    + [ ] Sign off and handover


<a id="steps-to-replicate"></a>
## Steps to replicate ##

<a id="css-theming-changes"></a>
### CSS theming changes ###

1. Copy the contents of the file [css/wodonga-snap.css](css/wodonga-snap.css)
2. Paste the contents of this into the SNAP theme settings, as found at: 'Appearance > Themes > Snap > Custom CSS' (theme_snap | customcss)
3. Save and force-refresh your browser. (Note, for the developer ONLY, you may notice that Moodle momentarily loses all styling. This is due to your browser caching the old CSS.  <kbd>SHIFT</kbd> <kbd>+</kbd> <kbd>F5</kbd> to see your chnages.)



<a id="language-pack-changes"></a>
### Language pack changes ###

Language packs control changes to terminology, such as changing 'Dashboard' as 'Help'

1. From Site administration > Language customisation, Choose "English (en)"
2. Change the following Strings **FROM** "Dashboard" **TO** "Help"
    - *core > myhome* -> Local Customisation = 'Help'
    - *core_admin > mymoodle* -> Local Customisation = 'Help'
    - *core_my > mymoodle*  -> Local Customisation = 'Help'


