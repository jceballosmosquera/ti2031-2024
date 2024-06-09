const catalogo = [
    { 
        codigo: 'sala de estar.jpg', 
        categoria: 'Diseño de Interiores',
        nombre: 'Diseño de Sala de Estar',
        descripcion: 'Diseño interior moderno para sala de estar con iluminación natural y muebles minimalistas.',
        imagen: './images/sala de estar.jpg',
        precio: 1500,
        disponibilidad: 10,
        url: 'producto.html?codigo=P0001'
    },
    { 
        codigo: 'Renovación de Fachada Residencial.jpg', 
        categoria: 'Diseño de Fachadas',
        nombre: 'Renovación de Fachada Residencial',
        descripcion: 'Renovación de fachada de casa residencial con estilo contemporáneo y materiales eco-amigables.',
        imagen: './images/Renovación de Fachada Residencial.jpg',
        precio: 2500,
        disponibilidad: 5,
        url: 'producto.html?codigo=P0002'
    },
    { 
        codigo: 'Diseño de Cocina Moderna.jpg', 
        categoria: 'Diseño de Interiores',
        nombre: 'Diseño de Cocina Moderna',
        descripcion: 'Diseño interior para cocina moderna con electrodomésticos de última generación y acabados de alta calidad.',
        imagen: './images/Diseño de Cocina Moderna.jpg',
        precio: 1800,
        disponibilidad: 8,
        url: 'producto.html?codigo=P0003'
    },
    { 
        codigo: 'Paisajismo Urbano.jpg', 
        categoria: 'Diseño de Jardines',
        nombre: 'Paisajismo Urbano',
        descripcion: 'Diseño de jardines urbanos con plantas autóctonas, zonas de descanso y espacios verdes para la comunidad.',
        imagen: './images/Paisajismo Urbano.jpg',
        precio: 2000,
        disponibilidad: 3,
        url: 'producto.html?codigo=P0004'
    },
    { 
        codigo: 'Diseño de Casa Moderna.jpg', 
        categoria: 'Arquitectura Residencial',
        nombre: 'Diseño de Casa Moderna',
        descripcion: 'Diseño arquitectónico de casa moderna con líneas limpias, amplios ventanales y espacios integrados.',
        imagen: './images/Diseño de Casa Moderna.jpg',
        precio: 3000,
        disponibilidad: 2,
        url: 'producto.html?codigo=P0005'
    },
    { 
        codigo: 'Diseño de Tienda Boutique.jpg', 
        categoria: 'Arquitectura Comercial',
        nombre: 'Diseño de Tienda Boutique',
        descripcion: 'Diseño arquitectónico de tienda boutique con estilo contemporáneo, iluminación ambiental y áreas de exposición destacadas.',
        imagen: './images/Diseño de Tienda Boutique.jpg',
        precio: 2200,
        disponibilidad: 4,
        url: 'producto.html?codigo=P0006'
    },
];

function mostrarCatalogo() {
    const catalogoDiv = document.getElementById('catalogo');
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
        `;
        catalogoDiv.appendChild(productoDiv);
    });
}

document.addEventListener('DOMContentLoaded', mostrarCatalogo);

