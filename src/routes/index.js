var express = require('express');
var router = express.Router();
const personaController = require('../controllers/personaController')

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/carga', function(req, res) {
  res.render('carga');
});

//Mostrar todos los personas(GET)
router.get('/visualizacion', personaController.mostrar)

module.exports = router;
