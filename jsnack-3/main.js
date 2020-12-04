// snack 3 oggetti: Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.Calcolare perimetro e area.(ripassiamo il Teorema di Pitagora ;D )

var triRett = {
    base : 10,
    altezza : 5
}

var ipotenusa = Math.sqrt(Math.pow(triRett.base , 2)+ Math.pow(triRett.altezza , 2));
console.log(ipotenusa);

var perimetro = ipotenusa + triRett.base + triRett.altezza;
console.log(perimetro);

var area = (triRett.base * triRett.altezza)/2;
console.log(area);
