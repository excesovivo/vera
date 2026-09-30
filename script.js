/* =========================
   ELEMENTOS
========================= */

const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const pages = document.querySelectorAll(".page");

const noBtn = document.getElementById("no-btn");


/* =========================
   ABRIR SOBRE
========================= */

envelope.addEventListener("click", () => {

    envelope.style.display = "none";

    letter.style.display = "flex";

    setTimeout(() => {
        letterWindow.classList.add("open");
    }, 50);

});


/* =========================
   CAMBIAR DE PÁGINA
========================= */

let currentPage = 0;

function nextPage() {

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");

}


/* =========================
   BOTÓN "NO"
========================= */

function moveNoButton() {

    const maxX = 120;
    const maxY = 70;

    const x = Math.random() * (maxX * 2) - maxX;
    const y = Math.random() * (maxY * 2) - maxY;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;

}


/*
   PC:
   cuando el mouse se acerca, escapa.
*/

noBtn.addEventListener("mouseenter", moveNoButton);


/*
   CELULAR:
   cuando intenta tocarlo, también escapa.
*/

noBtn.addEventListener("touchstart", (event) => {

    event.preventDefault();

    moveNoButton();

});


/*
   Por si logra hacer click de alguna manera.
*/

noBtn.addEventListener("click", (event) => {

    event.preventDefault();

    moveNoButton();

});


/* =========================
   BOTÓN "SÍ"
========================= */

function sayYes() {

    pages[currentPage].classList.remove("active");

    const finalPage = document.getElementById("final-page");

    finalPage.classList.add("active");

}
