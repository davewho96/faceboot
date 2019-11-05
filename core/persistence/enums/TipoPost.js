module.exports = {
    get EA(){ return "ea"; },
    get SQUARE(){ return "square"; },
    get BUNGIE(){ return "bungie"; },
    getAll(){
        return [ this.EA, this.SQUARE, this.BUNGIE ];
    }
};