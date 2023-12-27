let dataText = document.getElementById("editor");
let previousText = localStorage.getItem("dataText");

dataText.value = previousText;

dataText.addEventListener("keyup", ()=> {
    localStorage.setItem("dataText", dataText.value);
});

clearBtn.addEventListener("click", () => {
	dataText.value = "";
	localStorage.removeItem("dataText");
});