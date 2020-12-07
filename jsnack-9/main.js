//// JSnack 8 //// Scrivi una funzione che accetti tre argomenti:un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo quanto il numero di elementi dell’array).La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra “a” e “b”

var arrUno = [];
for (var i = 0; i < 10; i++) {
    var arrEle = Math.floor(Math.random() * (20 - 1)) + 1;
    arrUno.push(arrEle);    
} 
var b = Math.floor(Math.random() * (arrUno.length - 1)) + 1; 
var a = Math.floor(Math.random() * (b - 1)) + 1;


console.log(arrUno);
console.log(a);
console.log(b);
var arrDue = [];
for (var j = a; j < b; j++){
    var arrFinal = Math.floor(Math.random() * (20 - 1)) + 1;
    arrDue.push(arrFinal);
}

console.log(arrDue);


function arrCreation(arrUno,a,b){

    
        
    
    
}

// arrCreation(arrUno,a,b);