
// DECLARAMOS VARIABLE DE EDAD Y ARRAYS VACIOS PARA LUEGO CARGARLOS CON EL METODO PUSH
let mayorEdad = parseInt(prompt('Bienvenido, ingrese su edad en números: '))
let baseUsuarios = []
const librosTerror = []
const librosPolicial = []
const librosFantasia = []

//CREAMOS CLASE CONSTRUCTORA DE OBJETOS QUE LUEGO IRAN EN LOS ARRAYS CORRESPONDIENTES
class Libro {
    constructor(titulo, autor, genero, precio, promocion) {
        this.titulo = titulo.toUpperCase()
        this.autor = autor.toUpperCase()
        this.genero = genero.toUpperCase()
        this.precio = parseFloat(precio)
        this.promocion = promocion
    }
//FUNCION PARA APLICAR DESCUENTO SOBRE LA PROPIEDAD PRECIO DE UN OBJETO
    aplicarDescuento() {
        this.precio = this.precio - (this.precio * 0.2)
        return this.precio
    }
}

//APLICAMOS METODO PUSH Y UTILIZAMOS LA CLASE CONSTRUCTORA (PREVIAMENTE CREADA) PARA IR CARGANDO LOS ARRAYS CON DISTINTOS OBJETOS
librosTerror.push(new Libro('Cementerio de Animales', 'Stephen King', 'Terror', 2500, true))
librosTerror.push(new Libro('Misery', 'Stephen King', 'Terror', 1500, false))
librosPolicial.push(new Libro('El psicoanalista', 'John Katzenbach', 'Policial', 3000, true))
librosPolicial.push(new Libro('Confianza ciega', 'John Katzenbach', 'Policial', 4500, false))
librosFantasia.push(new Libro('El señor de los anillos: El retorno del Rey', 'J. R. R. Tolkien', 'Fantasia', 5000, true))
librosFantasia.push(new Libro('El señor de los anillos: Las dos torres', 'J. R. R. Tolkien', 'Fantasia', 3500, false))

// CREAMOS UNA CLASE PARA UN OBJETO PERSONA, CUYOS VALORES IREMOS CARGANDO MEDIANTE PROMPT'S
class Persona {
    constructor(nombre, apellido, preferencia) {
        this.nombre = nombre.toUpperCase()
        this.apellido = apellido.toUpperCase()
        this.preferencia = preferencia.toUpperCase()
    }

    saludar() {
        alert('HOLA, SOY EL ASISTENTE PARA TU PRIMER COMPRA DE LIBROS. BIENVENIDO' + ' ' + this.nombre + ' ' + this.apellido)
    }
}
//SI SE CUMPLE CON LA CONDICION MAYORIA DE EDAD SE GENERA UNA SALIDA CON LOS DATOS CARGADOS MEDIANTE PROMPTS
if (mayorEdad >= 18) {
    let nombre = prompt('Ingrese su nombre: ')
    let apellido = prompt('Ingrese su appellido: ')
    let preferencia = prompt('Ingrese su género literario favorito (TERROR, POLICIAL O FANTASÍA): ')
    const persona1 = new Persona(nombre, apellido, preferencia)
    baseUsuarios.push(persona1)
    persona1.saludar()
} else {
    alert('No tiene la edad mínima para continuar')
}

