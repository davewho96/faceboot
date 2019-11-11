const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const PostSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    mensaje: { type: String, required: true, maxlength: 50 },
    tipo: { type: String, enum : ['Publico','Privado'], default: 'Publico' },
    tags: {type: String}
}, {timestamps: true});

module.exports = mongoose.model("Post", PostSchema, "Posts");