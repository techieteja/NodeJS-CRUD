// app.js is set as root of the application
const express = require('express');
const app = express();
const port = 2021;
const path = require('path');
const mongoose = require("./database");
const Post = require('./schemas/PostSchema');

// Start expres server
const server = app.listen(port, () => {console.log('Listening on port ' + port)});

//set output file as pug & output directory as views
app.set('view engine', 'pug');
app.set('views', './views');

// Import static files
app.use(express.static(path.join(__dirname, "public")));

// Body parser extracts the entire body of an incoming request and exposes it on req.body
app.use(express.urlencoded({ extended: false }));

// Router import GET & POST Reuqests
const AppRoute = require('./routes/AppRoute');
app.use("/", AppRoute);