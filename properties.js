var shoppingCart = {
    books: 3,
    sunglass: 1,
    koyboard: 5,
    mouse: 1,
    pen: 3
}

var penCount = shoppingCart.pen;

var properties = Object.keys(shoppingCart);
console.log(properties);

var propertyValue = Object.values(shoppingCart);
console.log(propertyValue);