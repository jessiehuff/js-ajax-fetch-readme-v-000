const app = "I don't do much.";

const token = 'e0797a6ec878f9977106b0ff3fb498ac5ba245e8'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json)); 