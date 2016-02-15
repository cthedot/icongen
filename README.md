icongen
=======
(in parts based on https://github.com/codepo8/simplethumbnails)

Generate PNG Icons/Favicons for websites (PNG Favicon for all browsers, Android homescreen, Edge on Windows 10 and mobile, iOS touch icons, IE11 on Windows 8/8.1/WP, Chrome apps, Opera Coast).

In addition generate icons for Windows 10 Universal Apps (UWP) and Windows Store Apps for both Windows and Windows Phone/Mobile. These icons are generated in "scaled" versions (100, 150, 200, etc) depending on version so these will be *a lot*.

Ideally upload or drop an SVG file to generate all selected icon sets.


Working version online: http://cthedot.de/icongen/


known issues
------------
This tool works best in Firefox, Chrome or Microsoft Edge.

In IE only PNG or JPG upload seem to work. SVG uploads cause problems when used on a canvas (plus the original SVG size is lost, fixed in Edge though).
