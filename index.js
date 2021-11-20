const express = require('express')
const app = express()
const port = 3000
var path    = require("path");

app.use(express.static('public'));


app.get('/',function(req,res){

var filePath = path.join(__dirname+'/index.html')
res.contentType(path.basename(filePath));
res.contentType(path.basename(filePath));
res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "base.css");
  });

  app.get('/main.js', function(req, res) {
    res.sendFile(__dirname + "/" + "main.js");
  });
app.listen(port, () => console.log(`Example app listening on port ${port}!`))