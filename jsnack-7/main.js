// JSnack 7 oggetti :Crea 10 oggetti che rappresentano una zucchina. Dividi in due array separati le zucchine che misurano meno o più di 15cm.Infine stampa separatamente quanto pesano i due gruppi di zucchine

var ZucchinoRules = [
    {
        varieta : "Zucchino nero di Milano",
        peso : 500,
        lunghezza : 10
    },
    {
        varieta : "Zucchino ortolano di Faenza",
        peso : 300,
        lunghezza : 13
    },
    {
        varieta : "Zucchina lunga fiorentina",
        peso : 600,
        lunghezza : 16
    },
    {
        varieta : "Zucchino siciliano",
        peso : 700,
        lunghezza : 19
    },
    {
        varieta : "Zucchina striata di Napoli",
        peso : 200,
        lunghezza : 11
    },
    {
        varieta : "Zucchino romanesco",
        peso : 400,
        lunghezza : 17
    },
    {
        varieta : "Zucchina bianca triestina",
        peso : 800,
        lunghezza : 20
    },
    {
        varieta : "Zucchina rigata pugliese",
        peso : 250,
        lunghezza : 7
    },
    {
        varieta : "Zucchino tondo di Piacenza",
        peso : 100,
        lunghezza : 5
    },
    {
        varieta : "Zucchino tondo di Nizza",
        peso : 50,
        lunghezza : 4
    },
]


var zuccCorte = [];
var zuccLunghe = [];
var sumPesoCorte = 0;
var sumPesoLunghe = 0;

ZucchinoRules.forEach (function(item) {
    if (item.lunghezza > 15) {
        zuccLunghe.push(item);
    } else {
        zuccCorte.push(item);
    }
})

console.log(zuccCorte);
console.log(zuccLunghe);

zuccCorte.forEach(function(item){

    sumPesoCorte += item.peso;
})

zuccLunghe.forEach(function(item){

    sumPesoLunghe += item.peso;
})

console.log("Peso del gruppo di zucchine corte"+" "+sumPesoCorte);
console.log("Peso del gruppo di zucchine lunghe"+" "+sumPesoLunghe);
