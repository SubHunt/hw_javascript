let xhr = new XMLHttpRequest();
let loader = document.getElementById('loader');

function insertHTML(response) {
    let itemList = document.querySelectorAll('div.item');
    itemList.length > 0 ? Array.from(itemList).forEach((element) => element.remove()) : '';
    for (let item in response) {
        let html =
            `<div class="item">
                <div class="item__code">${response[item].CharCode}</div>
                <div class="item__value">${response[item].Value}</div>
                <div class="item__currency">руб.</div>
            </div>`
        document.getElementById('items').insertAdjacentHTML('afterbegin', html);
    };
    loader.classList.remove('loader_active');
};

function renderPage(response) { response.length > 0 ? insertHTML(JSON.parse(response)) : ''; };

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);
xhr.send();
xhr.addEventListener('readystatechange', function () {
    if (this.readyState == 4 && this.status == 200) {
        let response = JSON.parse(this.responseText)['response'].Valute;
        insertHTML(response);
        localStorage.setItem('valute', JSON.stringify(response));
    };
});

renderPage(localStorage.getItem('valute'));
