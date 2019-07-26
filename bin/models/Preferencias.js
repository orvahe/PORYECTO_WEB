const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PreferenciasSchema = new Schema(
    {
    por_pantalla: String,
    bateria: String

});
var Preferencias = mongoose.model("Preferencias", PreferenciasSchema);
module.exports = Preferencias;