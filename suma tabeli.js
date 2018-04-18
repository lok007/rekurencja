function suma(array){
	if (array.length ==1){return array[0]}
	else {
	return array.pop() + suma(array);
	} 
}
console.log(suma([1,4,6,8]))
