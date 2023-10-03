//Name Cases: 
//Store a person’s name in a variable, and then print that
// person’s name in lowercase, uppercase, and titlecase.

var name1 = 'amina'
console.log(name1.toLowerCase())
console.log(name1.toUpperCase())
function titlecase(names:string){
    let step1 = names.split(' ')
    let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substring(1)) 
    console.log(step2)
}

titlecase(name1)