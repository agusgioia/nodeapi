const personajeModel = require('../models/personajeModel');

function getPersonajes(req, res) {
    personajeModel.getPersonajes((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: results });
    });
}

function getPersonajeById(req, res) {
    const { id } = req.params;
    personajeModel.getPersonajeById(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Personaje no encontrado' });
            return;
        }
        res.status(200).json({ data: results });
    });
}

function postPersonaje(req,res){
    const {nombreCompleto, edad, altura, peso} = req.body;
    personajeModel.postPersonaje(nombreCompleto, edad, altura, peso, (err,result)=>{
        if (err){
            res.status(500).json({err:err.message});
            return;
        }
        res.status(201).json({
            message:'personaje creado',
            data:{
                id:result.insertId,
                nombreCompleto,
                edad,
                altura,
                peso
            }});
    });
}

function putPersonaje(req,res){
    const {id} = req.params;
    const {nombreCompleto, edad, altura, peso} = req.body;
    personajeModel.putPersonaje(id,nombreCompleto, edad, altura, peso, (err,result)=>{
        if (err){
            res.status(500).json({err:err.message});
            return;
        }
        if (result.affectedRows===0){
            res.status(404).json({message:'Personaje no encontrado'})
        }
        res.status(200).json({message:'personaje actualizado'});
    });
}

function deletePersonaje(req,res){

    const {id} = req.params;
    personajeModel.deletePersonaje(id, (err, result) =>{
        if (err){
            res.status(500).json({error: err.message});
            return;
        }
        if (result.affectedRows===0){
            res.status(404).json({message:'Personaje no encontrado'});
            return;
        }
        res.status(200).json({message:'personaje eliminado'});
    })
}

// Exporta las funciones directamente
module.exports = {
    getPersonajes,
    getPersonajeById,
    postPersonaje,
    putPersonaje,
    deletePersonaje
};