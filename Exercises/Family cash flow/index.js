//Family cash flow

let balance = {
    gain: [1000, 200],
    expenses: [5000, 10]
}

const sum = (array) => {
    let total = 0;

    for(let value of array) {
        total += value
    }
    return total
}


const getBalance = () => {
    const calculateGain = sum(balance.gain)
    const calculateExpenses = sum(balance.expenses)

    const total = calculateGain - calculateExpenses

    const itsOk = total >= 0

    let balanceText = "negative"

    if(itsOk) {
        balanceText = "positive"
    }
    
    console.log(`your Balance is ${balanceText}: ${total}`)
}

getBalance()