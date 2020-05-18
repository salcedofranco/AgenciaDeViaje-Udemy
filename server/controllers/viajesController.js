const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req, res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes', {
        pagina: 'Proximos viajes',//variable desde routes a template
        viajes 
    });
    
}

exports.mostrarViaje = async (req, res) => {
    const viaje = await Viaje.findByPk(req.params.id)//Con Sequelize v5, findById fue reemplazado por findByPk ()
        res.render('viaje', {
            viaje
        });   
}