const REPO_API_URL = "https://api.github.com/users/juan1018pineda/repos";

function createElementWithHtml(tag, innerHTML){
    const element = document.createElement(tag);
    element.innerHTML = innerHTML;
    return element;
}

function appendChilds(container, childs){
    childs.forEach(child => container.appendChild(child));
}

function showRepos(repos) {
  let render = document.getElementById("repos");
  let repoList = document.createElement("ul");
  repos.forEach((repo) => {
    const repoLink = createElementWithHtml('a', 'Ver repositorio');
    repoLink.setAttribute('href', repo.html_url);
    repoLink.setAttribute('target', '_blank');
    const repoItem = createElementWithHtml('li', repo.name);
    const repoOwner = createElementWithHtml('p', repo.owner.login);
    const RepoImg = document.createElement("img");
    RepoImg.setAttribute('src',repo.owner.avatar_url);
    appendChilds(repoItem, [repoOwner, RepoImg, repoLink]);
    repoList.appendChild(repoItem);
  });
  render.appendChild(repoList);
}

function getRepos() {
  fetch(REPO_API_URL)
    .then((result) => {
      return result.json();
    })
    .then((repos) => {
      showRepos(repos);
    });
}

getRepos();
