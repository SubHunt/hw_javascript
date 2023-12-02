const arrLinks = Array.from(document.querySelectorAll(".dropdown__link"));
const dropValue = document.querySelector(".dropdown__value");
const showMenu = document.querySelector(".dropdown__list");

dropValue.addEventListener("click", () => showMenu.classList.add("dropdown__list_active"));

arrLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
        dropValue.textContent = link.textContent;
        showMenu.classList.remove("dropdown__list_active");
        event.preventDefault();
    })
})
