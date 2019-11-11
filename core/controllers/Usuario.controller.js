const UsuariosDAO = require("../persistence/dao/Usuario.dao");

module.exports.save = async function(request, response){
    const usuario = request.body;
    try{
        const result = await UsuariosDAO.save(usuario);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error creando usuario");
    }
    
    // VideojuegosDAO.save(videojuego).then(result=>{
    //     response.status(201).json("Videojuego creado");
    // }).catch(err => {
    //     response.status(500).json("Error creando videojuego");
    // });
}