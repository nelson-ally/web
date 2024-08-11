const caja = document.querySelector('.caja');
const botonComprar = document.querySelector('.boton-comprar');
const diseños = document.querySelectorAll('.diseno');

botonComprar.addEventListener('click', () => {
  caja.classList.toggle('abierta');
});