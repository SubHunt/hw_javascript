//Change quantity
const productQuantityControlInc = document.querySelectorAll('.product__quantity-control_inc'); //Incremet goods
const productQuantityControlDec = document.querySelectorAll('.product__quantity-control_dec'); //Decrement goods
const productQuantityValue = document.querySelectorAll('.product__quantity-value'); //Quantity goods

//Cart
const productAdd = Array.from(document.querySelectorAll('.product__add')); //Button Add
let cartProducts = document.querySelector('.cart__products'); //Total cart
const product = document.querySelectorAll('.product'); //Collection all products
const productImage = document.querySelectorAll('.product__image'); // Collection Images of goods

//Increment qty
productQuantityControlInc.forEach((el, index) => {
    el.addEventListener('click', () => {
        productQuantityValue[index].textContent ++;
    })
})

//Decrement qty
productQuantityControlDec.forEach((el, index) => {
    el.addEventListener('click', () => {
        if (productQuantityValue[index].textContent > 1) {
            productQuantityValue[index].textContent --
        } else {
            return false;
        }
    })
})

//Add to Cart
productAdd.forEach((element, index) => {
    element.addEventListener('click', (event) => {
    const productId = (product[index].getAttribute('data-id'));
    const parent = productImage[index].closest('.product');
    const productImg = parent.querySelector('.product__image')
    const imgSrc = productImg.getAttribute('src');
    const productQty = Number(productQuantityValue[index].outerText);
    const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
    const haveYet = cartProduct.find((el) => el.dataset.id == event.target.closest('.product').dataset.id);
    //product add in cart first time
    if(!haveYet) {
        cartProducts.innerHTML+= `
            <div class="cart__product" data-id=${productId}>
            <img class="cart__product-image" src=${imgSrc}>
            <div class="cart__product-count">${productQty}</div>
            </div>
            `;
      } else {  //The Product have in cart yet
        const cartProductCount = haveYet.querySelector('.cart__product-count');
        cartProductCount.innerText = +cartProductCount.outerText + productQty;
      }
  })
})