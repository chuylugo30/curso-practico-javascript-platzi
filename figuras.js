//Código de cuadrado
console.group("Cuadrados") // Nos permite agrupar un grupo de console.log

function perimetroDelCuadrado (lado) {
   return lado * 4;
} 

function areaCuadrado (lado) {
    return lado * lado;
} 

console.groupEnd(); // y este nos permite terminar esta agrupacion de console.log

// Código del triangulo
console.group("triangulo");

function perimetroTriangulo (ladoTriangulo1 ,ladoTriangulo2, baseTriangulo) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
 function areaTriangulo (ladoBase,alturaTriangulo) {
     return (ladoBase * alturaTriangulo) / 2
 }

 console.groupEnd();

 // Código del circulo
 console.group("Circulo");

 //Radio
 //const radioCirculo = 4; // le colocamos la medida que queramos

 function radioCirculo(radio) {
     return radio;
 }

 //console.log(`El radio del circulo es: ${radioCirculo}cm`);
 //Diametro
 //const diametroCirculo = radioCirculo * 2;
 function diametroCirculo (radio) {
     return radio * 2;
 }

 //Pi
 const pi = Math.PI;
 
 //Circunferencia(Perimetro)
 function perimetroCirculo (radio) {
   const diametro = diametroCirculo(radio); // se llama una función dentro de una variable
   return diametro * Math.PI;   
 }
 //Área del circulo
 function areaCirculo (radioCirculo) {
     return (radioCirculo * radioCirculo) * Math.PI;
 }
  console.groupEnd();
