(function () {
  "use strict";

  var settings = {
    crop: false,
    background: 'transparent',
    png: true,
    w: 100,
    h: 100,
    sets: [
      {
        defaultSelected: true,
        title: 'favicon.png (browsers including Coast, etc.)',
        sizes: [
          { w: 16, name: 'favicon-16x16.png' },
          { w: 32, name: 'favicon-32x32.png' },
          { w: 48, name: 'favicon-48x48.png' },
          { w: 64, name: 'favicon-64x64.png' },
          { w: 96, name: 'favicon-96x96.png' }, // Google TV?
          { w: 128, name: 'favicon-128x128.png' },
          { w: 256, name: 'favicon-256x256.png' },
          { w: 228, name: 'coast-228x228.png' }, // Opera Coast
        ]
      }, {
        defaultSelected: true,
        title: 'Android Homescreen (incl. Chrome)',
        sizes: [
          { w: 128, name: 'android-128x128.png' },
          { w: 196, name: 'android-196x196.png' },
        ]
      }, {
        title: 'IE on Windows 8.0',
        sizes: [
          { w: 144, name: 'mstile-144x144.png' }
        ]
      }, {
        defaultSelected: true,
        title: 'IE on Windows 8.1 (with browserconfig.xml)',
        folder: 'ie-browserconfig',
        sizes: [
          { w: 128, name: 'tile70x70.png' },
          { w: 270, name: 'tile150x150.png' },
          { w: 558, h: 270, name: 'tile310x150.png' },
          { w: 558, name: 'tile310x310.png' },
        ]
      }, {
        defaultSelected: true,
        title: 'iOS Safari',
        sizes: [
          { w: 60, name: 'apple-touch-icon-60x60.png' },
          { w: 120, name: 'apple-touch-icon-120x120.png' },
          { w: 180, name: 'apple-touch-icon-180x180.png' },
          { w: 76, name: 'apple-touch-icon-76x76.png' },
          { w: 152, name: 'apple-touch-icon-152x152.png' },
        ]
      }, {
        title: 'Firefox OS and Apps', // https://developer.mozilla.org/en-US/Apps/Build/Manifest
        folder: 'FirefoxOS',
        sizes: [
          { 
            name: 'icon-%s.png',
            scales: { 60: { w: 60 }, 90: { w: 90 }, 128: { w: 128 }, 512: { w: 512 } }
          }
        ]
      }, {
        title: 'Windows Store App - Shared',
        folder: 'WindowsApp.Shared',
        sizes: [
          {
            name: 'Square150x150.scale-%s.png',
            scales: { 80: { w: 120 }, 100: { w: 150 }, 140: { w: 210 }, 180: { w: 270 }, 240: { w: 360 } }
          },
          {
            name: 'Wide310x150.scale-%s.png',
            scales: { 80: { w: 248, h: 120 }, 100: { w: 310, h: 150 }, 140: { w: 434, h: 210 }, 180: { w: 558, h: 270 }, 240: { w: 744, h: 360 } }
          },
          {
            name: 'Store.scale-%s.png',
            scales: { 100: { w: 50 }, 140: { w: 70 }, 180: { w: 90 }, 240: { w: 120 } }
          },
          {
            name: 'Badge.scale-%s.png',
            scales: { 100: { w: 24 }, 140: { w: 33 }, 180: { w: 43 }, 240: { w: 58 } }
          },
        ]
      },
      {
        title: 'Windows Store App - Windows',
        folder: 'WindowsApp.Windows',
        sizes: [
          {
            name: 'Square70x70.scale-%s.png',
            scales: { 80: { w: 56 }, 100: { w: 70 }, 140: { w: 98 }, 180: { w: 126 } }
          },
          {
            name: 'Square310x310.scale-%s.png',
            scales: { 80: { w: 248 }, 100: { w: 310 }, 140: { w: 434 }, 180: { w: 558 } }
          },
          {
            name: 'Square30x30.scale-%s.png',
            scales: { 80: { w: 24 }, 100: { w: 30 }, 140: { w: 42 }, 180: { w: 54 } }
          },
          {
            name: 'Square30x30.targetsize-%s.png',
            scales: { 16: { w: 16 }, 32: { w: 32 }, 48: { w: 48 }, 256: { w: 256 } }
          },
          {
            name: 'SplashScreen.scale-%s.png',
            scales: { 100: { w: 620, h: 300 }, 140: { w: 868, h: 420 }, 180: { w: 1116, h: 540 } }
          },
        ]
      },
      {
        title: 'Windows Store App - Windows Phone',
        folder: 'WindowsApp.WindowsPhone',
        sizes: [
          {
            name: 'Square71x71.scale-%s.png',
            scales: { 100: { w: 71 }, 140: { w: 99 }, 240: { w: 170 } }
          },
          {
            name: 'Square44x44.scale-%s.png',
            scales: { 100: { w: 44 }, 140: { w: 62 }, 240: { w: 106 } }
          },
          {
            name: 'SplashScreen.scale-%s.png',
            scales: { 100: { w: 480, h: 800 }, 140: { w: 672, h: 1120 }, 240: { w: 1152, h: 1920 } }
          },
        ]
      },
      {
        defaultSelected: true,
        title: 'Windows 10 Universal App',
        folder: 'Windows10',
        sizes: [
          {
            name: 'Square71x71Logo.scale-%s.png',
            scales: { 400: { w: 284 }, 200: { w: 142 }, 100: { w: 71 }, 150: {  w: 107 }, 125: { w: 89 } }
          },
          {
            name: 'Square150x150Logo.scale-%s.png',
            scales: { 400: { w: 600 }, 200: { w: 300 }, 100: { w: 150 }, 150: {  w: 225 }, 125: { w: 188 } }
          },
          {
            name: 'Wide310x150Logo.scale-%s.png',
            scales: { 400: { w: 1240, h: 600 }, 200: { w: 620, h: 300 }, 100: { w: 310, h: 150 }, 150: {  w: 465, h: 225 }, 125: { w: 388, h: 188 } }
          },
          {
            name: 'Square310x310Logo.scale-%s.png',
            scales: { 400: { w: 1240 }, 200: { w: 620 }, 100: { w: 310 }, 150: {  w: 465 }, 125: { w: 388 } }
          },
          {
            name: 'Square44x44Logo.scale-%s.png',
            scales: { 400: { w: 176 }, 200: { w: 88 }, 100: { w: 44 }, 150: {  w: 66 }, 125: { w: 55 } }
          },
          {
            name: 'Square44x44Logo.targetsize-%s.png',
            scales: { 256: { w: 256 }, 48: { w: 48 }, 24: { w: 24 }, 16: { w: 16 } }
          },
          {
            name: 'StoreLogo.scale-%s.png',
            scales: { 400: { w: 200 }, 200: { w: 100 }, 150: {  w: 75 }, 125: { w: 63 }, 100: { w: 50 } }
          },
          {
            name: 'BadgeLogo.scale-%s.png',
            scales: { 400: { w: 96 }, 200: { w: 48 }, 150: {  w: 36 }, 125: { w: 30 }, 100: { w: 24 } }
          },
          {
            name: 'SplashScreen.scale-%s.png',
            scales: { 400: { w: 2480, h: 1200 }, 200: { w: 1240, h: 600 }, 150: { w: 930, h: 450 }, 125: { w: 775, h: 375 }, 100: { w: 620, h: 300 } }
          },
        ]
      },
    ]
  }
  var selectedSets = []

  var body = document.getElementById('body')
  var canvas = document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  //var clear = document.getElementById('clear')
  var download = document.getElementById('download')
  var list = document.getElementById('list')

  var dropzone = document.getElementById('dropzone')
  var fileinput = document.getElementById('files')
  var bginput = document.getElementById('bg')

  dropzone.addEventListener('dragover', function (e) {
    e.preventDefault();
  }, false);
  dropzone.addEventListener('drop', getFiles, false);
  fileinput.value = null
  fileinput.addEventListener('change', getFiles, false);

  bginput.addEventListener('change', function (e) {
    settings.background = e.target.value ? e.target.value : 'transparent'
  }, false)

  download.addEventListener('click', zipit, false)
  //clear.addEventListener('click', clearThumbs, false)

  /*
  var w = document.getElementById('w')
  var h = document.getElementById('h')

  w.addEventListener('change', updateSetting, false)
  w.addEventListener('input', updateSetting, false)
  h.addEventListener('change', updateSetting, false)
  h.addEventListener('input', updateSetting, false)
  */
  function updateSetting(e) {
    var range = e.target
    var v = range.value
    var id = range.id

    settings[id] = v
    document.getElementById(id + '-value').innerText = v
  }

  function getFiles(e) {
    e.preventDefault();
    
    list.innerHTML = ''

    var files = e.dataTransfer ? e.dataTransfer.files : e.target.files
    var url = window.URL || window.webkitURL
    var objURL = url.createObjectURL || false;

    if (files.length > 0) {
      var i = 1 // only 1 for now! //files.length;

      while (i--) {
        var file = files[i];
        if (file.type.indexOf('image') === -1) {
          continue;
        }
        if (objURL) {
          loadImage(url.createObjectURL(file), file.name);
        }
        else {
          var reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = function (ev) {
            loadImage(ev.target.result, file.name);
          }
        }
      }
    }
  }

  var max = 0
  var count = 0

  function loadImage(file, name) {
    var img = new Image();

    body.classList.add('working')
    count = 0
    max = 0

    selectedSets.forEach(function (index) {
      settings.sets[index].sizes.forEach(function (size) {
        max = max + (size.scales ? Object.keys(size.scales).length : 1)
      })
    })


    img.onload = function (e) {
      selectedSets.forEach(function (index) {
        var set = settings.sets[index]
        var settitle = document.createElement('h3');

        settitle.textContent = set.title
        list.appendChild(settitle)

        set.sizes.forEach(function (size) {
          var scales = size.scales
          if (scales) {

            var scaletitle = document.createElement('h4');

            scaletitle.textContent = set.folder ? set.folder + '/' + size.name : size.name
            list.appendChild(scaletitle)

            for (var scale in scales) {
              genImage(
                e.target,
                scales[scale],
                size.name.replace('%s', scale),
                set.folder
              )
            }
          }
          else {
            genImage(
              e.target,
              size,
              size.name || name,
              set.folder
            )
          }


        })
      })
    };
    img.src = file;
  }

  function genImage(img, size, name, folder) {
    imagetocanvas(img, size.w, size.h || size.w, name, folder);

    count++
    if (count >= max) {
      body.classList.remove('working')
    }
  }

  function imagetocanvas(img, w, h, name, folder) {
    var dimensions = resize(
      img.width || settings.w,
      img.height || settings.h,
    w, h);

    canvas.width = w;
    canvas.height = h;

    if (settings.crop) {
      c.width = dimensions.w;
      c.height = dimensions.h;
      dimensions.x = 0;
      dimensions.y = 0;
    }
    if (settings.background !== 'transparent') {
      ctx.fillStyle = settings.background;
      ctx.fillRect(0, 0, w, h);
    }

    ctx.drawImage(
      img, dimensions.x, dimensions.y, dimensions.w, dimensions.h
    );
    addtothumbslist(name, folder);
  }

  function resize(imagewidth, imageheight, thumbwidth, thumbheight) {
    var w = 0
    var h = 0
    var x = 0
    var y = 0
    var widthratio = imagewidth / thumbwidth
    var heightratio = imageheight / thumbheight
    var maxratio = Math.max(widthratio, heightratio);

    if (maxratio > 1) {
      w = imagewidth / maxratio;
      h = imageheight / maxratio;
    } else {
      w = imagewidth;
      h = imageheight;
    }
    x = (thumbwidth - w) / 2;
    y = (thumbheight - h) / 2;

    return { w: w, h: h, x: x, y: y };
  }



  function addtothumbslist(name, folder) {
    var thumb = new Image()
    var url = [] // dummy

    try {
      url = settings.png ? canvas.toDataURL() : canvas.toDataURL('image/jpeg', settings.quality)
    }
    catch (e) {
      console.log(e)
    }

    thumb.src = url;
    thumb.title = name + '<br>' +
      canvas.width + '×' + canvas.height + ' @' +
      Math.round(url.length / 1000 * 100) / 100 + ' KB '
    thumb.setAttribute('data-filename', name);
    thumb.setAttribute('data-folder', folder ? folder : '');

    var link = document.createElement('a');
    var textlabel = document.createElement('span');

    textlabel.innerHTML = thumb.title;
    link.href = url;
    link.download = name;
    link.appendChild(thumb);
    link.appendChild(textlabel);

    list.appendChild(link);
  }

  function clearThumbs(e) {
    list.innerHTML = ''
  }


  function zipit() {
    var zip = new JSZip();
    var imgs = list.querySelectorAll('img');
    var allimgs = imgs.length;
    var folders = {}
    var target = zip

    if (allimgs) {
      while (allimgs--) {
        var folder = imgs[allimgs].getAttribute('data-folder')

        if (folder) {
          if (!(folder in folders)) {
            folders[folder] = zip.folder(folder)
          }
          target = folders[folder]
        }
        else {
          target = zip
        }

        target.file(
          imgs[allimgs].getAttribute('data-filename'),
          imgs[allimgs].src.substr(imgs[allimgs].src.indexOf(',') + 1),
          { base64: true }
        );
      }
      saveAs(
        zip.generate({ type: 'blob' }),
        'icons.zip'
      );
    }
  }

  function init() {
    bginput.value = ''

    var selection = document.getElementById('selection')

    settings.sets.forEach(function (set, i) {
      var setBox = document.createElement('input')

      setBox.setAttribute('type', 'checkbox')
      setBox.setAttribute('value', i)
      setBox.addEventListener('change', function (e) {
        var v = parseInt(e.target.value)
        var index = selectedSets.indexOf(v)

        if (e.target.checked) {
          if (index == -1) {
            selectedSets.push(v)
          }
        }
        else {
          selectedSets.splice(index, 1)
        }
        selectedSets = selectedSets.sort()
      })

      if (set.defaultSelected) {
        setBox.setAttribute('checked', set.defaultSelected)
        selectedSets.push(i)
      }

      var title = document.createElement('label')
      var text = document.createElement('span')

      text.textContent = set.title
      title.appendChild(setBox)
      title.appendChild(text)

      selection.appendChild(title)
    })
  }

  init()

})()