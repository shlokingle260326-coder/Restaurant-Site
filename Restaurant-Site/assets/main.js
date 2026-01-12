// Navbar shadow on scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");
    nav.classList.toggle("shadow", window.scrollY > 50);
});

