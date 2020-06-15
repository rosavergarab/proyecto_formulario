const express = require(`express`);
const router = express.Router();

const moduloContacto = require(`./../../services/contact`);
const dateUtilities = require(`../../utilities/date`);

router.use(express.json());

router.route(`/`)
    .get((req, res)=>{
        res.status(200).send(moduloContacto.cargarContacto());
    })
    .post((req, res)=>{
        const contacto ={
            id: moduloContacto.longitudContacto(),
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            country: req.body.country,
            content: req.body.content,
            date: dateUtilities.obtenerFecha(),
            userId: req.body.userId
        };
        moduloContacto.nuevoContacto(contacto);
        res.status(200).send({message:`El contacto ha sido creado`});
    });

router.route(`/:id`)
    .get((req, res)=>{
        res.send(`Página del contacto ${req.params.id}`);
    })
    .delete((req, res)=>{
        res.send(`Eliminar contacto ${req.params.id}`);
    })
    .put((req, res)=>{
        res.send(`Actualizar contacto ${req.params.id}`)});


module.exports = router;