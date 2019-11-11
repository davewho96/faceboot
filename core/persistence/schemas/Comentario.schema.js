const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const ComentarioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    texto: { type: String, required: true, maxlength: 1000 },
    autor: { type: String, required: true, maxlength: 50 },
},{timestamps: true});

module.exports = mongoose.model("Comentario", ComentarioSchema, "Comentarios");