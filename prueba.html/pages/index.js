
const catalogo = [
    { 
        codigo: 'P0001', 
        categoria: 'Diseño de Interiores',
        nombre: 'Diseño de Sala de Estar',
        descripcion: 'Diseño interior moderno para sala de estar con iluminación natural y muebles minimalistas.',
        imagen: '/ti2031-2024/prueba.html/images/sala de estar.jpg',
        precio: 1500,
        disponibilidad: 10,
        url: 'producto.html?codigo=P0001'
    },
    { 
        codigo: 'P0002', 
        categoria: 'Diseño de Fachadas',
        nombre: 'Renovación de Fachada Residencial',
        descripcion: 'Renovación de fachada de casa residencial con estilo contemporáneo y materiales eco-amigables.',
        imagen: '/ti2031-2024/prueba.html/images/Renovación de Fachada Residencial.jpg',
        precio: 2500,
        disponibilidad: 5,
        url: 'producto.html?codigo=P0002'
    },
    { 
        codigo: 'P0003', 
        categoria: 'Diseño de Interiores',
        nombre: 'Diseño de Cocina Moderna',
        descripcion: 'Diseño interior para cocina moderna con electrodomésticos de última generación y acabados de alta calidad.',
        imagen: '/ti2031-2024/prueba.html/images/Diseño de Cocina Moderna.jpg',
        precio: 1800,
        disponibilidad: 8,
        url: 'producto.html?codigo=P0003'
    },
    { 
        codigo: 'P0004', 
        categoria: 'Diseño de Jardines',
        nombre: 'Paisajismo Urbano',
        descripcion: 'Diseño de jardines urbanos con plantas autóctonas, zonas de descanso y espacios verdes para la comunidad.',
        imagen: '/ti2031-2024/prueba.html/images/Paisajismo Urbano.jpg',
        precio: 2000,
        disponibilidad: 3,
        url: 'producto.html?codigo=P0004'
    },
    { 
        codigo: 'P0005', 
        categoria: 'Arquitectura Residencial',
        nombre: 'Diseño de Casa Moderna',
        descripcion: 'Diseño arquitectónico de casa moderna con líneas limpias, amplios ventanales y espacios integrados.',
        imagen: '/ti2031-2024/prueba.html/images/Diseño de Casa Moderna.jpg',
        precio: 3000,
        disponibilidad: 2,
        url: 'producto.html?codigo=P0005'
    },
    { 
        codigo: 'P0006', 
        categoria: 'Arquitectura Comercial',
        nombre: 'Diseño de Tienda Boutique',
        descripcion: 'Diseño arquitectónico de tienda boutique con estilo contemporáneo, iluminación ambiental y áreas de exposición destacadas.',
        imagen: '/ti2031-2024/prueba.html/images/Diseño de Tienda Boutique.jpg',
        precio: 2200,
        disponibilidad: 4,
        url: 'producto.html?codigo=P0006'
    }
];

// Función para mostrar el catálogo
function mostrarCatalogo() {
    const catalogoDiv = document.getElementById('catalogo');
    catalogoDiv.innerHTML = ''; // Limpiar contenido previo
    catalogo.forEach(producto => {
        const productoDiv = document.createElement('div');
        productoDiv.className = 'producto';
        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p>Precio: $${producto.precio}</p>
            <p>Disponibilidad: ${producto.disponibilidad}</p>
            <button class="add-to-cart-btn" onclick="agregarAlCarrito('${producto.codigo}')">Agregar al Carrito</button>
            <button class="w3-button w3-red" onclick="eliminarProducto('${producto.codigo}')">Eliminar</button>
            <button class="w3-button w3-blue" onclick="editarProducto('${producto.codigo}')">Editar</button>
        `;
        catalogoDiv.appendChild(productoDiv);
    });
}

// Función para agregar un producto al catálogo
function agregarProducto() {
    const codigo = prompt("Ingrese el código del producto:");
    if (!codigo) return;

    const categoria = prompt("Ingrese la categoría del producto:");
    const nombre = prompt("Ingrese el nombre del producto:");
    const descripcion = prompt("Ingrese la descripción del producto:");
    const imagen = prompt("Ingrese la ruta de la imagen del producto:");
    const precio = parseFloat(prompt("Ingrese el precio del producto:"));
    const disponibilidad = parseInt(prompt("Ingrese la disponibilidad del producto:"));

    const nuevoProducto = {
        codigo,
        categoria,
        nombre,
        descripcion,
        imagen,
        precio,
        disponibilidad,
        url: `producto.html?codigo=${codigo}`
    };

    catalogo.push(nuevoProducto);
    mostrarCatalogo();
}

// Función para eliminar un producto del catálogo
function eliminarProducto(codigo) {
    const index = catalogo.findIndex(p => p.codigo === codigo);
    if (index !== -1) {
        catalogo.splice(index, 1);
        mostrarCatalogo();
    }
}

// Función para editar un producto en el catálogo
function editarProducto(codigo) {
    const producto = catalogo.find(p => p.codigo === codigo);
    if (producto) {
        const nuevoNombre = prompt("Ingrese el nuevo nombre:", producto.nombre);
        if (nuevoNombre) producto.nombre = nuevoNombre;

        const nuevaDescripcion = prompt("Ingrese la nueva descripción:", producto.descripcion);
        if (nuevaDescripcion) producto.descripcion = nuevaDescripcion;

        const nuevoPrecio = prompt("Ingrese el nuevo precio:", producto.precio);
        if (nuevoPrecio) producto.precio = parseFloat(nuevoPrecio);

        const nuevaDisponibilidad = prompt("Ingrese la nueva disponibilidad:", producto.disponibilidad);
        if (nuevaDisponibilidad) producto.disponibilidad = parseInt(nuevaDisponibilidad);

        mostrarCatalogo();
    }
}

// Función de inicialización
document.addEventListener('DOMContentLoaded', () => {
    mostrarCatalogo();
});
