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

    setTimeout(() => {
        largeWindow.classList.add("open");
    }, 50);

});


/* =========================
   CAMBIAR PÁGINA
========================= */

function nextPage() {

    /*
       Página 1 -> página 2
       Página 2 -> página 3
       Página 3 -> pregunta final
    */

    if (currentPage >= 3) {
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage++;

    /*
       Cuando llegamos a la pregunta,
       ocultamos la ventana grande
       y mostramos la chica.
    */

    if (currentPage === 3) {

        largeWindow.classList.remove("open");

        setTimeout(() => {

            largeWindow.style.display = "none";

            smallWindow.style.display = "flex";

            setTimeout(() => {
                smallWindow.classList.add("open");
            }, 50);

            pages[currentPage].classList.add("active");

        }, 300);

    } else {

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

    noBtn.style.transition = "transform 0.2s ease";

    noBtn.style.transform =
        `translate(${moveX}px, ${moveY}px)`;
}


noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);


noBtn.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        moveNoButton();

    }
);


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

    pages[currentPage].classList.remove("active");

    smallWindow.classList.remove("open");

    setTimeout(() => {

        document.getElementById("final-page")
            .classList.add("active");

        smallWindow.classList.add("open");

    }, 200);

}
