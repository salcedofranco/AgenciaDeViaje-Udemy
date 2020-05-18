const express = require('express');
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');


//controladores
const nosotrosController = require('../controllers/nosotrosController');
const homeController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');

//Aca utilizamos cualquier verbo http y en index del server lo tomamos con .use
module.exports = function() {
    
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesController.mostrarViajes);
    router.get('/viajes/:id', viajesController.mostrarViaje);
    //variable desde routes a template
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

//metodo post. llenar formulario(agrego datos)Y LEER
    router.post('/testimoniales', testimonialesController.agregarTestimonial);


    return router;
}