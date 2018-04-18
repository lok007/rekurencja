function fibanaci(a){
  if (a==1){return [0, 1];}
	else{
		var tab = fibanaci(a-1);
		tab.push(tab[tab.length-1] + tab[tab.length-2]);
		return tab;
	}
}
console.log(fibanaci(7))