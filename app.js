const APIURL = "https://api.github.com/users/shariq";
const main = document.querySelector('main');


const getUser = async (username)=>{
    const response = await fetch(APIURL + username);
    const data = await response.json();
    const card = `<div class="card">
            <div>
                <img class="avatar" src="${data.avatar_url}" alt="User Avatar" />
            </div>
            <div class="user-info">
                <h2 id="name">${data.name}</h2>
                <p id="bio">${data.bio}</p>
                
                <ul class="info">
                    <li>${data.followers}<strong>Followers</strong>###</li>
                    <li>${data.following}<strong>Following</strong>###</li>
                    <li>${data.public_repos}<strong>Repo</strong>###</li>
                </ul>

                <div id="repos">
                   
                </div>
            </div>
        </div>`
    main.innerHTML = card;
    getRepos(username);
}

getUser("tayloretwell");

const getRepos= async (username)=>{
    const repos = document.querySelector("#repos")
    const response = await fetch(APIURL + username + "/repos");
    const data = await response.json();
    data.forEach(
        (item) => {
            const elem = document.createElement("a");
                elem.classList.add("repo");
                elem.href = item.html_url
                elem.innertext = item.name
                elem.target = "_blank"
                repos.appendChild(elem)
            }
        )
    }
    
const formSubmit = () => {
    
    if (searchBox.value != ""){
        getUser(searchBox.value);
        searchBox.value = ""
    }
    return false;
}
    
searchBox.addEventListerner("focusout"),
    function(){
        formSubmit();
    }




 // <a href="#" target="_blank" class="repo">Repo 1</a>
                    // <a href="#" target="_blank" class="repo">Repo 2</a>
                    // <a href="#" target="_blank" class="repo">Repo 3</a>