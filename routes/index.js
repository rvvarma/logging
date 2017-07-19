var express = require('express');
var router = express.Router();
var redis = require('redis');
var bunyan=require('bunyan');
var looog = require('../models/logtest');
var LogEntryStream = require('bunyan-mongodb-stream')({model: looog});
var log = bunyan.createLogger({
    name: 'foo',
    streams: [{
        path: 'foo.log',

        // `type: 'file'` is implied
    },
    {
     stream: LogEntryStream,

    }


    ],
    serializers: bunyan.stdSerializers

});
/* GET home page. */
router.get('/', function(req, res, next) {
log.info({lang: 'to me'},' anyway');//to add any new item in json

  res.render('index', { title: 'Express' });
});

module.exports = router;