const mongoose = require("mongoose");
const User = require("./models/User");
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
             console.log("Conectado a la base de Datos!!!")

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
    postUsers(req, res){
        let users = req.body.users;
        User.create( users, (err, result)=>{
            if(err)throw err;
            res.send({newUser:result})
        })
    }

}

exports.controller = new Controller()