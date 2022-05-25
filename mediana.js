const lista = [
    100,
    200,
    400,
    300000,
    5000000
];

const mitadLista1 = parseInt(lista.length / 2); // El parseInt coerciona cualquier tipo de valor a entero, ojo en este caso la longitud del array dividida entre 2 daba 2.5 y lo paso a 2
let mediana;
console.log(mitadLista1);

function esPar(numerito) {

    if (numerito % 2 === 0) {
        console.log("es par");
        return numerito;
    } else {
        console.log("es impar");
        mediana = mitadLista1;
        return mediana;
    }
}

 