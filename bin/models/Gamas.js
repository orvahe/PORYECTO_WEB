const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GamasSchema = new Schema({
    nickname: String,
    password: String,
    picture: String

});
var Gamas = mongoose.model("Gamas", GamasSchema);
module.exports = Gamas;
