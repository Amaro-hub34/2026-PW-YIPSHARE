const patrones = {
    nombre: /^[A-Za-zÁÉÍÓÚÑáéíóúñÜü\s]{2,60}$/,
    correo: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/,
    mensaje: /^[\s\S]{10,500}$/
};

const mensajes = {
    nombre: "Solo letras y espacios, entre 2 y 60 caracteres.",
    correo: "Ingresa un correo válido, por ejemplo: ejemplo@correo.com",
    mensaje: "El mensaje debe tener entre 10 y 500 caracteres."
};

function validarCampo(campo, valor) {
    return patrones[campo].test(valor.trim());
}

if (typeof document !== 'undefined') {
    const formulario = document.getElementById('form-registro');
    const mensajeExito = document.getElementById('mensaje-exito');

    function revisarCampo(campo) {
        const input = document.getElementById(campo);
        const errorSpan = document.getElementById(`error-${campo}`);
        const esValido = validarCampo(campo, input.value);

        input.classList.toggle('border-red-500', !esValido);
        input.classList.toggle('bg-red-50', !esValido);
        input.classList.toggle('border-slate-600', esValido);

        errorSpan.textContent = esValido ? '' : mensajes[campo];
        return esValido;
    }

    formulario.addEventListener('submit', (evento) => {
        evento.preventDefault();

        let formularioValido = true;

        for (const campo of Object.keys(patrones)) {
            if (!revisarCampo(campo)) {
                formularioValido = false;
            }
        }

        if (formularioValido) {
            mensajeExito.textContent = '¡Mensaje enviado con éxito!';
            formulario.reset();
        } else {
            mensajeExito.textContent = '';
        }
    });

    for (const campo of Object.keys(patrones)) {
        document.getElementById(campo).addEventListener('input', () => {
            mensajeExito.textContent = '';
            revisarCampo(campo);
        });
    }
}

if (typeof module !== 'undefined') {
    module.exports = { validarCampo, patrones };
}