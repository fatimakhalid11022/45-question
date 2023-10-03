//Alien Colors #1:
// Imagine an alien was just shot down in a game.
// Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
//• Write an if statement to test whether the alien’s color is green.
// If it is, print a message that the player just earned 5 points.
//• Write one version of this program that passes the if test and another that fails.
// (The version that fails will have no output.)
//passed version
let alein_color = "green";
if (alein_color === "green") {
    console.log("player earned 5 points");
}
//failed version
let alein_color2 = "yellow";
if (alein_color2 === "green") {
    console.log("player earned 5 points");
}
//q 26
//Alien Colors #2: 
//Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
//• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
//• If the alien’s color isn’t green, print a statement that the player just earned 10 points.
//• Write one version of this program that runs the if block and another that runs the else block.
//runs IF block
let alien_color3 = "green";
if (alien_color3 === "green") {
    console.log("You earned 5 POINTS for shooting a Green Alien");
}
else {
    console.log("You earned 10 POINTS for shooting a Yellow or Red Alien");
}
//runs ELSE block
let alien_color4 = "yellow";
if (alien_color4 === "green") {
    console.log("You earned 5 POINTS for shooting a Green Alien");
}
else {
    console.log("You earned 10 POINTS for shooting a Yellow or Red Alien");
}
//q 27
//Alien Colors #3:
// Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.
//• If the alien is yellow, print a message that the player earned 10 points.
//• If the alien is red, print a message that the player earned 15 points.
//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//version1
const alien_color5 = "green";
if (alien_color5 === "green") {
    console.log("You earned 5 POINTS for shooting a Green Alien");
}
else if (alien_color5 === "yellow") {
    console.log("You earned 10 POINTS for shooting a Yellow Alien");
}
else {
    console.log("You earned 15 POINTS for shooting a Red Alien");
}
//version2
const alien_color6 = "yellow";
if (alien_color6 === "green") {
    console.log("You earned 5 POINTS for shooting a Green Alien");
}
else if (alien_color6 === "yellow") {
    console.log("You earned 10 POINTS for shooting a Yellow Alien");
}
else {
    console.log("You earned 15 POINTS for shooting a Red Alien");
}
//version3
const alien_color7 = "red";
if (alien_color7 === "green") {
    console.log("You earned 5 POINTS for shooting a Green Alien");
}
else if (alien_color3 === "yellow") {
    console.log("You earned 10 POINTS for shooting a Yellow Alien");
}
else {
    console.log("You earned 15 POINTS for shooting a Red Alien");
}
export {};
