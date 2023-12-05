const a = [34, 24, 76, 34, 93, 57, 70, 100];

LargestNum(a);
function LargestNum(x) {

    var largest = x[0];
    for (var i = 0; i < x.length; i++) {

        if (x[i] > largest) {
            largest = x[i];
        };
        // console.log(x[i]);
    }
    console.log(largest);
}