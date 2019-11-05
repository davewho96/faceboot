const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const JugadorSchema = new Schema({
    nombre: { type: String, required: true, maxlength: 50 },
    correo: { type: String, required: true, maxlength: 100 },
    logrosDesbloqueados: { type: [{
        nombre: { type: String, required: true, maxlength: 50 },
        puntosAlpha: { type: Number, required: true, min: 0, max: 1000000 },
        createdAt: { type: Date, default: Date.now }
    }], required: false },
    videojuegos: { type: [{
        videojuego: { type: ObjectId, ref: "Videojuego" }
    }]},
    jugadoresAmigos: { type: [{
        jugador: { type: ObjectId, ref: "Jugador" }
    }]}
}, {timestamps: true});

module.exports = mongoose.model("Jugador", JugadorSchema, "jugadores");
