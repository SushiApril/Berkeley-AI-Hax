var express = require('express');
var router = express.Router();
var textToSpeech = require('../helpers/tts');

console.log("Hi")
/* GET home page. */

router.post('/talk', function(req, res, next) {
  
  
  console.log('Received request:', req.body);

  textToSpeech(req.body.text, req.body.voice)
  .then(result => {
    console.log('Text-to-Speech result:', result);
    res.json(result);    
  })
  .catch(err => {
    res.json({});
  });


});

console.log("hielo")

module.exports = router;
