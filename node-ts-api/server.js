var express = require('express');
var app = express();
// routes
app.get('/', function (req, res, next) {
    res.send('node typescript api is working...');
});
app.listen(process.env.PORT || 3007, function () {
    console.log('server started...');
});
