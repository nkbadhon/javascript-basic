const phones = [
    { name: 'Samsung', camera: '12mp', price: 20000 },
    { name: 'Redmagic', camera: '12mp', price: 30000 },
    { name: 'xiaomi', camera: '12mp', price: 5000 },
    { name: 'Oneplus', camera: '12mp', price: 50000 },
    { name: 'iPhone', camera: '12mp', price: 2000 },
];

function cheapestPhone(phones) {

    var cheapPhone = phones[0];
    for (var i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (phone.price < cheapPhone.price) {
            cheapPhone = phone;
        }
        else { }
    }
    return cheapPhone;
};

const mySelection = cheapestPhone(phones);
console.log(mySelection);