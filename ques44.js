//Sandwiches:
// Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
// Call the function three times, using a different number of arguments each time.
function sandwich(items) {
    console.log("summary :", items);
}
sandwich(["cheesy", 2, "chicken", "two sachets of katchup"]);
sandwich(["club", 5, "chicken", "two packs of tissues"]);
sandwich([3, " grill chicken", "two sachets of katchup"]);
export {};
