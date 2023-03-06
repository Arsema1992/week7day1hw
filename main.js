// Welcome to JavaScript

/*
    Anything in between is a comment
    HELLLOOOOOOOOOOOOOOOOOOOOOOO
*/

/* 
    Primitive data types: strings, integers, boolean,
    floats, arrays (python list equivalent), objects (like python dictionaries)

    JavaScript is a weakly typed language, like Python

    JavaScript variable casing:
    Python -> Snake casing, ex: this_is_a_variable
    JS -> Camel Casing, ex: thisIsAVariable
*/

// dylans_pet_snake vs dylansPetSnake

// Variable declaration
var helloWorld;

// Variable assignment
helloWorld = 'Hello World'; 

console.log(helloWorld)

// Now in one line:
var helloWorld2 = 'Hello World';

// JS print equivalent:
// console.log(helloWorld2);

var newVar = 'Value'
let newVar2 = 'Value2'
const newVar3 = 'Value3'

// Can't do this, because newVar3 is constant:
// newVar3 = 'Value4'

// Assigning an integer
let favoriteNumber = 11

// Assigning a float
let favoriteFloat = 5.4

// console.log(favoriteNumber, favoriteFloat)

// let sum = 11 + 5.4
let sum = favoriteNumber + favoriteFloat

// console.log(sum)

/* Declaring an array */

let favoriteNumbers = [9,10,11,21,43]

// console.log(favoriteNumbers)

// Indexing an array
// console.log(favoriteNumbers[0])

// Negative indexing????
// console.log(favoriteNumbers[-1]) // Not supported
// console.log(favoriteNumbers.at(-1)) // Supported in latest versions of node + browser

// The old school way
// console.log(favoriteNumbers[favoriteNumbers.length - 1])

// Update a value at an index
favoriteNumbers[1] = 14

// console.log(favoriteNumbers)

/* 
* Objects
*/
const person = {
    firstName: 'Adam',
    lastName: 'Smith',
    address: '123 Main St',
    city: 'Candyland',
    // keyToAccess: 'HI!'
}

// Accessing values from keys

// Square bracket notation/Index notation:
console.log(person['city'])

// Dot notation
console.log(person.city)

let keyToAccess = 'lastName'

console.log(person[keyToAccess])
console.log(person.keyToAccess)

// Update existing key's value
person.firstName = 'Dylan'

console.log(person)

/* person = {
    firstName: 'Dylan',
    lastName: 'Smith',
    address: '123 Main St',
    city: 'Candyland'
} */

// Adding a new key/value pair
person.favoriteColor = 'Yellow'
console.log(person)

/* Conditionals */

let middleName = 'James'

/*  Print 'Hello Gregory' if middle name is gregory
    If middle name is James print 'Hey james'
    otherwise print 'not gregory :(' */

if (middleName == 'Gregory') {
    console.log('Hello Gregory')
} else if (middleName == 'James') {
    console.log('Hey james')
} else {
    console.log('not gregory :(')
}

let id1 = 10
let id2 = '10'

if (id1 == id2) {
    console.log('They are equal!')
}

if (id1 === id2) {
    console.log('They are equal again!')
}

// === => Checks the value and the type for equality
// == => Checks the value

/* Formatted Strings / Template Strings / Template Literals */
// (Our 'f' strings from python)
const dogName = 'Max'

const dogOutput = `Your dog's name is ${dogName}`
console.log(dogOutput)

const dogOutput2 = `Your dog's name is ${dogName}.
${dogName} is a good dog.`
console.log(dogOutput2)

/* 
* Functions in JavaScript
*/

/* Classic function */
function addTwo(num) {
    return num + 2
}

// var addTwo = 'Test'

console.log(addTwo(4))

/* Variable functions */
const addFour = function(num) {
    return num + 4
}

// var addFour = 'This'

console.log(addFour(6))

// Arrow functions!
const addSix = (num) => {
    return num + 6
}

// Anonymous functions!!!!!!
const addEight = (num) => num + 8

console.log(addEight(14))

/* For loops */

const myNums = [81, 18, 12, 21, 4]

// Traditional for loops
for (let i = 0; i < myNums.length; i++) {
    console.log(i)
}

// Start from the end and go backwards
for (let i = myNums.length - 1; i >= 0; i--) {
    console.log(i)
}

// for (variable creation; condition; incrementor/decrementor)

const shoppingCart = {
    apples: 3,
    bananas: 32,
    pizza: 1,
    kiwi: 4
}

// for of
// Gets each individual value from the array and stores it in currNum for each iteration
for (let currNum of myNums) {
    console.log(currNum)
}

for (let i of Object.keys(shoppingCart)) {
    console.log(i)
}

for (let i of Object.values(shoppingCart)) {
    console.log(i)
}

// for in
// Gets each individual index from the array and stores it in idx for each iteration
// like for idx in range(len(myNums))
for (let idx in myNums) {
    console.log(idx)
}

for (let i in shoppingCart) {
    console.log(i)
}

let start = 1
while (start < 10) {
    console.log(start)
    start++
}
start = 1
while (true) {
    console.log(start)
    start++

    if (start > 10) {
        break
    }
}
