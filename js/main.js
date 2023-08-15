const impuestos = [
    {nombre:"Percepción de Ganancias y Bienes Personales", tasa: 0.45},
    {nombre: "Impuesto PAIS", tasa: 0.3}
    //aqui se pueden agregar mas impuestos que el gobierno apruebe ;)
]
//funcion para calcular los impuestos de una compra en Steam
function calcularImpuestos(totalCompra){
    const impuestosDetallados = impuestos.map(impuesto => ({
        nombre: impuesto.nombre,
        monto: totalCompra * impuesto.tasa
    }))
    return impuestosDetallados
}
//Se solicita el monto a calcular al usuario
const totalCompraUsuario = prompt("Ingresa el subtotal de la compra en ARS:")
//convierte la entrada de datos en un numero
const totalCompraNumeros = parseFloat(totalCompraUsuario)
// se verifica si el usuario ingreso un numero valido
if (!isNaN(totalCompraUsuario)){
    // se calculan los impuestos a pagar
    const impuestosCalculados = calcularImpuestos(totalCompraNumeros)
    // se calcula el total a pagar
    const totalAPagar = totalCompraNumeros + impuestosCalculados.reduce((total, impuesto) => total + impuesto.monto, 0)

    console.log(`Total de la compra: ${totalCompraNumeros}`)
    impuestosCalculados.forEach(impuesto => {
        console.log(`${impuesto.nombre} : ${impuesto.monto}`)
    })
    console.log(`Total a pagar con impuestos: ${totalAPagar}`)
} else{
    console.log("Cantidad invalida. Intentelo nuevamente mas tarde.")
}

