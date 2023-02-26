const transformDegree = (degrees) => {
    const celsiusExists = degrees.toUpperCase().includes('C')
    const fahrenheitExist = degrees.toUpperCase().includes('F')

    if (!celsiusExists && !fahrenheitExist) {
        throw new Error('Invalid')
    }
    //ideal flow
    let updatedDegree = Number(degrees.toUpperCase().replace('F', ''))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSing = 'C'

    //alternate flow
    if (celsiusExists) {
        updatedDegree = Number(degrees.toUpperCase().replace('C', ''))
        formula = celsius => celsius * 9/5 + 32
        degreeSing = 'F'
    }

    return formula(updatedDegree) + degreeSing
}

try {
    console.log(transformDegree('50F'))
    console.log(transformDegree('10C'))
} catch (e) {
    console.log(e.message)
}
