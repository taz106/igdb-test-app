const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');
const bodyParser = require('body-parser');
const axios = require('axios');

// app.use(cors);
// app.use(bodyParser);

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  // Pass to next layer of middleware
  next();
});

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.get('/', () => res.send({res: 'server is running'}));

// create a GET route
app.get('/game-list', (req, res) => {
  console.log(req);
  axios.get("https://api-v3.igdb.com/games?fields=*", {
    headers: {
      "user-key": "d32dc2887ee9906992ad716618b55b72",
      Accept: "application/json"
    }
  })
  .then(response => {
    // Do work here
    console.log(response.data);
    res.send(response.data);
  })
  .catch(e => {
    console.log("error", e);
  });
  // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});