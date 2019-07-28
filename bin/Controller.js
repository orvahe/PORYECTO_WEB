const mongoose = require("mongoose");
const User = require("./models/User");
const Usuarios = require("./models/Usuarios");
const Gamas = require("./models/Gamas");
const Preferencias = require("./models/Preferencias");
const Pcs = require("./models/Pcs");
const Celulares = require("./models/Celulares");
class Controller{
    constructor(){
        this.connect();
    }

    async connect(){
         try{
             await mongoose.connect(
                 "mongodb+srv://orvahe10:3107462775(luz)@cluster0-qqaba.mongodb.net/OCUBIC_3DB?retryWrites=true&w=majority",
                 {useNewUrlParser:true}
             );
             console.log("Conectado a la base de Datos!!")

         } catch(e){
             console.error(e)
         }

         }
         getUsers(res){
             User.find({}, (err, users)=>{
                 if(err) throw err;

                 res.send( users);

             } )

    }

 getUsuarios(res){
             Usuarios.find({}, (err, usuarios)=>{
                 if(err) throw err;

                 res.send( usuarios);

             } )

    }

     getPcs(res){
             Pcs.find({}, (err, pcs)=>{
                 if(err) throw err;

                 res.send( pcs);

             } )

    }

     getCelulares(res){
            Celulares.find({}, (err, celulares)=>{
                 if(err) throw err;

                 res.send( celulares);

             } )

    }


     getGamas(res){
             Gamas.find({}, (err, gamas)=>{
                 if(err) throw err;

                 res.send( gamas);

             } )

    }

 getPreferencias(res){
             Preferencias.find({}, (err, preferencias)=>{
                 if(err) throw err;

                 res.send( preferencias);

             } )

    }

     getPcs(res){
             Pcs.find({}, (err, pcs)=>{
                 if(err) throw err;

                 res.send( pcs);

             } )

    }

    postUsers(req, res){
        let users = req.body.users;
        User.create( users, (err, result)=>{
            if(err)throw err;
            res.send({newUser:result})
        })
    }

postUsuarios(req, res){
        let usuarios = req.body.usuarios;
        Usuarios.create( usuarios, (err, result)=>{
            if(err)throw err;
            res.send({newUsuarios:result})
        })
    }

    postCelularess(req, res){
        let celulares = req.body.celulares;
        Celulares.create( celulares, (err, result)=>{
            if(err)throw err;
            res.send({newCelulares:result})
        })
    }

    postPcs(req, res){
        let pcs = req.body.pcs;
        Pcs.create( pcs, (err, result)=>{
            if(err)throw err;
            res.send({newPcs:result})
        })
    }

    postPreferencias(req, res){
        let preferencias = req.body.preferencias;
        Preferencias.create( preferencias, (err, result)=>{
            if(err)throw err;
            res.send({newPreferencias:result})
        })
    }

     postGamas(req, res){
        let gamas = req.body.gamas;
        Gamas.create( gamas, (err, result)=>{
            if(err)throw err;
            res.send({newGamas:result})
        })
    }

}

exports.controller = new Controller()