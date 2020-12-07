//// JSnack 8 ////Scrivi una funzione che fonda due array (con lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall’altro es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

var arrUno = ["a","b","c"];
var arrDue = [1,2,3];
var arrTre = [];

function shuffle(arrA , arrB , arrC) {
    for (var i = 0; i < arrA.length; i++){
        arrC.push(arrA[i], arrB[i]);
    }
    return arrC;

}

var result = shuffle(arrUno,arrDue,arrTre);
console.log(result);
