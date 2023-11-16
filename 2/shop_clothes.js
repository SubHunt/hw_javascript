/*This program can create catalogue with clothes and add, delete goods to/from cart and will make cart is full empty.
Total goods in cart in finish will be calculating and will be get total price */

function addCart(itemName, qty){ // add to Cart good with it name and quantity
    let newPosition = new Cart(itemName, qty); //Add new position in cart
    return cart.push(newPosition);
}

function delCart(itemName){
    for (let i of cart) {
        if (i.good == itemName){
            cart = cart.filter(function( obj ) { //create new array without our name of good. We deleted good with it name
                return obj.good !== itemName;
            });
        }
    }
}

function clearCart (){ //Full erase your cart
    return cart.length = 0;
}


function placeOnOrder(yourCart) { //Finish buying and getting total cost for all goods in cart
    var total = {
        totalSumm: 0,
        totalAmount: 0,
    }
    for (let i of yourCart){    // Get name goods from cart
        for (let j of catalogue) { // Get name goods from catalogue
            if (j.name == i.good) { //If name from catalogue have in cart
                total.totalSumm += j.price * i.amount; //Take price from catalogue and multiply on amount in cart
                total.totalAmount += i.amount;
            }
        }
    }

    return total;
}


function Item(id, name, description, sizes, price, available) { // Object - constructor for Goods
    this.id = id;
    this.name = name;
    this.description = description;
    this.sizes = sizes;
    this.price = price;
    this.available = available;
}

function Cart(good, amount) { //Object - constructor for cart
    this.good = good;
    this.amount = amount;
}

// create arrays
// Our assortment
const catalogue = [
    new Item (1,"Cap", "Cotton cap",["M, L"], 2500, true),
    new Item(2,"Jacket", "Windproof jacket",["S, M, L, XL"], 12500, true),
    new Item(3,"Trousers", "Cotton trousers",["XS, S, M, L, XL, XXL"], 7500, true),
    new Item(4,"Coat", "Wool coat",["S, M, L, XL"], 22700, true),
    new Item(5,"Shirt", "Cotton shirt",["S, M, L, XL"], 5300, true),
    new Item(6,"Dress", "Syntetic Dress",["XS, S, M, L"], 3100, true),
];

//Let's something add in cart yet
let cart = [
    new Cart ("Shirt", 5),
    new Cart ("Jacket", 2),
];


//Input data
// console.log("Please learn goods from our catalogue:");
// console.table(catalogue);
// console.log("Your cart:");
// console.table(cart);

//Work with Cart
//Add some goods in cart
addCart("Cap", 3);
addCart ("Dress", 1);
//Delete one good from cart
delCart("Jacket");
//Clear the cart
clearCart();
//Add some goods for calculating Total Amount and Summary cost
addCart("Cap", 3);
addCart("Coat", 1);
addCart("Shirt", 2);

// Checked
console.log("Please learn goods from our catalogue:");
console.table(catalogue);
console.log("Your cart:");
console.table(cart);
console.log(placeOnOrder(cart));
