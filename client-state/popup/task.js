const closeOrOpenPopup = () => document.getElementById('subscribe-modal').classList.toggle('modal_active');

try {
    let popupOpenStatus = document.cookie.match(new RegExp(/(popupOpen=)(\w+)/i))[2];
    popupOpenStatus === 'false' ? closeOrOpenPopup() : false;
} catch (e) {
    closeOrOpenPopup();
}

document.querySelector('div.modal__close').onclick = function () {
    closeOrOpenPopup();
    document.cookie = 'popupOpen=true';
};