const db = require('../config/dbConfig');

class personajeModel {

    getPersonajes(callback){
        const sql = 'SELECT * FROM personajes';
        db.query(sql,callback);
    }

    getPersonajeById(id, callback){
        const sql = 'SELECT * FROM personajes WHERE id = ?';
        db.query(sql, [id], callback);
    }

    postPersonaje(nombreCompleto, edad, altura, peso, callback){
        const sql = 'insert into personajes(nombreCompleto, edad, altura, peso) values(?,?,?,?)';
        db.query(sql,[nombreCompleto, edad, altura, peso],(err,result)=>{
            if (err){
                return callback(err,null);
            }

            callback(null, result);
        })
    }

    putPersonaje(id, nombreCompleto, edad, altura, peso, callback){
        const sql = 'update personajes set nombreCompleto=?, edad=?, altura=?, peso=?';
        db.query(sql,[nombreCompleto, edad, altura, peso, id],callback);
    }

    deletePersonaje(id,callback){
        const sql = 'delete from personajes where id = ?';
        db.query(sql,[id],callback);
    }
}

module.exports = new personajeModel();