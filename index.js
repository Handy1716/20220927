let lista = [];

class Zene{
    nev;
    idotartam;
    constructor(nev, idotartam) {
        this.nev=nev;
        this.idotartam = idotartam;
    }
    get nev() {
        return this.nev;
    }
    get idotartam() {
        return this.idotartam;
    }
    set nev(nev){
            this._nev=nev;
    }
    set idotartam(idotartam){
        this._idotartam=idotartam;
    }

}

let szamlalo = parseInt("0");
function gombKattintas(){
    let zene = new Zene(document.getElementById("zenenev").value,document.getElementById("hossz").value);
    lista.push(zene)
    console.log(lista[0]);
    szamlalo+=parseInt(document.getElementById("hossz").value);
    document.getElementById("asd").textContent = szamlalo;
    document.getElementById("zenenev").value="";
    document.getElementById("hossz").value="";
}

document.getElementById('gomb').addEventListener('click', gombKattintas);
