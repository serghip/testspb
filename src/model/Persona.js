const mongoose = require('mongoose')
const Schema = mongoose.Schema

const personaSchema = new Schema ({
    fecha: String,
    diadesemana: String,
    hora: String,
    complejo: String,
    unidad: String,
    tipo: String,
    subtipo: String,
    relacionenelhecho: String,
    involucrado: String,
    nombre: String,
    nroidentificacion: Number,
    genero: String,
    edad: Number    
}, {versionKey:false})

module.exports = mongoose.model('personas', personaSchema)