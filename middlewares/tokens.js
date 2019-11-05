const jwt = require("jsonwebtoken");
const secretPhrase = "69ElZerihSeLaCome420";

exports.generateToken = function(user){
    return jwt.sign(user, secretPhrase, {expiresIn: "5m"});
}

exports.validateToken = async function(token){
    const result = await  jwt.verify(token, secretPhrase);
    return result;
}

// exports.validateToken = function(token){
//     return new Promise((resolve, reject)=>{
//         jwt.verify(token, secretPhrase, (err, decoded)=>{
//             if(err){
//                 reject('Token invalid');
//             }else{
//                 resolve();
//             }
//         });
//     });
// }