class Good {
    constructor (id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this. available = available;
    }

    setAvailable(id,value){
        this.id = id;
        this.available = value;
    }
}

class GoodsList { //Catalogue
    #goods;
    constructor(filter = /./i, sortPrice, sortDir){
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }

    add(product) { // Add goods in catalogue
        return this.#goods.push(product);
    }

    get list() { //List goods in catalogue: may be use template for search and sort by ascending/descending price 
        let result = this.#goods.filter(good => this.filter.test(good.name));
        if (!this.sortPrice) 
            return result;
        if (this.sortPrice) {
            if (this.sortDir){
                result.sort((a, b) => a.price - b.price);
            } else {
                result.sort((a, b) => b.price - a.price);
                }
        }
        return result;
    }

    remove(id) {
        // delete product from the catalogue its id
        this.#goods.forEach((product) => {
            if (product.id === id) {
                var pos = this.#goods.indexOf(product);
                this.#goods.splice(pos,1);
            }
        })
    }
}

class BasketGood extends Good { 
    constructor(id, name, description, sizes, price, available, amount) {
        super (id, name, description, sizes, price, available);
        this.amount = amount;
    }

}

class Basket extends GoodsList{ //Client Basket
    #basketGoods
    constructor() {
        super();
        this.#basketGoods = [];
    }

    get totalAmount() { //Calculate in return total amount goods in basket
        return this.#basketGoods.reduce((accum, curr) => accum + curr.amount, 0);
    }

    get totalSum() { //Calculate in return total qty * cost invoice money goods in basket
        return this.#basketGoods.reduce((accum, curr) => accum + curr.amount * curr.price, 0);
    }
    
    add(good, amount=1) { //Add good to basket
        if (!this.#basketGoods.includes(good)){
            good.amount = amount;
            this.#basketGoods.push(good)
        } else {
            if ((this.#basketGoods.find((element) => element === good).amount += amount) <= 0)
                this.#basketGoods.splice(this.#basketGoods.indexOf(good),1);
        }
        return this.#basketGoods;
    }

    remove(good, amount) { //Delete good from basket
        //We use method add, but make quantity with minus sign
        amount *= -1;
        return this.add(good, amount);
    }

    clear() { //Full clear basket
        return this.#basketGoods = [];
    }

    removeUnavailable() { //Remove unavailable goods from basket
        return this.#basketGoods = this.#basketGoods.filter(el => el.available)
    }
}

//Example goods for Catalogue
const goods = [
    new Good (1,"Cap", "Cotton cap",["M, L"], 2500, true),
    new Good(34,"Jacket", "Windproof jacket",["S, M, L, XL"], 12500, false),
    new Good(78,"Trousers", "Cotton trousers",["XS, S, M, L, XL, XXL"], 7500, true),
    new Good(23,"Coat", "Wool coat",["S, M, L, XL"], 22700, true),
    new Good(19,"Shirt", "Cotton shirt",["S, M, L, XL"], 5300, false),
    new Good(234,"Dress", "Syntetic Dress",["XS, S, M, L"], 3100, true),
];

//Work with Catalogue
let goodsList = new GoodsList();
// Add some goods to the Catalogue
goodsList.add(goods[0]);
goodsList.add(goods[1]);
goodsList.add(goods[2]);
goodsList.add(goods[3]);
goodsList.add(goods[4]);
goodsList.add(goods[5]);
console.log('Our catalogue');
console.table(goodsList.list);
//Delete in list
goodsList.remove(34);
let good = new Good();
good.setAvailable(false);
console.log('Our catalogue after delete some goods');
console.table(goodsList.list);
console.log('With SortPrice only. Price descending.');
goodsList.sortPrice = true;
console.table(goodsList.list);
console.log('With SortPrice, SortDir = true. Price ascending');
goodsList.sortDir = true;
console.table(goodsList.list);
console.log('Filtered by the presence of the letter "O" or "o"');
goodsList.filter = /o/i;
console.table(goodsList.list);


// Work with Basket
let basketGoods = [
    new BasketGood (1,"Cap", "Cotton cap",["M, L"], 2500, false),
    new BasketGood(34,"Jacket", "Windproof jacket",["S, M, L, XL"], 12500, false),
    new BasketGood(78,"Trousers", "Cotton trousers",["XS, S, M, L, XL, XXL"], 7500, true),
    new BasketGood(23,"Coat", "Wool coat",["S, M, L, XL"], 22700, true),
    new BasketGood(19,"Shirt", "Cotton shirt",["S, M, L, XL"], 5300, true),
    new BasketGood(234,"Dress", "Syntetic Dress",["XS, S, M, L"], 3100, true),
]

let basketGood = new BasketGood();
let basket = new Basket()
// Add some goods to Basket
basket.add(basketGoods[0], 3);
basket.add(basketGoods[0], 5);
basket.add(basketGoods[1], 2);
basket.add(basketGoods[1], 5);
basket.add(basketGoods[3], 4);
basket.add(basketGoods[3]);
console.log("Your basket after add the goods including: ");
console.table(basket.add(basketGoods[0], 1));
console.log(`Total Amount in Basket: ${basket.totalAmount} pcs`);
console.log(`Total Invoice in Basket: ${String(basket.totalSum).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')} RUB \n`);
//Delete goods from the Basket
console.log("Your basket after delete some goods: ");
console.table(basket.remove(basketGoods[1], 5));
console.log("Your basket after delete some godds again. Quantity the goods <=0. We delete this position from basket: ");
console.table(basket.remove(basketGoods[1], 3));
console.log("Delete from the basket not available goods")
console.table(basket.removeUnavailable());
// Clear the Basket. Check
console.log(basket.clear());





