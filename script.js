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
    const maxX = 120;
    const maxY = 70;

    const x = Math.random() * (maxX * 2) - maxX;
    const y = Math.random() * (maxY * 2) - maxY;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
}


/* Cuando intenta acercarse */

noBtn.addEventListener("mouseenter", moveNoButton);


/* En celular */

noBtn.addEventListener("touchstart", (event) => {
    event.preventDefault();
    moveNoButton();
});


/* Por si consigue hacer click */

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
