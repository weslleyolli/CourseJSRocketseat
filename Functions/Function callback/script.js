//function callback

function sayMyName(name){
    console.log("before than execute the calback function ")
    name()
    console.log('after than execute the callback function')
}

sayMyName(
    () => {
        console.log("I'm in call back")
    }
)