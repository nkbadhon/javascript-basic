var numbers = [12, 45, 2, 66, 34, 87, 34, 22, 33, 77, 66, 54, 33, 77]


function addEvenAdder(x) {
    var addOfEven = 0;
    var addOfOdd = 0;
    for (var i = 0; i < x.length; i++) {
        var gotonenumber = x[i];
        if (gotonenumber % 2 == 0) {
            addOfEven = addOfEven + gotonenumber;
        }
        else {
            addOfOdd = addOfOdd + gotonenumber
        }
    }
    console.log(addOfEven, addOfOdd);
}

addEvenAdder(numbers);