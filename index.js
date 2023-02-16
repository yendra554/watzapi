const express = require("express");
require('dotenv').config();
require("./connection/connection");
const route = require("./routes/user.routes");
const callDetails = require("./routes/calling.routes");
const port = process.env.PORT;
const host = process.env.BASE_URL;
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
var cors = require('cors')
app.use(cors())
app.use(bodyParser.json());
// app.use('/', express.static(path.join(__dirname, 'public/frontend')));
app.use('/calls',callDetails);
app.use('/api',route);
app.use(express.json());
var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });