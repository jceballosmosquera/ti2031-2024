document.addEventListener('DOMContentLoaded', function() {
    createToggleCatalogButton();
});

function createToggleCatalogButton() {
    const header = document.querySelector('.w3-bar.w3-white.w3-wide.w3-padding.w3-card');
    const button = document.createElement('button');

    button.innerText = 'Mostrar Catálogo';
    button.className = 'catalogo-button';
    button.addEventListener('click', toggleCatalog);

    header.appendChild(button);
}

function toggleCatalog() {
    const catalogoDiv = document.getElementById('catalogo');
    if (catalogoDiv.style.display === 'none' || catalogoDiv.style.display === '') {
        catalogoDiv.style.display = 'block';
    } else {
        catalogoDiv.style.display = 'none';
    }
}
