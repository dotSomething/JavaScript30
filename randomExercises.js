// Exercises provided by https://coursework.vschool.io/array-reduce-exercises/

// Excersie 1 - Sum all numbers in array
const myArray = [1, 2, 3];
const total = myArray.reduce((acc, val) => {
	return acc + val
}, 0);
console.log('myArray totals: ' + total);
console.log('');
console.log('');

// // Exercise 2 - Return the array as a string
numberArray = [1, 2, 3];
const myString = numberArray.reduce((acc, val) => {
	if (val) {
		return acc + `${val}`;
	}
});
console.log('myString is ' + myString + ' and myString is a ' + typeof(myString));
console.log('');
console.log('');

// Exercise 3  - Return number of people who voted.
const voters = [
	{name:'Bob' , age: 30, voted: true},
	{name:'Jake' , age: 32, voted: true},
	{name:'Kate' , age: 25, voted: false},
	{name:'Sam' , age: 20, voted: false},
	{name:'Phil' , age: 21, voted: true},
	{name:'Ed' , age:55, voted:true},
	{name:'Tami' , age: 54, voted:true},
	{name: 'Mary', age: 31, voted: false},
	{name: 'Becky', age: 43, voted: false},
	{name: 'Joey', age: 41, voted: true},
	{name: 'Jeff', age: 30, voted: true},
	{name: 'Zack', age: 19, voted: false}
];

const peopleWhoVoted = voters.reduce((acc, val) => {
	val.voted === true ? acc++ : acc;
	return acc;
}, 0);

console.log(peopleWhoVoted + ' people voted with a reduce.');
console.log('');
console.log('');

// Exercise 3b  - Return number of people who voted WITHOUT using reduce

const moreVoters = [
	{name:'Bob' , age: 30, voted: true},
	{name:'Jake' , age: 32, voted: true},
	{name:'Kate' , age: 25, voted: false},
	{name:'Sam' , age: 20, voted: false},
	{name:'Phil' , age: 21, voted: true},
	{name:'Ed' , age:55, voted:true},
	{name:'Tami' , age: 54, voted:true},
	{name: 'Mary', age: 31, voted: false},
	{name: 'Becky', age: 43, voted: false},
	{name: 'Joey', age: 41, voted: true},
	{name: 'Jeff', age: 30, voted: true},
	{name: 'Zack', age: 19, voted: false}
];

let count = 0;

const morePeopleWhoVoted = moreVoters.map((curr) => {
	if (curr.voted === true) {
		count++;
	}
});

console.log(count + ' people voted with a map.');
console.log('');
console.log('');

const updatedVoterRecords = moreVoters.map((newcurr) => {
	// if (newcurr.voted === true) {
	// 	newcurr.note = "Thanks";
	// }
	// return newcurr;

	newcurr.voted ? newcurr.note = "Thanks" : newcurr;
	return newcurr;

});

// console.log('Updated Voter Records' + updatedVoterRecords); // BAD!!!!!!!!  The '+' sign is confusing console.log because it can't concatenate with an object.
console.log('Updated Voter Records', updatedVoterRecords); // GOOD
console.log('');
console.log('');

let forEachCounter;
voters.forEach(count => {
	voters.voted === true ? ++forEachCounter : forEachCounter;
	return forEachCounter;
})
