const fonts = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('.book');


fonts.forEach ((font) => {
  font.addEventListener("click", (event) => {
      let size = font.getAttribute("data-size");
      book.className = "book";
      document.querySelector(".font-size_active").classList.remove("font-size_active");
      font.classList.add("font-size_active");
      book.classList.add(`book_fs-${size}`);
      event.preventDefault();
  })
})