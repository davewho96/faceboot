const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const UsuarioSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    nombre: { type: String, required: true, maxlength: 50 },
    edad: { type: Number, required: true, maxlength: 3 },
    sexo: { type: String, enum : ['Masculino','Femenino', 'Prefiero no contestar'], default: 'Masculino' },
    fechaNacimiento:{type: Date, required:true},
    generosMusicales: { type: String, enum : 
        ['Pop','Rock And Roll', 'Musica Clasica', 'Heavy Metal'], default: 'Heavy Metal' },
    pelicluasFavoritas: { type: String, required: true, maxlength: 200 },
}, {timestamps: true});

module.exports = mongoose.model("Usuario", UsuarioSchema, "Usuarios");
