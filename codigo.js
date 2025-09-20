let botonera = document.querySelectorAll(".botonera")
let numeros = document.querySelectorAll(".numero");
let botones = document.querySelectorAll(".botones");
let oculto = document.querySelectorAll(".oculto")
let añadido = document.querySelector(".añadido");
let productosCesta = document.querySelectorAll(".productosCesta");
let carta = 1;
let totalPrecio = document.querySelectorAll(".totalPrecio");
let totalPagar = document.querySelector(".totalPagar");




function pulsame(este) {
    let segundo = este.parentElement;
    let tercero = segundo.childNodes[5];
    let nombreArticulo = este.childNodes[5].value;



    //   console.log(este.childNodes[5].value)
    for (x = 0; x <= productosCesta.length - 1; x++) {
        let articulo = productosCesta[x].childNodes[1].innerHTML;

        // console.log(articulo)
        if (articulo == nombreArticulo) {
            productosCesta[x].classList.remove("oculto");
            //   console.log("aqui", productosCesta[x])
        }
    }



    este.style.backgroundColor = "red"
    tercero.classList.remove("oculto")
    este.classList.toggle("oculto")

    todo()
}


function resta(este) {
    let segundo = este.parentElement;
    let tercero = segundo.childNodes[3];
    let cuarto = segundo.childNodes[3].innerHTML;
    let resultado = segundo.parentElement;
    let letrasbotonera = resultado.childNodes[7].childNodes[3].innerHTML;



    for (x = 0; x <= productosCesta.length - 1; x++) {

        let letrasCesta = productosCesta[x].childNodes[1].innerHTML
        let derechaNumero = productosCesta[x].childNodes[3].childNodes[3].childNodes[0];
        let resto = productosCesta[x].childNodes[3].childNodes[3].childNodes[0].innerHTML;
        let posteriorPrecioTotal = productosCesta[x].childNodes[3].childNodes[7].childNodes[1];
        let resultadoTotal = productosCesta[x].childNodes[3].childNodes[5].childNodes[1].innerHTML;

        if (letrasCesta == letrasbotonera) {
            derechaNumero.innerHTML = resto - 1;

            if (resto <= 0) {
                derechaNumero.innerHTML = 0;
            }
            posteriorPrecioTotal.innerHTML = (parseFloat(resto) - 1) * parseFloat(resultadoTotal);

        }
    }

    tercero.innerHTML = cuarto - 1

    if (cuarto <= 0) {
        tercero.innerHTML = 0;
    }
    todo()
}
function suma(este) {
    let segundo = este.parentElement;
    let tercero = segundo.childNodes[3];
    let cuarto = segundo.childNodes[3].innerHTML;
    let resultado = segundo.parentElement;
    let letrasbotonera = resultado.childNodes[7].childNodes[3].innerHTML;


    for (x = 0; x <= productosCesta.length - 1; x++) {

        let letrasCesta = productosCesta[x].childNodes[1].innerHTML
        let derechaNumero = productosCesta[x].childNodes[3].childNodes[3].childNodes[0];
        let resto = productosCesta[x].childNodes[3].childNodes[3].childNodes[0].innerHTML;
        let posteriorPrecioTotal = productosCesta[x].childNodes[3].childNodes[7].childNodes[1];
        let resultadoTotal = productosCesta[x].childNodes[3].childNodes[5].childNodes[1].innerHTML;

        if (letrasCesta == letrasbotonera) {
            derechaNumero.innerHTML = parseInt(resto) + 1;
            posteriorPrecioTotal.innerHTML = (parseFloat(resto) + 1) * parseFloat(resultadoTotal);
        }
    }

    tercero.innerHTML = parseInt(cuarto) + 1;

    todo()
}

function borrar(este) {
    let primero = este.parentElement;
    let segundo = primero.parentElement;

    segundo.classList.add("oculto")

    todo()
}


function todo() {
    let pagoTotal = 0;
    let cantidadTotal = 0;
    let pagar = document.querySelector(".pagar")
    totalPagar.innerHTML = "";
    añadido.innerHTML = "";
    pagar.innerHTML = ""; 
    
    

    for (x = 0; x <= productosCesta.length - 1; x++) {
        if (productosCesta[x].classList.contains("oculto")) {
        } else {

            cantidadTotal += Number(productosCesta[x].childNodes[3].childNodes[3].childNodes[0].innerHTML) ;
            añadido.innerHTML = cantidadTotal;
            pagoTotal += parseFloat(productosCesta[x].childNodes[3].childNodes[7].childNodes[1].innerHTML);
            totalPagar.innerHTML = pagoTotal;
            pagar.innerHTML = pagoTotal
        }
    }
}
todo()

function pagare(){
    let dialogo = document.querySelector(".dialogo");

    dialogo.showModal();
}

function reinicio(){
   // dialogo.close()
    location.reload();
}





