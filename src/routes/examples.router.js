var express = require("express");
var router = express.Router();
var examplesController = require("../controllers/examples.controller");

//Obtener datos de la petición
router.get('/query', examplesController.query);
//Nota: Los parámetros de ruta deben ser definidos en la misma ruta acompañados por un ':'
router.get('/params/:name', examplesController.params);
//Nota: Las peticiones GET no pueden tener body
router.post('/body', examplesController.body);

//Otros métodos, aunque los más usados son get y post
router.put('/putTest', examplesController.putTest)
router.delete('/deleteTest', examplesController.deleteTest)
//Existen más, pero no son muy comunes

//Enviar distintos códigos de estado
router.get('/esPar', examplesController.esPar);

module.exports = router;
