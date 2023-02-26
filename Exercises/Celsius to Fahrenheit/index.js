const transformDegree = (degrees) => {
    const celsiusExists = degrees.toUpperCase().includes('C')
    const farenheitExist = degrees.toUpperCase().includes('F')  

    if (!celsiusExists && !farenheitExist) {
        throw new Error('Invalid')
    }

}

try {
    transformDegree('50F')
} catch (e) {
    console.log(e.message)
}