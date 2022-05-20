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

function perimetroTriangulo (lado1 ,lado2, ladoBse) {
    return (lado1 + lado2 + ladoBse);
}
 function areaTriangulo (ladoBase,alturaTriangulo) {
     return (ladoBase * alturaTriangulo) / 2
 }
 console.groupEnd();

 // Código del circulo
 console.group("Circulo");

 //Radio
 function radioCirculo(radio) {
     return radio;
 }
 //Diametro
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
  // Aquí interactuamos con el HTML

  function calcularPerimetroCuadrado () {
     const input = document.getElementById("ladoCuadrado");
     const inputValue = input.value; // Este value nos sirve para obtener el valor que escribieron los usuarios en el input
     const perimetro = perimetroDelCuadrado(inputValue); // dentro de una constante llamamos la funcion que calcula el perimetro de cuadrado y le pasamos como argumento el valor del input
     alert(perimetro);
  }

  function calcularAreaCuadrado () {
      const input = document.getElementById("ladoCuadrado");
      const inputValue = input.value;
      const area = areaCuadrado(inputValue);
      alert(area);  
  }

  function calcularPerimetroTriangulo () {
      const inputTriangulo1 = document.getElementById("ladoTriangulo1");
      const inputTriangulo2 = document.getElementById("ladoTriangulo2");
      const inputBase = document.getElementById("ladoBase");
      const inputValue1 = inputTriangulo1.value;
      const inputValue2 = inputTriangulo2.value;
      const inputValue3 = inputBase.value;
      const parseInput1 = parseInt(inputValue1);
      const parseInput2 = parseInt(inputValue2);
      const parseInput3 = parseInt(inputValue3);
      const perimetro = perimetroTriangulo(parseInput1,parseInput2,parseInput3);
      alert(perimetro);
  }

  function calcularAreaTriangulo () {
      const base = document.getElementById("valorBase");
      const altura = document.getElementById("valorAltura");
      const inputBase = base.value;
      const inputAltura = altura.value;
      const area = areaTriangulo(inputBase,inputAltura);
      alert(area);
  }

  function calcularPerimetroCirculo () {
      const valorCirculo = document.getElementById("valorCirculo");
      const inputCirculo = valorCirculo.value;
      const perimetro = perimetroCirculo(inputCirculo);
      alert(perimetro);
  }

  function calcularAreaCir() {
     const valorCirculo = document.getElementById("valorCirculo");
     const inputCirculo = valorCirculo.value;
     const area = areaCirculo(inputCirculo);
     alert(area);
  }