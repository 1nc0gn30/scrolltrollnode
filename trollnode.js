const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/scrolltroll.html');
});

app.listen(3000, function () {
  console.log('Server listening on port 3000!');
});

