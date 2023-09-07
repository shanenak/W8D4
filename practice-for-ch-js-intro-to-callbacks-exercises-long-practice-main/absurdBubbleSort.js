const readline = require("readline");
reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



function askIfGreaterThan(el1, el2, callback) {
    reader.question(`is ${el1} greater than ${el2}?`, response => {
        (response === "yes" ? callback(true) : callback(false)) })
};

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
    if (i == (arr.length - 1)) {
        outerBubbleSortLoop(madeAnySwaps)
        // want to reset i to zero if swapped
    } else if (i < arr.length - 1) {
        askIfGreaterThan(arr[i], arr[i + 1], (isGreaterThan) => {
            if (isGreaterThan) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                innerBubbleSortLoop(arr, i + 1, true, outerBubbleSortLoop)
            } else {
                innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop)
            }
        })
    }
};

function absurdBubbleSort(arr, sortCompletionCallback) {
    function outerBubbleSortLoop(madeAnySwaps) {
        if (madeAnySwaps) {
            innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop)
        } else {
            sortCompletionCallback(arr)
        }
    }
    outerBubbleSortLoop(true)
};

absurdBubbleSort([3, 2, 1], function(arr) {
    console.log("Sorted array: " + JSON.stringify(arr));
    reader.close();
});