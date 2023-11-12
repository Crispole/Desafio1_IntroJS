let cantidad = document.querySelector("#cantidad");
let precioInicial = document.querySelector("#precioInicial");
let total = document.querySelector("#total");
let mas = document.querySelector("#mas");
let menos = document.querySelector("#menos");

mas.onclick = function () {
  cantidad.innerHTML++; //cantidad.innerHTML = cantidad + 1;
    total.innerHTML = (
    cantidad.innerHTML * precioInicial.innerHTML
    ).toLocaleString("es-CL");
};

menos.onclick = function () {
    cantidad.innerHTML--;
    total.innerHTML = (
    cantidad.innerHTML * precioInicial.innerHTML
    ).toLocaleString("es-CL");
};

// Opción 2

// menos.addEventListener('click', function () {
//     cantidad.innerHTML--;
//     total.innerHTML =
//     cantidad.innerHTML * precioInicial.innerHTML.toLocaleString();
// });

// mas.addEventListener('click', function () {
//     cantidad.innerHTML++;
//     total.innerHTML =
//     cantidad.innerHTML * precioInicial.innerHTML.toLocaleString();
// });

//Opción 3

// function restar (){
//     cantidad.innerHTML--;
//     total.innerHTML = (cantidad.innerHTML * precioInicial.innerHTML).toLocaleString();
// }

// function sumar (){
//     cantidad.innerHTML++;
//     total.innerHTML = (cantidad.innerHTML * precioInicial.innerHTML).toLocaleString();
// }