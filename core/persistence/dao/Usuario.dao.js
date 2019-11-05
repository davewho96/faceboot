const VideojuegoModel = require("../schemas/Videojuego.schema");

module.exports.save = async function(videojuego){ 
    const newVideojuego = new VideojuegoModel(videojuego);
    const result = await newVideojuego.save();
    return result;

    // return new Promise((resolve, reject)=>{
    //     VideojuegoModel.save(videojuego, (err, result)=>{
    //         if(err){
    //             reject(err);
    //         }else{
    //             resolve(result);
    //         }
    //     });
    // });
}