const REPO_API_URL = "https://api.github.com/users/juan1018pineda/repos";

function createElementWithHtml(tag, innerHTML) {
  const element = document.createElement(tag);
  element.innerHTML = innerHTML;
  return element;
}

function appendChilds(container, childs) {
  childs.forEach((child) => container.appendChild(child));
}

function setHtmlTag(element, tag, value) {
  return element.setAttribute(tag, value);
}

function showRepos(repos) {
  let render = document.getElementById("repos");
  let repoList = document.createElement("ul");
  repos.forEach((repo) => {
    const repoLink = createElementWithHtml("a", "Ver repositorio");
    const repoItem = createElementWithHtml(
      "li",
      `<span><b>Project Name:</b> ${repo.name}</span>`
    );
    const repoOwner = createElementWithHtml(
      "p",
      `<b>Author:</b> ${repo.owner.login}`
    );
    const RepoImg = document.createElement("img");
    setHtmlTag(repoLink, "href", repo.html_url);
    setHtmlTag(repoLink, "target", "_blank");
    setHtmlTag(RepoImg, "src", repo.owner.avatar_url);
    appendChilds(repoItem, [repoOwner, RepoImg, repoLink]);
    repoList.appendChild(repoItem);
  });
  render.appendChild(repoList);
}

async function getRepos() {
  const response = await fetch(REPO_API_URL);
  showRepos(await response.json());
}

getRepos();
