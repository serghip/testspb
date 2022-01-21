const express = require('express')
const router = express.Router()
var bodyParser = require('body-parser')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const personaController = require('../controllers/personaController')

//Mostrar todos los personas(GET)
router.get('/visualizacion', personaController.mostrar)

//Crear persona(POST)
router.post('/crear', urlencodedParser, personaController.crear)

//Editar persona(POST)
router.post('/editar', urlencodedParser, personaController.editar)

//Borrar persona(GET)
router.get('/borrar/:id', personaController.borrar)

//Buscar persona(GET) // este es el enlance donde mostrara todo
router.post('/visualizacion/resultado', urlencodedParser, personaController.buscar)

module.exports = router