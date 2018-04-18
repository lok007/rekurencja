function even(a){
	if(a<0){a = Math.abs(a)}
	if(a==0){return console.log(true)}
	if(a==1){return console.log(false)}
	else { return even(a-2)}
}
even(10);