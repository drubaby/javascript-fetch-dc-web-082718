const app = "I don't do much.";

const token = '0568dddd13fcde437ddbdd9d18ed1399031cadd3'

fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
