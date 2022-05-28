const notas = [
    {
        materia : "Educacion Fisica",
        nota : 9,
        creditos : 5  
    },
    {
        materia : "Matematicas",
        nota : 7,
        creditos : 6
    },
    {
        materia : "Programacion",
        nota : 8,
        creditos : 4
    }
];

const notasMaterias = [
    {
        curso : "Geografia",
        calificacion : 9,
        creditos : 3
    },
    {
        curso : "Historia de Venezuela",
        calificacion : 6,
        creditos : 2 
    },
    {
        curso : "Fisica",
        calificacion : 8,
        creditos : 5 
    },

];

let resultadoCreditoyNota;
const notesWithCredit = notas.map(function(elemento) { // el parametro que recibe esta funcion hace referencia a cada elemento de nuestro array
    resultadoCreditoyNota = elemento.nota * elemento.creditos; // aqui se va a hacer la multiplicacion de  la nota por los creditos
    return resultadoCreditoyNota;
})

let resulCaliNota;
const calificacionCreditos = notasMaterias.map(function(elementoLista) {
    resulCaliNota = elementoLista.calificacion * elementoLista.creditos
    return resulCaliNota;
})

const sumNotesWithCredit = notesWithCredit.reduce(function(valorAcumulado = 0,valorNuevo) {
    return valorAcumulado + valorNuevo;
})

const credits = notas.map(function(elementoLista){
    return elementoLista.creditos;
})

const sumCredits = credits.reduce(function(valorAcum = 0, valorNuevo){
    return valorAcum + valorNuevo;
})

const mediaPonderada = sumNotesWithCredit / sumCredits;