var ShoppingCart = [
    { name: 'shoe', price: 1500, quantity: 3 },
    { name: 'shirt', price: 1500, quantity: 3 },
    { name: 'pant', price: 1500, quantity: 3 },
    { name: 'belt', price: 1500, quantity: 3 },
    { name: 'perfume', price: 1500, quantity: 3 },
    { name: 'muja', price: 1500, quantity: 3 }
];


function cartCalculation(cart) {
    var money = 0;
    for (var i = 0; i < cart.length; i++) {
        var obj = cart[i];
        var totalprice = obj.price * obj.quantity;
        money = money + totalprice;
    }
    return money;
    // console.log(cart);
};

const total = cartCalculation(ShoppingCart);
console.log(total);