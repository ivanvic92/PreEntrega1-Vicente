
while (true) {
    var ingresarPrecioProducto = parseFloat(prompt('Ingrese el precio del producto solicitado: '));
    if (!isNaN(ingresarPrecioProducto) && ingresarPrecioProducto != '') {
        alert('El precio del producto ingresado es: $' + ingresarPrecioProducto)
        break
    } else {
        alert('El precio debe ser un número')
    }
}



while (true) {
    var ingresarNumeroCuotas = parseInt(prompt('Ingrese el número de cuotas: '));
    if (!isNaN(ingresarNumeroCuotas) && (ingresarNumeroCuotas === 3 || ingresarNumeroCuotas === 6 || ingresarNumeroCuotas === 12)) {
        alert('El número de cuotas solicitado es: ' + ingresarNumeroCuotas)
        break
    } else {
        alert('La cantidad de cuotas deben ser 3, 6 o 12')
    }
}

function calcularValorCuotas (precio, cuotas) {
    if (cuotas === 6) {
        var resultado = precio * 1.2 / cuotas
        alert('6 cuotas tienen 20% de interes')
    } else if (cuotas === 12) {
        var resultado = precio *1.4 / cuotas
        alert('12 cuotas tienen 40% de interes')
    } else {
        var resultado = precio / cuotas
    }
    return resultado.toFixed(2)
}

const cuotasFinales =  calcularValorCuotas(ingresarPrecioProducto, ingresarNumeroCuotas)

alert('La financiaciación es de: ' + ingresarNumeroCuotas + ' cuotas de: $' + cuotasFinales)
