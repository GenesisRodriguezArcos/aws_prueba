document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    const nombreApellidoInput = document.getElementById("nombreapellido"); // Son sobrenombres de mis campos (id)
    const edadInput = document.getElementById("edad");
    const correoInput = document.getElementById("correo");
    const numeroInput = document.getElementById("numero");

    // Validación para el campo "nombreapellido" (sin números)
    nombreApellidoInput.addEventListener("input", function () {
        const regex = /\d/; // Buscar números
        if (regex.test(this.value)) {
            this.style.backgroundColor = "red"; // Si hay números, poner fondo rojo
        } else {
            this.style.backgroundColor = "green"; // Si no hay números, fondo verde
        }
    });

    // Validación para el campo "edad" (entre 5 y 100 años)
    edadInput.addEventListener("input", function () {
        const edad = parseInt(this.value);
        if (edad < 5 || edad > 100) {
            this.style.backgroundColor = "red"; // Edad fuera del rango
        } else {
            this.style.backgroundColor = "green"; // Edad válida
        }
    });

    // Validación para el campo "correo" (correo válido con '@' y '.')
    correoInput.addEventListener("input", function () {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Verificar estructura de correo
        if (!regex.test(this.value)) {
            this.style.backgroundColor = "red"; // Correo inválido
        } else {
            this.style.backgroundColor = "green"; // Correo válido
        }
    });

    // Validación para el campo "numero" (debe empezar con 9 y tener 9 dígitos)
    numeroInput.addEventListener("input", function () {
        const regex = /^9\d{8}$/; // Verifica si empieza con 9 y tiene 9 dígitos
        if (!regex.test(this.value)) {
            this.style.backgroundColor = "red"; // Número inválido
        } else {
            this.style.backgroundColor = "green"; // Número válido
        }
    });

    // Manejo del envío del formulario - animacion con sweet alert
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evitar que se envíe el formulario de inmediato

        // Verificar que los campos estén válidos 
        if (
            nombreApellidoInput.style.backgroundColor === "green" &&
            edadInput.style.backgroundColor === "green" &&
            correoInput.style.backgroundColor === "green" &&
            numeroInput.style.backgroundColor === "green"
        ) {
            // Si todos los campos son válidos, mostrar el sweet alert
            Swal.fire({
                title: 'Datos enviados con éxito!',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }).then(() => {
                // Recargar la página después de la confirmación(refresca)
                location.reload();
            });
            
            // Envía el formulario manualmente
            form.submit();
        } else {
            // Si algún campo no es válido, mostrar una alerta de error
            Swal.fire({
                title: 'Error en el formulario',
                text: 'Por favor, verifica los campos en rojo.',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            });
        }
    });
});

