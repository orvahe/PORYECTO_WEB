const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PcsSchema = new Schema(
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
var Pcs = mongoose.model("Pcs", PcsSchema);
module.exports = Pcs;