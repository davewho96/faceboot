const express = require('express');
const router=express.Router();

const UsuarioController= require("../core/controllers/Usuario.controller");

router.get("/getUsuario", UsuarioController.get);

router.get("/getUsuarioID/:id", UsuarioController.getId);

router.post("/usuario", UsuarioController.save);

router.put("/updateUsuario/:id", UsuarioController.put);

router.delete("/deleteUsuario/:id", UsuarioController.delete);

module.exports = router;