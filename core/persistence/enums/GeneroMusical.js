module.exports = {
    get C(){ return "C"; },
    get E(){ return "E"; },
    get E10(){ return "E10"; },
    get T(){ return "T"; },
    get M(){ return "M"; },
    get A(){ return "A"; },
    get RP(){ return "RP"; },
    getAll(){
        return [this.C, this.E, this.E10, this.T, 
            this.M, this.A, this.RP];
    }
};