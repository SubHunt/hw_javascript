const popupMain = document.getElementById('modal_main');
popupMain.className = 'modal modal_active';
const popupSuccess = document.getElementById('modal_success');
const btnDanger = document.querySelector('.btn_danger');
const btnClose = document.querySelectorAll('div.modal__close');


btnDanger.onclick = () => {
    popupMain.className = 'modal';
    popupSuccess.className = 'modal modal_active';
}

//First solution. Simple, but bad scalable
// btnClose[0].onclick = () => {
//     popupMain.className = 'modal';
// }

// btnClose[1].onclick = () => {
//     // popupMain.className = 'modal'; //this popup close yet
//     popupSuccess.className = 'modal';
// }

//Second solution. Little hard for understanding, but better scalable
//register all events "X" and convert NodeList collection to array.
const arrBtnClose = Array.from(btnClose)
arrBtnClose.forEach((btn) => {
    btn.onclick = () => {
        popupMain.className = 'modal';
        popupSuccess.className = 'modal';
    }
});
