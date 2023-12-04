var shoppingCart = {
    books: 3,
    sunglass: 1,
    koyboard: 5,
    mouse: 1,
    pen: 3
}

var keys = Object.keys(shoppingCart);
console.log(keys);

var values = Object.values(shoppingCart)
console.log(values);


for (var i = 0; i < keys.length; i++) {
    console.log(keys[i]);
}
// for (let x in shoppingCart) {
//     console.log(x);
// }