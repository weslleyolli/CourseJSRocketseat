//chapter exercise
//1- create variable
var weight 
//2- What type of data is the variable above
console.log(typeof weight)
//3- declare a variable and assign values ​​to each of the data
let name = 'Weslley'
let age = 24
let stars = 100.50
let inSubscribed = true

//4- The variable student over is what type of data
let student = {
    name: 'Weslley',
    age: 24,
    weight: 100.50,
    inSubscribed : true
};

console.log(typeof student)

console.log(`${student.name} have ${student.age} weighs ${student.weight}`)

//5- Declare a variable type of array

const students = [{
    student
}]

//6 place in consl the value of position zero of array above

console.log(students[0])

const gael = {
    name: 'gael',
    age: 2,
    weight: 11.9,
    inSubscribed: true,
}

students[1] = gael
console.log(students)