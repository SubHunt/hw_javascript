const qtyClick = document.getElementById("clicker__counter");

const img = document.getElementById("cookie");
let zoom = true;
img.onclick = () => {
    if (zoom){
        img.width += 20;
        img.height += 20;
        zoom = false;
    } else {
        img.width -= 20;
        img.height -= 20;
        zoom = true;
    }
    qtyClick.textContent++;
}
