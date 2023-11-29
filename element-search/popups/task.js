const popupMain = document.getElementById('modal_main');
popupMain.className = 'modal modal_active';
const popupSuccess = document.getElementById('modal_success');
const btnDanger = document.querySelector('.btn_danger');
const btnClose = document.querySelectorAll('div.modal__close');


btnDanger.onclick = () => {
    popupMain.className = 'modal';
    popupSuccess.className = 'modal modal_active';
}

const arrBtnClose = Array.from(btnClose)
arrBtnClose.forEach((btn) => {
    btn.onclick = () => {
        popupMain.className = 'modal';
        popupSuccess.className = 'modal';
    }
});
