// Arrays manipulating

let techs = ['html', 'css', 'js']

//adding a item in last position

techs.push("TypeScript")
console.log(techs)

//adding in start
techs.unshift("TailwindCss")
console.log(techs)

//remove the last
techs.pop()
console.log(techs)

//remove the first item
techs.shift()
console.log(techs)

//take only some items
console.log(techs.slice(0, 2))

//remove one or more items in any position
techs.splice(1, 1)
console.log(techs)

//find the position of an element in array
console.log(techs.indexOf('js'))