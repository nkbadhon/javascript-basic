var numbers = [12, 45, 2, 66, 34, 87, 34, 22, 33, 77, 66, 54, 33, 77];

function add(x) {
    var Even = 0;
    var Odd = 0;
    for (var i = 0; i < x.length; i++) {
        var gotOne = x[i];
        switch (gotOne % 2) {
            case 0:
                Even = Even + gotOne;
                break;
            case 1: Odd = Odd + gotOne;
                break;
        }
    }
    console.log(Odd, Even);
}
add(numbers);