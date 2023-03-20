import axios from "axios";
axios.get('https://api.github.com/users/weslleyolli')
  .then(res => {
    console.log(res.data)
  })