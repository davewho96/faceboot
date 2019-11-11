module.exports = {
    get MASCULINO(){ return "Masculino"; },
    get FEMENINO(){ return "Femenino"; },
    get NO(){ return "Prefiero no contestar"; },
    getAll(){
        return [ this.MASCULINO, this.FEMENINO, this.NO ];
    }
};