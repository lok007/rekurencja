Najwiekszy wspólny dzielnik (bez rekurencji) :

function dzielniki(a,b){
	var tabelaa = [];
	var tabelab = [];
	var tabelaWsp = [];
	if (a<=0 || b<=0){console.log("Podaj wartości dodatnie")}
	for (i=1; i<a; i++){
		if (a%i == 0) { tabelaa.push(i)}
	}
	for (i=1; i<b; i++){
		if (b%i == 0) { tabelab.push(i)}
	}
	
		for (j=0; j<tabelab.length-1; j++){
			if(tabelaa.indexOf(tabelab[j]) != -1){ tabelaWsp.push(tabelaa[j]) }
    }
	console.log("dzielniki a: ");
	console.log(tabelaa);
	console.log("dzielniki b: ");
	console.log(tabelab);
	console.log("wspólne dzielniki: ");
	console.log(tabelaWsp)
	console.log(tabelaWsp[tabelaWsp.length-1])
}
dzielniki(12,22);

Najwiekszy wspólny dzielnik (z rekurencją) :

var gcd = function(a, b) {
    if ( ! b) {
        return a;
    }

    return gcd(b, a % b);  //metoda Euklidesa
};
console.log(gcd(2154, 458));