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
             console.log("Conectados a la base de datos")

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
}

exports.controller = new Controller()