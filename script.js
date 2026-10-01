const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");

const largeWindow = document.querySelector(".large-window");
const smallWindow = document.querySelector(".small-window");

const pages = document.querySelectorAll(".page");
const noBtn = document.getElementById("no-btn");

let currentPage = 0;


/* =========================
   ABRIR CARTA
========================= */

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.style.display = "flex";

    /*
       La ventana grande ya está centrada.
       Solamente hacemos aparecer
       su opacidad.
    */

    setTimeout(() => {

        largeWindow.classList.add("open");

    }, 50);

});


/* =========================
   CAMBIAR DE PÁGINA
========================= */

function nextPage() {

    /*
       Página 1 -> página 2
       Página 2 -> página 3
       Página 3 -> pregunta
    */

    if (currentPage >= 3) {
        return;
    }


    /*
       Ocultamos la página actual.
    */

    pages[currentPage].classList.remove("active");


    /*
       Pasamos a la siguiente.
    */

    currentPage++;


    /*
       Al llegar a la página 4,
       cambiamos de ventana.
    */

    if (currentPage === 3) {

        /*
           Primero desaparece
           la ventana grande.
        */

        largeWindow.classList.remove("open");


        setTimeout(() => {

            /*
               Ahora sí la sacamos
               completamente del layout.
            */

            largeWindow.style.display = "none";


            /*
               Mostramos la ventana chica.
            */

            smallWindow.style.display = "flex";


            /*
               Activamos la pregunta.
            */

            pages[currentPage].classList.add("active");


            /*
               La hacemos visible.
            */

            requestAnimationFrame(() => {

                smallWindow.classList.add("open");

            });

        }, 500);

    } else {

        /*
           Páginas 2 y 3:
           seguimos usando la ventana grande.
        */

        pages[currentPage].classList.add("active");

    }

}


/* =========================
   BOTÓN "NO"
========================= */

function moveNoButton() {

    const min = 100;
    const max = 160;

    const distance =
        Math.random() * (max - min) + min;

    const angle =
        Math.random() * Math.PI * 2;

    const moveX =
        Math.cos(angle) * distance;

    const moveY =
        Math.sin(angle) * distance;


    noBtn.style.transition =
        "transform 0.2s ease";

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;
}


/*
   PC
*/

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


/*
   CELULAR
*/

noBtn.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);


/*
   Por si consigue ser presionado.
*/

noBtn.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);


/* =========================
   RESPUESTA "SÍ"
========================= */

function sayYes() {

    /*
       Ocultamos la pregunta.
    */

    pages[currentPage].classList.remove("active");


    /*
       Pequeña transición de la ventana.
    */

    smallWindow.classList.remove("open");


    setTimeout(() => {

        /*
           Mostramos la respuesta final.
        */

        document
            .getElementById("final-page")
            .classList.add("active");


        /*
           Volvemos a mostrar la ventana.
        */

        smallWindow.classList.add("open");

    }, 300);

}
