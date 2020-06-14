const express = require(`express`);
const router = express.Router();

const moduloMensajes = require(`./../../services/messages`);

router.use(express.json());

router.route(`/`)
    .get((req, res)=>{
        res.status(200).send(moduloMensajes.cargarMensaje());
    })
    .post((req, res)=>{
        const mensaje ={
            id: moduloMensajes.longitudMensaje(),
            content: req.body.content,
            date: Date().toString(),
            userId: req.body.userId
        };
        moduloMensajes.nuevoMensaje(mensaje);
        res.status(200).send(`El mensaje ha sido creado`);
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