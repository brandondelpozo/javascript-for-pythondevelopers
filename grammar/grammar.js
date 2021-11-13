// --Declaring variables--
// --------const---------
const firstName = "Jean-Luc"
const lasName = "Picard"

const PI = 3.14159
const API_KEY = 'cnview8773jass'

// ------------let---------
let ship = "Stargazer"
ship = "Enterprise" // ship now equals "Enterprise"

// var, it was deprecated after ES6, but it's good to know it.

// ----------Data types--------
// typeof and equality
typeof(1) // returns "number"
typeof("hello") // returns "string"

// ----------loose equality and strict equality
let myAge = 38
const age = "38"
myAge == age // this return True, loose equality operator
myAge === age // this return False, strict equality operator

//--------Array and objects-------
const officers = ['Riker','Data','Work']
const captain = {
    "name": "Jean-Luc Picard",
    "age": 62,
    "serialNumber": "SP 937-215",
    "command": "NCC 1701-D",
    "seniorStaff": officers
}

// ----------Conditionals---------
let min

if (a < b) {
    min = a
} else {
    min = b
}
// conditionals in one line
let min = (a < b) ? a : b
// other example
let myVar = 2
if (typeof(myVar) === "number") {
    myVar++; // myVar now equals 3
}
console.log(myVar)

// ------------for loops-------------
const names = ["Alice","Bob","Carol"]

for (let i =0; i < names,length; i++) {
    console.log(names[i])
}

// for..in loops
const officers = ['Riker','Data','Worf']

const captain = {
    "name": "Jean-Luc Picard",
    "age": 62,
    "serialNumber": "SP 937-215",
    "command": "NCC 1701-D",
    "seniorStaff": officers
}

let myString = ''

for (let x in captain) {
    myString += captain[x] + ' '
}

// for..of loops
for (const officer of officers) {
    console.log(officer)
}

// ------- Functions -------
function addOne(val) {
    return ++val
}

console.log(addOne(5))

// functions declarations
function functionName(optionalParameters, separatedByComas) {
    // do work
    // optionally return a value
}

// function expressions
const addOne = function(val) {
    return ++val
}