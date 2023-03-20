//pending: stage initial, as soon as the object is initialized
//fulfilled: The promise was completed with sucess
//rejected: The promise was rejected, there is a error
//settled: be with sucess or erro, it was finally resolved

//promise: it's the promise that something will happen

//sintax
const numberRandom = Math.floor(Math.random() * 40) + 1 
console.log(numberRandom)

console.log('order a car')
const promise =  new Promise((resolve, reject) => {
    if (numberRandom <= 20){
        return resolve('the car arrived')
    }else{
        return reject('the car was rejected')
    }
        
})

console.log('waiting')

promise
.then(result => console.log(result))
.catch(err => console.log(err))
.finally(() => console.log('done'));