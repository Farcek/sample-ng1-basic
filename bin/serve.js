var express = require('express');
var path = require('path');
var app = express();
var morgan = require('morgan');
var favicon = require('serve-favicon');


var publicDir = path.resolve(__dirname, '../public');




app.use('/bower_components', express.static(path.resolve(__dirname, '../bower_components')));
app.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
app.use('/public', express.static(publicDir));

app.use(favicon(path.resolve(publicDir, 'favicon.ico')));
app.use(morgan('dev'));

app.all('/*', function (req, res, next) {
    res.sendFile('index.html', {root: publicDir});
});


var port = process.env.npm_config_port || process.env.NODE_PORT || process.env.PORT || 3000;


app.listen(port, function () {
    console.log('app listening on port ' + port + '!. use http://localhost:' + port + ';');
});