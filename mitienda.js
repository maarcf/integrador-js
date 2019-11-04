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

    console.log(respuestaBudinChocoBanana);
    console.log(cantidadBudinChocoBanana);
    console.log(respuestaBudinLimon);
    console.log(cantidadBudinLimon);

    let sumaCantidadesChocoBanana = cantidadBudinChocoBanana * precioBudinChocoBanana;
    let sumaCantidadesLimon = cantidadBudinLimon * precioBudinLimon;
    let compraTotal = sumaCantidadesChocoBanana + sumaCantidadesLimon;

    let respuestaAbonarEnCuotas = prompt(`¡Excelente elección!
    Estas por comprar:
    - ${budinChocoBanana}: ${cantidadBudinChocoBanana} x $${precioBudinChocoBanana} por unidad.
    - ${budinLimon}: ${cantidadBudinLimon} x $${precioBudinLimon} por unidad.
    
    TOTAL: $${compraTotal}
    
    💳 ¿Deseas abonar en cuotas? 💳`);

    console.log(respuestaAbonarEnCuotas);

    