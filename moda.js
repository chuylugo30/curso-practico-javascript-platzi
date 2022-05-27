const lista1 = [1,1,1,4,4,5,3,2,6,7,8,9,8,8,4,2,3];

const listaCount = {};

lista1.map( // El método map va a generar un nuevo arreglo, y se le va ha pasar una funcion como argumento y dicha función recibe un parametro que hace referente a cada elemento de nuestro arreglo
    function (elemento) {
        if (listaCount[elemento]) { // en este if vamos a validad si este elemento que estamos recibiendo en cada iteracion es decir el que colocamos como parametro en la funcion ya existe como elemento dentro de nuestro objeto 
            listaCount[elemento] += 1; // Si encuentra lo que va a hacer es sumarle uno a este elemento que se encuentra dentro de mi objeto
        } else {
            listaCount[elemento] = 1 // Si no se encuentra lo que va a hacer es colocarle 1
        }
        
    }
);