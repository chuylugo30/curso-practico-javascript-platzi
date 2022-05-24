var coupons = [15,20,40];
var cupones = ["Navidad", "Descuentazo", "Reyes"];
var nuevosCupones = [
    {
        nombre : "Dia de las madres",
        descuento : 35
    },
    {
        nombre : "Paga la mitad",
        descuento : 50
    },
    {
        nombre : "Ahorro",
        descuento : 20
    }
]

function calcularPrecioConDescuento (precio,descuento) { // Funcion declarativa
    console.log(precio);
    console.log(descuento);
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100
    return precioConDescuento;
}
// función de flecha guardada en una constante, o funcion expresiva
const calculatePriceDiscount = () => {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value; // con el value obtenemos el valor que guardó el input
    const inputDiscount = document.getElementById("inputDiscount");
    const discou = inputDiscount.value;
    console.log(inputPrice,inputDiscount);
    const discount = calcularPrecioConDescuento(price, discou);
    console.log("Este es el descuento",discount);
    const resultP = document.getElementById("priceResult");
    resultP.innerHTML = "El precio con descuento es de $"+ discount // El innerHTML es un atributo que nos permite poder escribir algo en nuestro HTML desde el javascript
}

function precioDescuentoCupon () {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;
   // const convertValue = parseInt(couponValue);
    console.log("Esto trae coupong--> ",typeof couponValue);
    
    if (!cupones.includes(couponValue)) {  // aqui estamos utilizando la función includes para verificar si el array incluye cierto elemento y ademas lo tenemos dentro de una validacion
         alert(`El cupón ${couponValue} no es válido`);
    } else {

     let descuentoC;
     switch(couponValue) {
        
        case cupones[0] : descuentoC = 15;
        console.log("Entró a este caso",descuentoC);
        break;

        case cupones[1] : descuentoC = 20;
        console.log("Entró a este caso",descuentoC);
        break;

        case cupones[2] : descuentoC = 40;
        console.log("Entró a este caso",descuentoC);
        break;
    }

    const calcularPrecio = calcularPrecioConDescuento(price,descuentoC);
    console.log("hola", descuentoC);
    const resultP = document.getElementById("priceResult");
    resultP.innerHTML = `El precio con
     cupon de descuento
      es de: ${calcularPrecio}` 
    }
}

function calculaPrecioConMiCupon () {
    const inputPrice = document.getElementById("inputPrice");
    const price = inputPrice.value;
    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    const isUserCouponValueValid = function(coupon) { // Aqui en esta función que esta dentro de una constante se le pasa un parametro que va a hacer referencia a nuestro array, y luego va a retornar el 1er elemento que cumpla con la condición hecha
        return coupon.nombre === couponValue;
    }

    const findCoupon = nuevosCupones.find(isUserCouponValueValid); // Con este método find buscamos dentro de nuestro array de objetos la propiedad o cupon que escribe el usuario

    if (!findCoupon) {
        alert(`El cupón ${couponValue} no es valido`)
    } else {
        const discountCoupon = findCoupon.descuento
        const precioDescuento = calcularPrecioConDescuento(price,discountCoupon);
        const inputResult = document.getElementById("priceResult");
        inputResult.innerHTML = `El descuento de tu producto es : ${precioDescuento}`
    }

}
//console.log(precioConDescuento);
/*console.log({ // En este log colocamos un objeto donde metimos todos los atributos que queremos ver, y se van a imprimir dentro de un objeto ojo
    precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
});*/