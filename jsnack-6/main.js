// jsnack 6 oggetti :  Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)

// var daGirare = "argomento";

// function rigira(stringa) {
//     var splitta = stringa.split("");
//     console.log(splitta.length); 
//     var reverse = "";
//     for (var i = splitta.length - 1; i >= 0; i--) {
//         reverse += splitta[i];    
//     }
//     console.log(reverse);
// }

// rigira(daGirare);



// stesso codice ma con arrow function




const daGirare = "argomento";

const reverse = (stringa) => {
    const splitta = stringa.split("");
    console.log(splitta.length);
    let reverse ="";
    for (let i = splitta.length - 1; i >= 0; i--) {
        reverse += splitta[i];
    }
    return reverse
}

const result = reverse(daGirare);
console.log(result);