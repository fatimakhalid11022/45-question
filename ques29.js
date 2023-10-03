//Favorite Fruit: 
//Make a array of your favorite fruits,
// and then write a series of independent if statements that check for certain fruits in your array.
//• Make a array of your three favorite fruits and call it favorite_fruits.
//Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
let favorite_fruits = ["banana", "grapes", "pemogranate"];
if (favorite_fruits.includes("banana")) {
    console.log("you really like BANANA");
}
if (favorite_fruits.includes("grapes")) {
    console.log("you really like GRAPES");
}
if (favorite_fruits.includes("pemogranate")) {
    console.log("you really like PEMOGRANATE");
}
if (favorite_fruits.includes("kiwi")) {
    console.log("you really like KIWI");
}
else {
    console.log("you dont like KIWI ");
}
if (favorite_fruits.includes("peach")) {
    console.log("you really like PEACH");
}
else
    (console.log("you don't like PEACH"));
export {};
