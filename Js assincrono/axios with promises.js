import axios from 'axios'

axios
  .get('https://api.github.com/users/weslleyolli')
  .then(res => {
    const user = res.data

    axios.get(user.repos_url)

    return axios.get(user.repos_url)
  })
  .then( repos => console.log(repos))
  .catch( error => console.log(error))