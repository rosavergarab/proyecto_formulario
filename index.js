//declaración de los modulos a utilizar
const express = require('express');

const app = express();

//llamado a carpetas
const config = require('./config');
const api = require(`./api`);


app.use(express.json());
app.use(`/api`, api);
app.use(express.static(`./public`));


app.listen(config.port, ()=> {
    console.log(`Servidor iniciado`);
});