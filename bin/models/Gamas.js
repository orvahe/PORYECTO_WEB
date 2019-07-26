const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamasSchema = new Schema(
    {
    velocidad_procesador: String,
    tipo_pantalla: String,
    tipo_de_procesador: String

});
var Gamas = mongoose.model("Gamas", GamasSchema);
module.exports = Gamas;
