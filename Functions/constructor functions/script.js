function Person(name, walk) {
    this.name = name
    this.walk = () => {
        return this.name  + " is walking"
    }
}

const weslley = new Person("Weslley")
const gael = new Person('Gael')
console.log(weslley.walk())
console.log(gael.walk())

let date = new Date("2022-12-01")
console.log(date)