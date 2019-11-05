const express = require("express");
const morgan = require("morgan");
const loger = require("./utils/logger");
const app = express();
const tokenMiddleware = require("./middlewares/tokens")
const middlewares = require("./middlewares/middlewares");
require("./core/persistence/connection/connection");

//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(morgan("dev"));
app.use(express.json());
app.use(middlewares.tokenMiddleware);
//ROUTES
app.use("/",require("./router/router"));

//STAR SERVER
app.listen(app.get("port"), () => {
    loger.info(`Server running at ${app.get("port")}`);
})

const token = tokenMiddleware.generateToken({
_id:"jojoddafjasdfi",
name:"dave" 
});
console.log(token);

// const token2 = "ewenoooo";

// try {
//     const tokenDecoded = tokenMiddleware.validateToken(token);
//     console.log(tokenDecoded);
// } catch (err) {
//     console.error(err);
// }