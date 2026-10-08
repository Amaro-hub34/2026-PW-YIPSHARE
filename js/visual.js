const inputContrasena = document.getElementById('contrasena');
const botonOjo = document.getElementById('toggle-contrasena');
const ojoAbierto = document.getElementById('ojo-abierto');
const ojoCerrado = document.getElementById('ojo-cerrado');

botonOjo.addEventListener('click', () => {
    const mostrar = inputContrasena.type === 'password';

    inputContrasena.type = mostrar ? 'text' : 'password';
    ojoAbierto.classList.toggle('hidden', mostrar);
    ojoCerrado.classList.toggle('hidden', !mostrar);

    botonOjo.setAttribute('aria-pressed', mostrar);
    botonOjo.setAttribute('aria-label', mostrar ? 'Ocultar contraseña' : 'Mostrar contraseña');
});