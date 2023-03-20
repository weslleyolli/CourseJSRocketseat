import axios from 'axios'

Promise.all([
  axios.get('https://api.github.com/users/weslleyolli'),
  axios.get('https://api.github.com/users/weslleyolli/repos')
])
.then( responses => {
  console.log(responses[0].data.login)
  console.log(responses[1].data.length)
})
.catch (error => console.log(error.message))