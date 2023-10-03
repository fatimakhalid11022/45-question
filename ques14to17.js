//14
//Guest List:
// If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.
let guests = ['saba', 'habiba', 'ayesha', 'dania'];
console.log(`hello ${guests[0]} ,you are invited on dinner party on saturday`);
console.log(`hello ${guests[1]} ,you are invited on dinner party on saturday`);
console.log(`hello ${guests[2]} ,you are invited on dinner party on saturday`);
console.log(`hello ${guests[3]} ,you are invited on dinner party on saturday`);
//q15
//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
//You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14.
// Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
console.log(`${guests[0]}is unavailable`);
guests.shift();
console.log(guests);
guests.unshift('Hira');
console.log(guests);
console.log(`hello ${guests[0]},come to the dinner party`);
console.log(`hello ${guests[1]},come to the dinner party`);
console.log(`hello ${guests[2]},come to the dinner party`);
console.log(`hello ${guests[3]},come to the dinner party`);
//16
//More Guests:
// You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. 
//Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. //
//• Print a new set of invitation messages, one for each person in your list.
console.log(`${guests},i found a new big dining table,so i am inviting some more people on party`);
guests.unshift('Eman');
guests.splice(2, 0, 'Rimsha');
guests.push('rukhsar');
console.log(guests);
console.log(`Hello ${guests[0]},you are invited wholeheartedly `);
console.log(`Hello ${guests[1]},you are invited wholeheartedly `);
console.log(`Hello ${guests[2]},you are invited wholeheartedly `);
console.log(`Hello ${guests[3]},you are invited wholeheartedly `);
console.log(`Hello ${guests[4]},you are invited wholeheartedly `);
console.log(`Hello ${guests[5]},you are invited wholeheartedly `);
console.log(`Hello ${guests[6]},you are invited wholeheartedly `);
//q17
//Shrinking Guest List: 
//You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
//• Start with your program from Exercise 16.
// Add a new line that prints a message saying that you can invite only two people for dinner.
//• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
//• Print a message to each of the two people still on your list, letting them know they’re still invited.
//• Remove the last two names from your list, so you have an empty list.
// Print your list to make sure you actually have an empty list at the end of your program.
console.log(`i can't invite all the guests so just two are invited because delivery of dining table is late`);
console.log(`i can't invite all the guests so just two are invited because delivery of dining table is late`);
guests.pop();
console.log(`sorry,${guests[5]},my mistake i can't invite you due to shortage of space`);
guests.pop();
console.log(`sorry,${guests[4]},my mistake i can't invite you due to shortage of space`);
guests.pop();
console.log(`sorry,${guests[3]},my mistake i can't invite you due to shortage of space`);
guests.pop();
console.log(`sorry,${guests[2]},my mistake i can't invite you due to shortage of space`);
guests.pop();
console.log(guests);
console.log(`${guests[0]},you are still invited. Be on time`);
console.log(`${guests[1]},you are still invited. Be on time`);
console.log(guests);
guests.pop();
guests.pop();
console.log(guests);
export {};
