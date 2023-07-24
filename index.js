// Función para guardar datos en el local storage
function guardarEnLocalStorage(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}

// Función para obtener datos del local storage
function obtenerDeLocalStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
}

// Función para mostrar el formulario de nombre y apellido
function mostrarFormularioNombreApellido() {
    const edadInput = document.getElementById('edadInput');
    const bienvenido = document.getElementById('bienvenido');
    const edadContainer = document.getElementById('edadContainer');
    const nombreApellidoContainer = document.getElementById('nombreApellidoContainer');

    const edad = parseInt(edadInput.value);

    if (isNaN(edad) || edad < 18) {
        alert('No tiene la edad mínima para continuar');
    } else {
        bienvenido.style.display = 'none';
        edadContainer.style.display = 'none';
        nombreApellidoContainer.style.display = 'block';
    }
}

// Función para procesar los datos ingresados
function procesarNombreApellido() {
    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');

    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();

    if (nombre === '' || apellido === '') {
        alert('Por favor, ingrese su nombre y apellido.');
        return;
    }

    const mensajeBienvenida = `HOLA ${nombre.toUpperCase()} ${apellido.toUpperCase()}, SOY EL ASISTENTE PARA TU PRIMER COMPRA DE LIBROS.`;
    const outputContainer = document.getElementById('outputContainer');
    const nombreApellidoContainer = document.getElementById('nombreApellidoContainer');
    const librosContainer = document.getElementById('librosContainer');

    outputContainer.style.display = 'block';
    nombreApellidoContainer.style.display = 'none';
    librosContainer.style.display = 'block';
    outputContainer.querySelector('h2').textContent = mensajeBienvenida;
}

// Función para mostrar los libros sugeridos
function mostrarLibrosSugeridos() {
    const generoInput = document.getElementById('generoInput');
    const genero = generoInput.value;

    const librosSugeridos = obtenerLibrosPorGenero(genero);
    mostrarLibros(librosSugeridos);

    // Guardar datos en el local storage
    const nombreInput = document.getElementById('nombreInput');
    const apellidoInput = document.getElementById('apellidoInput');
    const nombre = nombreInput.value.trim();
    const apellido = apellidoInput.value.trim();
    const persona = {
        nombre: nombre,
        apellido: apellido,
        genero: genero
    };
    guardarEnLocalStorage('persona', persona);
}

// Función para filtrar libros por género literario
function obtenerLibrosPorGenero(genero) {
    const libros = [
        { titulo: 'Cementerio de Animales', autor: 'Stephen King', genero: 'TERROR', precio: 2500, promocion: true },
        { titulo: 'Misery', autor: 'Stephen King', genero: 'TERROR', precio: 1500, promocion: false },
        { titulo: 'El psicoanalista', autor: 'John Katzenbach', genero: 'POLICIAL', precio: 3000, promocion: true },
        { titulo: 'Confianza ciega', autor: 'John Katzenbach', genero: 'POLICIAL', precio: 4500, promocion: false },
        { titulo: 'El señor de los anillos: El retorno del Rey', autor: 'J. R. R. Tolkien', genero: 'FANTASÍA', precio: 5000, promocion: true },
        { titulo: 'El señor de los anillos: Las dos torres', autor: 'J. R. R. Tolkien', genero: 'FANTASÍA', precio: 3500, promocion: false }
    ];

    return libros.filter(libro => libro.genero === genero);
}

// Función para mostrar los libros en el DOM
function mostrarLibros(libros) {
    const librosSugeridos = document.getElementById('librosSugeridos');

    let htmlLibros = '';
    for (const libro of libros) {
        htmlLibros += `
            <p>Título: ${libro.titulo}</p>
            <p>Autor: ${libro.autor}</p>
            <p>Precio: $${libro.precio.toFixed(2)}</p>
            <hr>
        `;
    }

    librosSugeridos.innerHTML = htmlLibros;
}

document.getElementById('continuarEdadBtn').addEventListener('click', mostrarFormularioNombreApellido);
document.getElementById('continuarNombreApellidoBtn').addEventListener('click', procesarNombreApellido);
document.getElementById('continuarGeneroBtn').addEventListener('click', mostrarLibrosSugeridos);











