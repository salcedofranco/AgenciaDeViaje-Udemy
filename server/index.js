//Configuracion de servidor, 

const express = require('express');//importo express
const path = require('path');//carpeta acceso
const bodyParser = require('body-parser');
const routes = require('./routes');//importo rutas

const configs = require('./config');

require('dotenv').config({ path: 'variables.env' })

//db.authenticate()
//.then(() => console.log('DB conectada'))
//.catch(error => console.log(error));

//configurar express
const app = express();


//habilitar pug
app.set('view engine', 'pug');

//Añadir vistas
app.set('views', path.join(__dirname, './views') );

//cargamos carpeta estatica public
app.use(express.static('public'));

//validar si estamos en desarrollo o produccion
const config = configs[app.get('env')];

//creamos la variable para sitio web
app.locals.titulo = config.nombresitio;



//muestra fecha y genera la ruta donde nos posicionamos - Variable que a template
app.use((req, res, next) => {
//crear una fecha
const fecha = new Date();
res.locals.fechaActual = fecha.getFullYear();
res.locals.ruta = req.path;
return next();
});


//ejecutamos bodyparser
app.use(bodyParser.urlencoded({extended: true}));

//.use responde a todos los verbos http
app.use('/', routes());

/** Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () => {
    console.log('El servidor esta funcionando')
});

