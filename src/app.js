var createError = require('http-errors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const moment = require("moment");
const methodOverride = require('method-override'); // Pasar poder usar los métodos PUT y DELETE


//conectamos con mongoose
const mongoose = require('mongoose')

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://invitado:contra123@cluster0.qsh2m.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});

mongoose.connect(uri)

const db = mongoose.connection
db.on('error', console.error.bind(console, "Error al conectar a MongoDB"))
db.once('open', function callback() {
    console.log("Conectado a MongoDB")
})

module.exports = db

// render
var express = require('express');
var app = express();
var indexRouter = require('./routes/index');

app.use('/', indexRouter);

//get and post
const personas = require('./routes/personas')
app.use(personas)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.locals.moment = moment;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(methodOverride('_method')); // Pasar poder pisar el method="POST" en el formulario por PUT y DELETE ?_method=PUT

module.exports = app;
