const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelector("[data-navbar-links]")

const navToggleFunc = function () {
    navToggleBtn.classList.toggle("active");
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.lenght; i++){
    navbarLinks[i].addEventListener("click", navToggleFunc);
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
    window.scrollY >= 10 ? header.classList.add("active")
        : header.classList.remove("active");
})