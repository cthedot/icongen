/*!
 * Generate Ico Data URL
 * http://mrcoles.com/low-res-paint/
 *
 * Copyright 2010, Peter Coles
v * Licensed under the MIT licenses.
 * http://mrcoles.com/media/mit-license.txt
 *
 * Date: Tue Oct 26 00:00:00 2010 -0500
 */

/*
 * More info:
 *  - http://en.wikipedia.org/wiki/ICO_(file_format)
 *  - http://www.blitzbasic.com/Community/posts.php?topic=75770 (end of thread)
 *
 * Also see http://mrcoles.com/low-res-paint/ for the original ico example
 *
 * Notes:
 *
 *  - When displaying 32-bit images in 32-bit mode (Windows XP onwards), the AND mask is not used, instead a single mask with an 8-bit alpha channel is used. Windows XP can also and will use a 32-bit image in 24-bit mode by removing the alpha channel and applying the AND mask for transparency if no 24-bit image is available. Since the AND mask describes the transparency in 24-bit mode, if it is not included, an incorrect transparency pattern will be produced.
 *  - All values are represented in little-endian (Intel standard) format.
 *  - View bytes of an existing favicon, open in python: open('foo.ico', 'rb').read().encode('hex')
 */

(function(undefined) {

    function _asLittleEndianHex(value, bytes) {
        // Convert value into little endian hex bytes
        // value - the number as a decimal integer (representing bytes)
        // bytes - the number of bytes that this value takes up in a string

        // Example:
        // _asLittleEndianHex(2835, 4)
        // > '\x13\x0b\x00\x00'

        var result = [];

        for (; bytes>0; bytes--) {
            result.push(String.fromCharCode(value & 255));
            value >>= 8;
        }

        return result.join('');
    }

    function _collapseData(rows, row_padding) {
        // Convert rows of RGBA arrays into BMP data
        var i,
            rows_len = rows.length,
            j,
            pixels_len = rows_len ? rows[0].length : 0,
            pixel,
            padding = '',
            result = [];

        for (; row_padding > 0; row_padding--) {
            padding += '\x00';
        }

        for (i=0; i<rows_len; i++) {
            for (j=0; j<pixels_len; j++) {
                pixel = rows[i][j];
                result.push(String.fromCharCode(pixel[2]) +
                            String.fromCharCode(pixel[1]) +
                            String.fromCharCode(pixel[0]) +
                            (pixel[3] === undefined ? '\xff' : String.fromCharCode(pixel[3])));
            }
            result.push(padding);
        }

        return result.join('');
    }

    window.generateIcoDataURL = function(rows) {
        // Expects rows starting in bottom left
        // formatted like this: [[[255, 0, 0], [255, 255, 0], ...], ...]
        // which represents: [[red, yellow, ...], ...]

        // optional 4th value in each color is the alpha! -- ignored for now!!

        if (!window.btoa) {
            alert('Oh no, your browser does not support base64 encoding - window.btoa()!!');
            return false;
        }

        var height = rows.length,                                // the number of rows
            width = height ? rows[0].length : 0,                 // the number of columns per row
            row_padding = (width * 3) % 4,                       // pad each row to a multiple of 4 bytes (should be 0)
            num_data_bytes = (width * 4 + row_padding) * height, // size in bytes of BMP data
            num_bmp_bytes = 40 + num_data_bytes + 64,            // full header size (offset) + size of data
            pixmap_height,
            pixmap_width,
            raw_1bit_bitmap = (new Array(width * height * 2 / 8 + 1)).join('\x00'),
            file;

        pixmap_height = _asLittleEndianHex(height * 2, 4); // NOTE: my example .ico had 2x the Pixma height
        pixmap_width = _asLittleEndianHex(width, 4);
        height = _asLittleEndianHex(height, 1);
        width = _asLittleEndianHex(width, 1);
        num_data_bytes = _asLittleEndianHex(num_data_bytes, 4);
        num_bmp_bytes = _asLittleEndianHex(num_bmp_bytes, 4);


                // ==HEADER==
        file = ('\x00\x00' +         // Reserved. Should always be 0.
                '\x01\x00' +         // Specifies image type: 1 for icon (.ICO) image, 2 for cursor (.CUR) image. Other values are invalid.
                '\x01\x00' +         // Specifies number of images in the file.

                // ==IMAGE==
                width +             // **Specifies image width in pixels. Can be any number between 0 to 255. Special case: 0 means 256 pixels**
                height +             // **Specifies image height in pixels. Can be any number between 0 to 255. Special case: 0 means 256 pixels**
                '\x00' +             // Specifies number of colors in the color palette. Should be 0 if the image is truecolor.
                '\x00' +             // Reserved. Should be 0.
                '\x01\x00' +         // In .ICO format: Specifies color planes. Should be 0 or 1.
                '\x20\x00' +         // In .ICO format: Specifies bits per pixel (32 = 24 color + 8 alpha)
                num_bmp_bytes +      // **Specifies the size of the bitmap data in bytes**
                '\x16\x00\x00\x00' + // Specifies the offset of bitmap data address in the file (22 bytes!)

                // ==ICO Data Header ==
                '\x28\x00\x00\x00' + // Header size (40 bytes!)
                pixmap_width +       // **Pixmap width**
                pixmap_height +      // **Pixmap height (why 32 for the 16x16 example?)**
                '\x01\x00' +         // Color Planes
                '\x20\x00' +         // The number of bits per pixel
                '\x00\x00\x00\x00' + // The compression method being used (0 is uncompressed)
                num_data_bytes +     // **The image size. This is the size of the raw bitmap data . should not be confused with the file size**
                '\x00\x00\x00\x00' + // The horizontal resolution of the image. (pixel per meter, signed integer, usually 2835)
                '\x00\x00\x00\x00' + // The vertical resolution of the image. (pixel per meter, signed integer, usually 2835)
                '\x00\x00\x00\x00' + // The number of colors in the color palette, or 0 to default to 24 or 32 bits
                '\x00\x00\x00\x00' + // The number of important colors used, or 0 when every color is important; generally ignored.

                // ==Raw Data 4 bytes each (B, G, R, A) ==
                _collapseData(rows, row_padding) +

                // ==After this RAW data, a 1-bit bitmap is also RAW saved. If you save it as a back of bytes with the value 0, it will get the Alpha channel instead.==
                raw_1bit_bitmap
               );

        return 'data:image/vnd.microsoft.icon;base64,' + btoa(file);
    };

})();
