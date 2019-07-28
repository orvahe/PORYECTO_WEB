const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UsuariosSchema = new Schema({
    nickname: String,
    password: String,
    picture: String

});
var Usuarios = mongoose.model("Usuarios", UsuariosSchema);
module.exports = Usuarios;
