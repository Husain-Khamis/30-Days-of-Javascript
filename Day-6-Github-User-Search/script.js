const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');
const errorMessage = document.getElementById('errorMessage');

const devCard = document.getElementById('devCard');
const avatarIcon = document.getElementById('avatar');
const usernameArea = document.getElementById('usernameArea');
const bioArea = document.getElementById('bioArea');
const followersArea = document.getElementById('followers');
const mostStared = document.querySelector('#mostStared');
const mostForked = document.querySelector('#mostForked');
const lastPushed = document.querySelector('#lastPushed');


searchBtn.addEventListener('click', function(){
    const username = searchBar.value;
    errorMessage.classList.add('hidden');

    if (username.length === 0){
        errorMessage.classList.remove('hidden');
        devCard.classList.add('hidden');
        errorMessage.textContent = "Error, Please enter a valid Username"
    } else {
        fetchUsername(username);
    }
})

async function fetchUsername(username) {

    const url = `https://api.github.com/users/${username}`;
    const repoUrl = `https://api.github.com/users/${username}/repos`;

    try {

        const res = await fetch(url);

        if (res.ok === false){
            if (res.status === 404) {
                errorMessage.textContent = "Error, Username does not exists!";
            }
            if (res.status === 403) {
                errorMessage.textContent = "API rate limit exceeded, please try again later";
            }
            devCard.classList.add('hidden');
            errorMessage.classList.remove('hidden');
            return;
        }
        const userData = await res.json();

        const resp = await fetch(repoUrl);
        const repoData = await resp.json();

        const avatar = userData.avatar_url;
        const bio = userData.bio;
        const follower = userData.followers;

        const starred = repoData.reduce((best, current) => {
            if (current.stargazers_count > best.stargazers_count){
                return current;
            } else {
                return best;
            }
        });

        const forked = repoData.reduce((best, current) => {
            if (current.forks_count > best.forks_count) {
                return current;
            } else {
                return best;
            }
        })

        const lastUpdated = repoData.reduce((best, current) => {
            if (new Date(current.pushed_at) > new Date(best.pushed_at)) {
                return current;
            } else {
                return best;
            }
        })

        avatarIcon.src = avatar;
        usernameArea.textContent = username;
        bioArea.textContent = bio || '-';
        followersArea.textContent = `Number of Followers: ${follower}`;
        mostStared.textContent = starred.name;
        mostForked.textContent = forked.name;
        lastPushed.textContent = lastUpdated.name;

        mostStared.onclick = () => window.open(starred.html_url, '_blank');
        mostForked.onclick = () => window.open(forked.html_url, '_blank');
        lastPushed.onclick = () => window.open(lastUpdated.html_url, '_blank');

        devCard.classList.remove('hidden');

        console.log('Most starred:', starred.name, starred.stargazers_count);
        console.log('Most forked:', forked.name, forked.forks_count);
        console.log('Last pushed:', lastPushed.name, lastPushed.pushed_at);
    }catch (err) {
        if (err.message === 'Failed to fetch') {
            errorMessage.textContent = "No Internet";
        } else {
            errorMessage.textContent = "Error, Failed to fetch Username";
        }
        errorMessage.classList.remove('hidden');
        devCard.classList.add('hidden');
    }
}