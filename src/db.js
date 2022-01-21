const mongoose = require('mongoose')

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://sergio:FmHkyp36tf2Z0jT9@cluster0.qsh2m.mongodb.net/test?retryWrites=true&w=majority";
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