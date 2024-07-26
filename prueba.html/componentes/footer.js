document.addEventListener('DOMContentLoaded', () => {
    console.log('Cargando footer...');
    if (!document.querySelector('footer')) {
        const footer = `
            <footer>
                <div class="container">
                    <p>&copy; 2024 Mi Sitio Web. Todos los derechos reservados.</p>
                </div>
            </footer>
        `;
        document.body.insertAdjacentHTML('beforeend', footer);
    }
});