//CONDICIONAL SEGUN EL VALOR DE LA VARIABLE PREFERENCIA, PREVIAMENTE CARGADA MEDIANTE PROMPTS
if (baseUsuarios[0].preferencia === 'TERROR') {
    for (const libro of librosTerror) {
        alert('Sugerimos estos libros: ' + '\nTitulo: ' + libro.titulo + '\nAutor: ' + libro.autor)
    }
    let compra = parseInt(prompt('DESEA COMPRAR ALGUNO? Elija entre la opción 1 o 2' + '\n(1)' + librosTerror[0].titulo + '\n(2)' + librosTerror[1].titulo))

    switch (compra) {
        case 1:
            alert('USTED VA A COMPRAR "CEMENTERIO DE ANIMALES", ESTE PRODUCTO TIENE DESCUENTO')
            alert('El precio de lista es: ' + '$' + librosTerror[0].precio + '\nEl precio final con descuento es: ' + '$' + librosTerror[0].aplicarDescuento())
            break;
        case 2:
            alert('USTED VA A COMPRAR "MISERY", ESTE PRODUCTO NO TIENE DESCUENTO')
            alert('EL PRECIO FINAL ES: ' + '$' + librosTerror[1].precio)
            break;
    }

} if (baseUsuarios[0].preferencia === 'POLICIAL') {
    for (const libro of librosPolicial) {
        alert('Sugerimos estos libros: ' + '\nTitulo: ' + libro.titulo + '\nAutor: ' + libro.autor)
    }
    let compra = parseInt(prompt('DESEA COMPRAR ALGUNO? Elija entre la opción 1 o 2' + '\n(1)' + librosPolicial[0].titulo + '\n(2)' + librosPolicial[1].titulo))

    switch (compra) {
        case 1:
            alert('USTED VA A COMPRAR "EL PSICOANALISTA", ESTE PRODUCTO TIENE DESCUENTO')
            alert('El precio de lista es: ' + librosPolicial[0].precio + '\nEl precio final con descuento es: ' + '$' + librosPolicial[0].aplicarDescuento())
            break;
        case 2:
            alert('USTED VA A COMPRAR "CONFIANZA CIEGA", ESTE PRODUCTO NO TIENE DESCUENTO')
            alert('EL PRECIO FINAL ES: ' + '$' + librosPolicial[1].precio)
            break
    }
} if (baseUsuarios[0].preferencia === 'FANTASIA') {
    for (const libro of librosFantasia) {
        alert('Sugerimos estos libros: ' + '\nTitulo: ' + libro.titulo + '\nAutor: ' + libro.autor)
    }
    let compra = parseInt(prompt('DESEA COMPRAR ALGUNO? Elija entre la opción 1 o 2' + '\n(1)' + librosFantasia[0].titulo + '\n(2)' + librosFantasia[1].titulo))

    switch (compra) {
        case 1:
            alert('USTED VA A COMPRAR ' + librosFantasia[0].titulo + ' ' + ',ESTE PRODUCTO TIENE DESCUENTO')
            alert('El de lista es: ' + '$' + librosFantasia[0].precio + '\nEl precio final con descuento es: ' + '$' + librosFantasia[0].aplicarDescuento())
            break;
        case 2:
            alert('USTED VA A COMPRAR ' + librosFantasia[1].titulo + ' ' + ',ESTE PRODUCTO NO TIENE DESCUENTO')
            alert('EL PRECIO FINAL ES: ' + '$' + librosFantasia[1].precio)
            break
    }
}



















// while (true) {
//     var ingresarPrecioProducto = parseFloat(prompt('Ingrese el precio del producto solicitado: '));
//     if (!isNaN(ingresarPrecioProducto) && ingresarPrecioProducto != '') {
//         alert('El precio del producto ingresado es: $' + ingresarPrecioProducto)
//         break
//     } else {
//         alert('El precio debe ser un número')
//     }
// }



// while (true) {
//     var ingresarNumeroCuotas = parseInt(prompt('Ingrese el número de cuotas: '));
//     if (!isNaN(ingresarNumeroCuotas) && (ingresarNumeroCuotas === 3 || ingresarNumeroCuotas === 6 || ingresarNumeroCuotas === 12)) {
//         alert('El número de cuotas solicitado es: ' + ingresarNumeroCuotas)
//         break
//     } else {
//         alert('La cantidad de cuotas deben ser 3, 6 o 12')
//     }
// }


// function calcularValorCuotas (precio, cuotas) {
//     if (cuotas === 6) {
//         alert('6 cuotas tienen 20% de interes')
//         return  (precio * 1.2) / cuotas
//     } else if (cuotas === 12) {
//         alert('12 cuotas tienen 40% de interes')
//        return (precio *1.4) / cuotas
//     } else  {
//         return  (precio / cuotas).toFixed(2)
//     }
// }

// const cuotasFinales =  calcularValorCuotas(ingresarPrecioProducto, ingresarNumeroCuotas)

// alert('La financiaciación es de: ' + ingresarNumeroCuotas + ' cuotas de: $' + cuotasFinales)
