//T-Shirt: 
//Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
//The function should print a sentence summarizing the size of the shirt and the message printed on it.
// Call the function.
function make_shirt(size, text) {
    console.log(`The size ${size} of the shirt with a label of "${text}"`);
}
make_shirt(34, "ME AND MYSELF");
//q 37
//Large Shirts://
// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
//modification of make_shirts
function make_shirt2(size = "large", text = "I LOVE TYPESCRIPT") {
    if (size === "medium") {
        console.log("I LOVE TYPESCRIPT");
    }
    else {
        console.log(`the size ${size} of the shirt with the label of "${text}" `);
    }
}
make_shirt2("medium");
make_shirt2("large");
make_shirt2("56", "FAT BOY");
export {};
