icongen
=======
(in parts based on https://github.com/codepo8/simplethumbnails)

Generate PNG Icons/Favicons for websites (PNG Favicon, Chrome, Opera Coast, iOS touch
icons, IE Windows 8 and IE Windows 8.1 icons).

In addition generate icons for Windows Universal Store Apps for both 
Windows and Windows Phone. These icons are generated in "scaled" versions (80, 100, 140, 
180, 240) depending on version so these are *a lot*.

Ideally upload or drop an SVG file to generate all selected icon sets.


Demo: http://cthedot.de/icongen/


known issues
------------
In IE SVG uploads seem to cause problems when used on a canvas (plus the original SVG size
is lost). Therefor this tool currently fully works in Firefox and Chrome only.

If anybody has an idea why SVG is a problem for IE, please let me know, thanks!



