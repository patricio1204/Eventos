// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el div
    const div = document.getElementById('boton');
    
    // Agregar manejador de eventos para el click
    div.addEventListener('click', function() {
        alert('Hola! Soy el div');
    });
});
