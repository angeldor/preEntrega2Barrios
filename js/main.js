const impuestos = [
    {id: 1, nombre:`Impuesto a Steam`, tasa: 0.75},
    {id: 2, nombre: `Impuesto a la importación`, tasa: 0.95},
    {id: 3, nombre:`Impuesto a las ganancias`, tasa: 0.35}
]
//creo la lista de impuestos que se podran calcular
//funcion para calcular los impuestos
function calcularImpuesto(totalCompra, impuestoId){
    const impuesto = impuestos.find(imp => imp.id === impuestoId)
    if (!impuesto){
        return null //impuesto no encontrado
    }
    return {nombre: impuesto.nombre, monto: totalCompra * impuesto.tasa}
}  
//Se solicita el monto a calcular al usuario
const totalCompraUsuario = prompt("Ingresa el subtotal de la compra en ARS:")
//convierte la entrada de datos en un numero
const totalCompraNumeros = parseFloat(totalCompraUsuario)
// se verifica si el usuario ingreso un numero valido
if (!isNaN(totalCompraUsuario)){
    //se solicita elegir un impuesto al usuario
    const impuestoElegido = parseInt(prompt(`Elige el impuesto a calcular: \n1 - Impuesto a Steam 75%\n2 - Impuesto a la importación 95%\n3 - Impuesto a las ganancias 35%`))

    //calcula el impuesto elegido
    const impuestoCalculado = calcularImpuesto(totalCompraNumeros, impuestoElegido)

    if(impuestoCalculado){
        const totalAPagar = totalCompraNumeros + impuestoCalculado.monto

        console.log(`Total de la compra: $${totalCompraNumeros}`)
        console.log(`${impuestoCalculado.nombre}: $${impuestoCalculado.monto}`)
        console.log(`Total a pagar con impuestos: $${totalAPagar}`)
    }else{
        console.log(`Impuesto invalido. Por favor elegí un impuesto valido.`)
    }
}else{
    console.log(`Cantidad invalida . Por favor intentelo de nuevo.`)
}

