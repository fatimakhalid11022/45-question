// Magicians:
// Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

// Great Magicians:
// Start with a copy of your program from Exercise 39. 
//Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.

// Unchanged Magicians: 
//Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, 
//return the new array and store it in a separate array. 
//Call show_magicians() with each array to show that you have one array of the original names 
//and one array with the Great added to each magician’s name.

//q41
//magician
function show_magicians(magicians:string[]){
    for(let magician of magicians)
    console.log(`${magician}`)
}
const magicianname =["hobbes","charles","john"]
show_magicians(magicianname)

//q42
//great mmagician

function make_great(magicians:string[]):string[]{
    const greatmagicians:string[]=[]
    for(let great of magicians)
    console.log(`the great "${great}"`)
return greatmagicians
}
const greatmagicians:string[] =make_great([...magicianname])
make_great(magicianname)
show_magicians(greatmagicians)


//q43
//unchanged magician
console.log("modified Magician names:")
show_magicians(greatmagicians)
//again calling show magician to show orignal magician
console.log("original magician name (unchanged):")
show_magicians(magicianname)