const personajeModel = require('../models/userModel');

function getUsers(req, res) {
    personajeModel.getUsers((err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.status(200).json({ data: results });
    });
}

function getUserById(req, res) {
    const { id } = req.params;
    personajeModel.getUserById(id, (err, results) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        if (results.length === 0) {
            res.status(404).json({ error: 'Usuario no encontrado' });
            return;
        }
        res.status(200).json({ data: results });
    });
}

function postUser(req,res){
    const {nombreCompleto, edad, genero, dni} = req.body;
    personajeModel.postUser(nombreCompleto, edad, genero, dni, (err,result)=>{
        if (err){
            console.error("Error al insertar en la BDD:", err);
            res.status(500).json({err:err.message});
            return;
        }
        res.status(201).json({
            message:'Usuario creado',
            data:{
                id:result.insertId,
                nombreCompleto,
                edad,
                genero,
                dni
            }});
    });
}

function putUser(req,res){
    const {id} = req.params;
    const {nombreCompleto, edad, genero, dni} = req.body;
    personajeModel.putUser(id,nombreCompleto, edad, genero, dni, (err,result)=>{
        if (err){
            res.status(500).json({err:err.message});
            return;
        }
        if (result.affectedRows===0){
            res.status(404).json({message:'Usuario no encontrado'})
        }
        res.status(200).json({message:'Usuario actualizado'});
    });
}

function deleteUser(req,res){

    const {id} = req.params;
    personajeModel.deleteUser(id, (err, result) =>{
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
    getUsers,
    getUserById,
    postUser,
    putUser,
    deleteUser
};