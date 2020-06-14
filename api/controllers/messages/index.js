const express = require(`express`);
const router = express.Router();

const mensajes = require(`./../../services/messages`);

router.use(express.json());

router.route(`/`)
    .get((req, res)=>{
        res.send(mensajes.cargarMensaje());
    })
    .post((req, res)=>{
        const mensaje ={
            id: mensajes.longitudMensaje(),
            content: req.body.content,
            date: Date.now(),
            userId: req.body.userId
        };
        mensajes.nuevoMensaje(mensaje);
        res.send(`El menaje ha sido creado`);
    });

router.route(`/:id`)
    .get((req, res)=>{
        res.send(`Página del mensaje ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar Mensaje ${req.params.id}`);
    })
    .put((req, res)=>{
        res.send(`Actualizar Mensaje ${req.params.id}`)});


module.exports = router;