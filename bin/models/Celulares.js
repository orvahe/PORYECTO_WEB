const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CelularesSchema = new Schema(
    {
    id: String,
    nombre: String,
    precio: String,
    pantalla: String,
    marca: String,
    procesador: String,
    ram: String,
    almacenamiento: String,
    ditribuidor: String,
    bateria: String,



});
var Celulares = mongoose.model("Celularess", CelularesSchema);
module.exports = Celulares;