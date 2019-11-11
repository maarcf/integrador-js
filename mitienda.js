// Observaciones generales
// Excelente trabajo, todas las casuisticas posibles funcionan, bien considerados todos los casos de uso
// Muy buen uso de variables y nombres. 

const laTienda = `La comida es AM💛R`;
let budinChocoBanana = `🍫🍌 Budín vegano de chocolate y banana sin gluten`
let budinLimon = `🍋 Budín vegano de limón sin gluten`
let precioBudinChocoBanana = 100;
let precioBudinLimon = 75;
let codigoDescuento = "AMARCOMER";
let descuento = 25;
let cantidadBudinChocoBanana = "";
let cantidadBudinLimon = "";

let nombreCLiente = prompt(`Bienvenide a ${laTienda}

¿Podrías decirnos tus nombre?`);

alert(`¡Hola ${nombreCLiente}! 
En ${laTienda} encontrarás cosas ricas para la hora del mate y/o merienda.

    Nuestros productos son:
    😻 Libre de crueldad animal. 
    🤩 Libre de gluten.
    😺 Saludables.
    🥰 EXTREMADAMENTE RICOS, su principal ingredientes es AMOR.
    
    Tenemos en oferta: 
    1. ${budinChocoBanana}.
    2. ${budinLimon}.`);

    let respuestaBudinChocoBanana = prompt(`¿Quieres comprar ${budinChocoBanana}?`);
    respuestaBudinChocoBanana === "si" && (cantidadBudinChocoBanana = prompt("¿Cuántos budines deseas comprar?"));
    respuestaBudinChocoBanana === "no" && alert(`No deseas comprar ${budinChocoBanana}`)
    respuestaBudinChocoBanana !== "si" && (cantidadBudinChocoBanana = 0);

    let respuestaBudinLimon = prompt(`¿Quieres comprar ${budinLimon}?`);
    respuestaBudinLimon === "si" && (cantidadBudinLimon = prompt("¿Cuántos budines deseas comprar?"));
    respuestaBudinLimon === "no" && alert(`No deseas comprar ${budinLimon}`);
    respuestaBudinLimon !== "si" && (cantidadBudinLimon = 0);
    (respuestaBudinChocoBanana !== "si" && respuestaBudinLimon !== "si") && alert("Compra NO realizada")
    
// No es buena practica dejar console.log en el codigo, ya que corremos riesgo de que un usuario lo vea. 
// Se usan solo para prueba y luego se borran. 
    console.log(respuestaBudinChocoBanana);
    console.log(cantidadBudinChocoBanana);
    console.log(respuestaBudinLimon);
    console.log(cantidadBudinLimon);

    let sumaCantidadesChocoBanana = cantidadBudinChocoBanana * precioBudinChocoBanana;
    let sumaCantidadesLimon = cantidadBudinLimon * precioBudinLimon;
    let compraTotal = sumaCantidadesChocoBanana + sumaCantidadesLimon;
    

    let respuestaAbonarEnCredito = prompt(`¡Excelente elección, ${nombreCLiente}!
    Estas por comprar:
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    TOTAL: $${compraTotal} 
    
    💳 ¿Deseas abonar con tarjeta de crédito? 💳`);

    console.log(respuestaAbonarEnCredito);

    let respuestaCuantasCuotas = "";
    let respuestaCodigoPromocional = "";
    let respuestaCodigoPromocionalEnCuotas = "";
     

    respuestaAbonarEnCredito === "si" && (respuestaCuantasCuotas = prompt(`¿En cuántas cuotas desea abonar?`));

// Excelente acay a lo largo de todo el codigo que hayas ido considerando las distintas respuestas posibles del usuario

    respuestaAbonarEnCredito === "no" && (respuestaCodigoPromocional = prompt(`Ya casi estamos, ${nombreCLiente}.
    🛒 El detalle de la compra es: 
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    TOTAL: $${compraTotal} 
    
        ¿Contás con un código de descuento? 🏷️`));

    respuestaCuantasCuotas !== ""  && (respuestaCodigoPromocionalEnCuotas = prompt(`Ya casi estamos, ${nombreCLiente}.
    🛒 El detalle de la compra es: 
     - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
        
    TOTAL: $${compraTotal} 
        
    Vas a abonar en ${respuestaCuantasCuotas} cuotas de $${compraTotal / respuestaCuantasCuotas}.
        
    ¿Contás con un código de descuento? 🏷️`));

        
    console.log(respuestaAbonarEnCredito);
    console.log(respuestaCuantasCuotas);

    let respuestaNombreCodigoPromocional = "";
    
    respuestaCodigoPromocional === "si" && (respuestaNombreCodigoPromocional = prompt(`Por favor, ingrese el código`));
    respuestaCodigoPromocionalEnCuotas === "si" && (respuestaNombreCodigoPromocional = prompt(`Por favor, ingrese el código`));

// excelente esta validacion
    respuestaNombreCodigoPromocional === codigoDescuento && alert(`El código ingresado es CORRECTO.`);
    respuestaNombreCodigoPromocional === codigoDescuento || alert(`El código ingresado es INCORRECTO.`);

    respuestaAbonarEnCredito === "si" && respuestaNombreCodigoPromocional === codigoDescuento && alert(`${nombreCLiente} el detalle FINAL de la compra es: 
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    SUBTOTAL: $${compraTotal} 
    CODIGO DE DESCUENTO: -$${descuento}
    
    TOTAL: $${compraTotal - descuento}
    Vas a abonar en ${respuestaCuantasCuotas} cuotas de $${(compraTotal - descuento) / respuestaCuantasCuotas}`);

    respuestaAbonarEnCredito === "no" && respuestaNombreCodigoPromocional === codigoDescuento && alert(`${nombreCLiente} el detalle FINAL de la compra es: 
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    SUBTOTAL: $${compraTotal} 
    CODIGO DE DESCUENTO: -$${descuento}
    
    TOTAL: $${compraTotal - descuento}`);

    respuestaAbonarEnCredito === "si" && respuestaNombreCodigoPromocional !== codigoDescuento && alert(`${nombreCLiente} el detalle FINAL de la compra es: 
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    SUBTOTAL: $${compraTotal} 
    DESCUENTO: No Aplica
    
    TOTAL: $${compraTotal}
    Vas a abonar en ${respuestaCuantasCuotas} cuotas de $${compraTotal / respuestaCuantasCuotas}`);

    respuestaAbonarEnCredito === "no" && respuestaNombreCodigoPromocional !== codigoDescuento && alert(`${nombreCLiente} el detalle FINAL de la compra es: 
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    SUBTOTAL: $${compraTotal} 
    DESCUENTO: No Aplica
    
    TOTAL: $${compraTotal}`);

    alert(`¡Gracias por comprar en ${laTienda}, esperamos que disfrute de la comida!` );

    




    

    
