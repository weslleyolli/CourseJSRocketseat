//throw(disparar)

const sayMyName = (name = '') => {
    if(name === '') {
        throw "Name is necessary"
    }

    console.log('after than error')
}
//try... catch
try {
    sayMyName()
}   catch(e) {
    console.log(e)
}
