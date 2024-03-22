document.addEventListener("DOMContentLoaded", function () {
    const nameElement = document.querySelector('#name'); //pega os elementos
    const usernameElement = document.querySelector('#username'); 
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api/github.com/users/MarceloSilveira1709')
        .then(function(res) {
        return res.json();
        })

        .then(function(json) {
            nameElement.innerText = json.name; //retorna o text
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            followersElement.innerText = json.followersElement;
            followingElement.innerText = json.followingElement;
            repos.innerText = json.public_repos;
            linkElement.href = json.html_url;
    })
})