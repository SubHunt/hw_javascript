const arrTab = Array.from(document.querySelectorAll(".tab"));
const arrTabContent = Array.from(document.querySelectorAll(".tab__content"));

arrTab.forEach ((tab, index) => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab_active").classList.remove("tab_active");
        document.querySelector(".tab__content_active").classList.remove("tab__content_active");
        tab.classList.add("tab_active");
        arrTabContent[index].classList.add("tab__content_active");
    })
})
