let info : any;

info = [1, 2, 3]
info = "Weslley"
info = true
info = 10.50

//the type any can be anything, array, string, boolean, number, but warning

function calculate(a: any, b: any ){
    return a + b
}

//it is asking for you specify the type, but i can to force to be a any

calculate(1,3)
calculate('1', 3)

//it is agree any types