icongen
=======

Generate PNG Icons/Favicons for websites from a single image preferably an SVG. Generated are PNG Favicon for all browsers, Android homescreen, Edge on Windows 10 and mobile, iOS touch icons, IE11 on Windows 8/8.1/WP, Chrome apps, Opera Coast and a basic favicon.ico (16x16 only though).

In addition generate icons for Windows 10 Universal Apps (UWP) and Windows Store Apps for both Windows and Windows Phone/Mobile. These icons are generated in all needed "scaled" versions (100, 150, 200, etc) so these will be *a lot*.

Ideally upload or drop an SVG file to generate all selected icon sets.


Demo / working version online: http://cthedot.de/icongen/


In parts based on https://github.com/codepo8/simplethumbnails

Thanks to http://mrcoles.com/blog/making-images-byte-by-byte-javascript/ for the .ico generation code.


known issues
------------
This tool works best in Firefox, Chrome or Microsoft Edge.

On Windows 10 Mobile icon generation works, download not yet, hopefully soon as tool seems useful on mobile/Continuum.

(In IE only a PNG or JPG upload seems to work. SVG upload causes problems when used on a canvas (plus the original SVG size is lost). This problem has been fixed in Edge.)
