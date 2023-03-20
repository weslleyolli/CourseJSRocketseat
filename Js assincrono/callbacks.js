//functions accept any type of data with arguments
function displayData(data) {
    console.log('other task')
    console.log(data());
}

displayData(function() {
    return 'Hello World!'
})