function sqrt(a,b){
	if (a<b){return 0}
	else if (a%b==0){
		return 1 + sqrt(a/b,b);
	}
	else return b + " nie jest wykladnikiem potegi liczy: " + a
}

console.log(sqrt(125,5));