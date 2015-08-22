var path = require('path');
var FtpDeploy = require('ftp-deploy');
var config = require('./config.json');

var ftpconfig = {
    username: config.username,
    password: config.password,
    host: config.host,
    localRoot: path.join('.', 'app'),
    remoteRoot: '/htdocs/ftptest',
    exclude: ['.git', 'tmp/*'],
    //continueOnError = true
}
var ftpDeploy = new FtpDeploy();

ftpDeploy.on('upload-error', function (data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.on('uploading', function(data) {
    data.totalFileCount;       // total file count being transferred
    data.transferredFileCount; // number of files transferred
    data.percentComplete;      // percent as a number 1 - 100
    data.filename;             // partial path with filename being uploaded
});
ftpDeploy.on('uploaded', function(data) {
    console.log(data);         // same data as uploading event
});

ftpDeploy.deploy(ftpconfig, function(err) {
    console.log(err || 'finished');
});
