const express = require('express');
const router = express.Router();

const Empleados = require('../models/empleados');

router.get('/', async (req, res, next) => {
    const datos = await Empleados.find();
    console.log(datos);
    res.render('index', {datos});
});

router.post('/add', async (req, res) => {
    const datos = new Empleados(req.body);
    await datos.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const {id} = req.params;
    await Empleados.remove({_id: id});
    res.redirect('/');
});

router.get('/edit/:id', async(req, res) => {
    const {id}  = req.params;
    const datos = await Empleados.findById(id);
    var L = "";
    var M = "";
    var D = "";
    var O = "";
    for(i=0; i<datos.Intereses.length; i++){
        if(datos.Intereses[i] === 'Libros'){
            L = 'Libros';
        }if(datos.Intereses[i] === 'Musica'){
            M = 'Musica';
        }if(datos.Intereses[i] === 'Deportes'){
            D = 'Deportes';
        }if(datos.Intereses[i] === 'Otros'){
            O = 'Otros';
        }
    }
    console.log(L, M, D, O);
    res.render('edit', {datos, L, M , D, O});
});

router.post('/edit/:id', async(req, res) => {
    const {id} = req.params;
    console.log(id);
    await Empleados.update({_id: id}, req.body);
    res.redirect('/');
});

module.exports = router;