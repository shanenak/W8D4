const readline = require("readline");
reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
    if (numsLeft > 0) {
        reader.question('Provide a number: ', response => {
            sum += parseInt(response)
            // completionCallback prints the new sum
            completionCallback(sum)
            // recursion on new sum and decrement numsLeft
            addNumbers(sum, numsLeft - 1, completionCallback)
            })
        
    } else if (numsLeft === 0) {
        reader.close()
    }
};

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));