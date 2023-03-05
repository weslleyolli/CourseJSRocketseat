//create element
const div = document.createElement('div')
div.innerText = "hello devs"

//insert before
const body = document.querySelector('body')
const script = body.querySelector('script')
body.insertBefore(div, script)