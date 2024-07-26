// Inicializa la aplicación cuando el documento esté listo
document.addEventListener('DOMContentLoaded', () => {
    mostrarCatalogo();
    mostrarCarrito();
    actualizarCarritoDesdeLocalStorage();
});

// Función para actualizar el carrito desde localStorage
function actualizarCarritoDesdeLocalStorage() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
        mostrarCarrito();
    }
}

// Función para guardar el carrito en localStorage
function guardarCarritoEnLocalStorage() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

// Escucha los eventos de modificación del carrito y actualiza el localStorage
document.addEventListener('carritoModificado', () => {
    guardarCarritoEnLocalStorage();
});
