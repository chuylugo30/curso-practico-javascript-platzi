const lista1 = [1,1,2,2,2,3,2,4,2,3];

function calcularModa(lista) {
    const listaCount = {};

lista.map( // El método map va a generar un nuevo arreglo, y se le va ha pasar una funcion como argumento y dicha función recibe un parametro que hace referente a cada elemento de nuestro arreglo
    function (elemento) {
        if (listaCount[elemento]) { // en este if vamos a validad si este elemento que estamos recibiendo en cada iteracion es decir el que colocamos como parametro en la funcion ya existe como elemento dentro de nuestro objeto 
            listaCount[elemento] += 1; // Si encuentra lo que va a hacer es sumarle uno a este elemento que se encuentra dentro de mi objeto
        } else {
            listaCount[elemento] = 1 // Si no se encuentra lo que va a hacer es colocarle 1
        }
        
    }
);
console.log('Esto trae la listaCount',listaCount);
const lista1Array = Object.entries(listaCount).sort(
    function(valorAcumulado, nuevoValor) {
       return valorAcumulado[1] - nuevoValor[1]
});

console.log('Array de arrays',lista1Array);
const moda = lista1Array[lista1Array.length - 1]; // estamos obteniendo el valor que se encuentra en la ultima posicion de mi array, que se repite mas veces
console.log(moda); // Mi moda va a ser el elemento que mas se repita dentro de un array u objeto


}

