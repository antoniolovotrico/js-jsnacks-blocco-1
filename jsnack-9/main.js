//// JSnack 9 //// Scrivi una funzione che accetti tre argomenti:un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

var arrIniziale = [];
for (var i = 0; i < 10; i++) {
    var arrEle = Math.floor(Math.random() * (20 - 1)) + 1;
    arrIniziale.push(arrEle);    
} 
var b = Math.floor(Math.random() * (arrIniziale.length - 1)) + 1; 
var a = Math.floor(Math.random() * (b - 2)) + 1;


console.log(arrIniziale);
console.log(a);
console.log(b);
var arrFinale = [];

function arrCreation(arrDue,num1,num2){
    for (var j = num1; j < num2; j++){
        var arrFinal = Math.floor(Math.random() * (20 - 1)) + 1;
        arrDue.push(arrFinal);
    }
    return arrDue
}

var result = arrCreation(arrFinale,a,b);
console.log(result);