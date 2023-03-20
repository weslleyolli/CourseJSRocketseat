const promessa = new Promise(function (resolve, reject) {
    return resolve("ok");
});

async function start() {
    try {
        const result = await promessa;
        console.log(result);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("rounded ever");
    }
}
start();

// with fetch
async function start() {
    try {
        const url = "https://api.github.com/users/weslleyolli"
        const user = await fetch(url).then(r => r.json());
        const repos = await fetch(user.repos_url).then(r => r.json());
        console.log(repos);
    } catch (e) {
        console.log(e)
    }
}

start();

// with axios
import axios from 'axios'

async function start() {
    try {
        const user = await axios.get('https://api.github.com/users/weslleyolli')
        const repos = await axios.get(user.data.repos_url)
        console.log(repos.data)
    } catch (e) {
        console.log(e);
    }
}

start();