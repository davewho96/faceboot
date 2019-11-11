const UsuarioModel = require("../schemas/Usuario.schema");

module.exports.save = async function(usuario){ 
    const newUsuario = new UsuarioModel(usuario);
    const result = await newUsuario.save();
    return result;
}
module.exports.get = async function(usuario){ 
    const Usuario = new UsuarioModel(usuario);
    const result = await Usuario.find();
    return result;
}
module.exports.update = async function(usuario){ 
    const Usuario = new UsuarioModel(usuario);
    const result = await Usuario.findOne({_id:usuario._id});
    if(!productoGuardado){
        reject('No se encontro');
     }else{
         usuarioGuardado.nombre = usuario.nombre;
         usuarioGuardado.edad = usuario.edad;
         usuarioGuardado.sexo = usuario.sexo;
         usuarioGuardado.fechaNacimiento = usuario.fechaNacimiento;
         usuarioGuardado.generosMusicales = usuario.generosMusicales;
         usuarioGuardado.peliculasFavoritas = usuario.peliculasFavoritas;
         
         usuarioGuardado.save((error, result)=>{
             if(error){
                 reject("trono:"+ error);
             }else{
                 resolve(result);
             }
         });
}
    return result;
}
// module.exports.updateUsuario = function(usuario){
//     return new Promise((resolve, reject)=>{
//         Usuarios.findOne({_id:usuario._id},(error, usuarioGuardado)=>{
            
//             if(error){
//                 reject("Tronó: " + error);
//             }else if(!productoGuardado){
//                reject('No se encontro');
//             }else{
//                 usuarioGuardado.nombre = usuario.nombre;
//                 usuarioGuardado.edad = usuario.edad;
//                 usuarioGuardado.sexo = usuario.sexo;
//                 usuarioGuardado.fechaNacimiento = usuario.fechaNacimiento;
//                 usuarioGuardado.generosMusicales = usuario.generosMusicales;
//                 usuarioGuardado.peliculasFavoritas = usuario.peliculasFavoritas;
                
//                 usuarioGuardado.save((error, result)=>{
//                     if(error){
//                         reject("trono:"+ error);
//                     }else{
//                         resolve(result);
//                     }
//                 });
//     }
//     });
// });
// }
// module.exports.getProductos = function(){
//     return new Promise((resolve, reject) => {
//         Productos.find({}, (error, result)=>{
//             if(error){
//                 reject("Trono: " + error);
//             }else{
//                 resolve(result);
//             }
//         });
//     });
// }
    // return new Promise((resolve, reject)=>{
    //     VideojuegoModel.save(videojuego, (err, result)=>{
    //         if(err){
    //             reject(err);
    //         }else{
    //             resolve(result);
    //         }
    //     });
    // });
