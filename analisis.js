const salariosMex = mexico.map(function(persona){ // recordemos que el map itera(recorre) sobre cada elemento de mi array ojo
    return persona.salary;
});

const salariosMexSorted = salariosMex.sort(function(a,b){
    return a - b; // si a es mas grande que b devuelve 1 , si a y b son iguales devuelve 0, y si b es mas grande que a devuelve un nuevo negativo
});

function esParMiArray(numero) {
    /*if (numero % 2 === 0) { // si el residuo de la division por 2 es cero ? va a ser par : es impar
        console.log("es par");
        return true
    } else {
        console.log("es false");
        return false
    }*/ 
    // esto lo vamos a simplificar por eso

    return (numero % 2 === 0); // recordemos que un if por defecto devuelve true si se cumple la condicion y si no falso.
}
function calcularMediaAritmetica (lista) {
    console.log(lista);
    /*let sumaLista = 0;
  
    for (let i = 0; i < lista.length; i++) {
      sumaLista = sumaLista + lista[i];
    }
    */
   //console.log("La suma de mis elementos del array es:", sumaLista);
  
   const sumaLista = lista.reduce(function(valorAcumulado = 0,valorActual){ // el metodo reduce suma o resta los elementos de mi array
       return valorAcumulado + valorActual;
   });
  
   const promedioLista = sumaLista / lista.length;
  
   return promedioLista;
  }

function calcularMedianaSalario (lista) {
    const mitad = parseInt(lista.length / 2); // tenemos la mitad de la lista

    if (esParMiArray(lista.length)) {
        console.log("Es par");
        const listaPar1 = lista[mitad - 1];
        const listaPar2 = lista[mitad];
        console.log(listaPar1);
        console.log(listaPar2);
        const mediana = calcularMediaAritmetica([listaPar1,listaPar2]);
        return mediana;
        
    } else {
        console.log("es impar");
        const personitaMitad = lista[mitad];
        return personitaMitad
    }
}

console.log("mi mediana salario es --> ",calcularMedianaSalario(salariosMexSorted));