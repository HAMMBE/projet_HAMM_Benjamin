//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/tp02-hamm-benjamin'));

app.get('/*', function(req,res) {

  if(req.url === '/') {
    res.sendFile(path.join(__dirname,'/dist/tp02-hamm-benjamin/index.html'));
  }
  else {
    res.sendFile(path.join(__dirname, '/dist/tp02-hamm-benjamin' + req.url))
  }

});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
