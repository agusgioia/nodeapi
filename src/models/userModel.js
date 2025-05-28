const db = require('../config/dbConfig');

class userModel{

    getUsers(callback){
        const sql = 'SELECT * FROM usuarios';
        db.query(sql,callback);
    }

    getUserById(id,callback){
        const sql = 'SELECT * FROM usuarios where id = ?';
        db.query(sql,[id],callback);
    }

    postUser(nombreCompleto, edad, genero, dni,callback){
        const sql = 'insert into usuarios(nombreCompleto, edad, genero, dni) values(?,?,?,?)';
        db.query(sql,[nombreCompleto, edad, genero, dni],(err,result)=>{
            if (err){
                return callback(err,null);
            }

            callback(null, result);
        })
    }

    putUser(id, nombreCompleto, edad, genero, dni, callback){
        const sql = 'update usuarios set nombreCompleto=?, edad=?, genero=?, dni=?';
        db.query(sql,[nombreCompleto, edad, genero, dni, id],callback);
    }

    deleteUser(id,callback){
        const sql = 'delete from usuarios where id = ?';
        db.query(sql,[id],callback);
    }

}

module.exports = new userModel();