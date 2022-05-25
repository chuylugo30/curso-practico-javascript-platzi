const lista1 = [200,400,100,500];

function calcularMediaAritmetica (lista) {
  /*let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  }
  */
 //console.log("La suma de mis elementos del array es:", sumaLista);

 const sumaLista = lista.reduce(function(valorAcumulado = 0,valorActual){
     return valorAcumulado + valorActual;
 });

 const promedioLista = sumaLista / lista1.length;

 return promedioLista;
}