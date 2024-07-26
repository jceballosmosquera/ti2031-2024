let carrito = [];

// Función para mostrar el carrito
function mostrarCarrito() {
    const carritoDiv = document.getElementById('carrito');
    carritoDiv.innerHTML = '';

    if (carrito.length === 0) {
        carritoDiv.innerHTML = '<p>El carrito está vacío</p>';
    } else {
        let total = 0;
        carrito.forEach(item => {
            total += item.precio * item.cantidad;
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('item-carrito');
            itemDiv.innerHTML = `
                <p><strong>${item.nombre}</strong></p>
                <p>Cantidad: ${item.cantidad}</p>
                <p>Precio Unitario: $${item.precio}</p>
                <p>Total: $${item.precio * item.cantidad}</p>
                <button onclick="eliminarDelCarrito('${item.codigo}')">Eliminar</button>
            `;
            carritoDiv.appendChild(itemDiv);
        });

        const totalDiv = document.createElement('div');
        totalDiv.id = 'total-carrito';
        totalDiv.innerHTML = `Total del Carrito: $${total}`;
        carritoDiv.appendChild(totalDiv);
    }
}

// Función para agregar un producto al carrito
function agregarAlCarrito(codigoProducto) {
    const producto = catalogo.find(item => item.codigo === codigoProducto);

    if (producto) {
        const cantidad = prompt(`Ingrese la cantidad de "${producto.nombre}" que desea agregar:`);
        const cantidadNum = parseInt(cantidad);

        if (!isNaN(cantidadNum) && cantidadNum > 0 && cantidadNum <= producto.disponibilidad) {
            const itemExistente = carrito.find(item => item.codigo === codigoProducto);

            if (itemExistente) {
                itemExistente.cantidad += cantidadNum;
            } else {
                carrito.push({
                    codigo: producto.codigo,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    cantidad: cantidadNum
                });
            }

            producto.disponibilidad -= cantidadNum; // Reserva de producto
            mostrarCarrito();

            // Dispara el evento para actualizar el localStorage
            const evento = new Event('carritoModificado');
            document.dispatchEvent(evento);
        } else {
            alert(`La cantidad ingresada no es válida o excede la disponibilidad del producto.`);
        }
    } else {
        alert(`El producto con el código ${codigoProducto} no fue encontrado en el catálogo.`);
    }
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(codigoProducto) {
    const itemIndex = carrito.findIndex(item => item.codigo === codigoProducto);

    if (itemIndex !== -1) {
        const producto = catalogo.find(item => item.codigo === codigoProducto);
        producto.disponibilidad += carrito[itemIndex].cantidad; // Liberar reservas
        carrito.splice(itemIndex, 1); // Eliminar elemento del carrito
        mostrarCarrito();

        // Dispara el evento para actualizar el localStorage
        const evento = new Event('carritoModificado');
        document.dispatchEvent(evento);
    }
}
