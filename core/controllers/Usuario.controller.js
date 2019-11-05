const VideojuegosDAO = require("../persistence/dao/Videojuegos.dao");

module.exports.save = async function(request, response){
    const videojuego = request.body;
    try{
        const result = await VideojuegosDAO.save(videojuego);
        response.status(201).json(result);
    }catch(err){
        response.status(500).json("Error creando videojuego");
    }
    
    // VideojuegosDAO.save(videojuego).then(result=>{
    //     response.status(201).json("Videojuego creado");
    // }).catch(err => {
    //     response.status(500).json("Error creando videojuego");
    // });
}