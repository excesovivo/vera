const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const letterWindow = document.querySelector(".letter-window");

const pages = document.querySelectorAll(".page");
const noBtn = document.getElementById("no-btn");

let currentPage = 0;


/* =========================
   ABRIR EL SOBRE
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

function nextPage() {
    if (currentPage >= pages.length - 2) {
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage++;

    pages[currentPage].classList.add("active");
}


/* =========================
   BOTÓN "NO"
========================= */

function moveNoButton() {
    const min = 100;
    const max = 160;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}


/* PC */

noBtn.addEventListener("mouseenter", moveNoButton);


/* CELULAR */

noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});


/* POR SI CONSIGUE TOCARLO */

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
