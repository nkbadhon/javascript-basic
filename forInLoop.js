var Items = {
    Name: 'Badhon',
    Age: 26,
    Ph: '01715922133',
    Add: 'Dhaka'
}

for (var i in Items) {
    var allKeys = i;
    var allValues = Items[i];
    console.log(allValues);
    console.log(allKeys);
}