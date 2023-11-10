let cantidad = document.querySelector('#cantidad')
let precioInicial = document.querySelector('#precioInicial')
let total = document.querySelector('#total')
let mas = document.querySelector('#mas')
let menos = document.querySelector('#menos')

mas.onclick = function () {
    cantidad.innerHTML++;
    total.innerHTML = (cantidad.innerHTML * precioInicial.innerHTML).toLocaleString('es-CL');
};

menos.onclick = function () {
    cantidad.innerHTML--;
    total.innerHTML = (cantidad.innerHTML * precioInicial.innerHTML).toLocaleString('es-CL');
};
