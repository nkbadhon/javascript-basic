var numbers = [20, 30, 40];


function getSum(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        var element = numbers[i]
        sum = sum + element;

    }
    return sum;
}

var abc = getSum(numbers)
console.log(abc);