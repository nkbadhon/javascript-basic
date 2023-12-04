const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
};

// for (let key in person) {
//     console.log(key);
// }

for (var a in person) {
    console.log(person[a]);
}
