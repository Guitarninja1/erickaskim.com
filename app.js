const express = require('express');
const pug = require('pug');
const webpack = require('webpack');
const routes = require('./index');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', routes);




app.listen(port, () => {
    console.log(`Express app listening at http://localhost:${port}`);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded);