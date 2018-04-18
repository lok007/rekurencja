var tabela = []
function range(a,b){
	if (a<b-1){
		tabela.push(a+1);
		return range(a+1,b);
	}
	if (a-1>b){
		tabela.push(a-1);
		return range(a-1,b);
	} return tabela;
}

console.log(range(15,10));