const listaNumeros = [
    100,
    200,
    400,
    300000,
    5000000
];

const listaDesordenada = [
    2,4,9,1,8,5
];

const listaOrdenada = listaDesordenada.sort(function(a,b){return a - b}) // Sin embargo cuando utilizamos un sort para ordenar un array de numbers se necesita crear una función que ayude ha generar el orden de la clasificacion de los elementos

const jugadores = ['Ronaldo','messi','kaka','Arbeola','Mbappe','Bebeto','Cesh Fabregas','Neymar'];
const listaOrdenada = jugadores.sort(); // este método nos permite ordenar nuestro elementos dentro de array de forma ascendente

function calcularMediaAritmetica (lista) {
   
   const sumaLista = lista.reduce(function(valorAcumulado = 0,valorActual){
       return valorAcumulado + valorActual;
   });
  
   const promedioLista = sumaLista / lista.length;
   console.log(lista.length);
  
   return promedioLista;
  }

const mitadLista1 = parseInt(listaNumeros.length / 2); // El parseInt coerciona cualquier tipo de valor a entero, ojo en este caso la longitud del array dividida entre 2 daba 2.5 y lo paso a 2
console.log(mitadLista1);

function esPar(numerito) { // en esta función estamos validando que el parametro que recibe esa funcion osea el arreglo sea par o impar

    if (numerito % 2 === 0) {
        console.log("es par");
        return true;
    } else {
        console.log("es impar");
        return false;
    }
}
 let mediana;

  function calcularMediana(listaNumeros) {
    if (esPar(listaNumeros.length)) {
        console.log("Entró al par");
        const elemento1 = listaNumeros[mitadLista1 - 1]; // aqui estamos buscando el elemento de mi array anterior al de la mitad porque le estoy colocando el - 1
        const elemento2 = listaNumeros[mitadLista1];
        console.log(elemento1);
        console.log(elemento2);
        const promedio = calcularMediaAritmetica([elemento1,elemento2]);
        mediana = promedio;
        console.log(mediana);
    } else {
        console.log("Entró al impar");
       mediana = listaNumeros[mitadLista1];
       console.log(mediana);
    }

  }