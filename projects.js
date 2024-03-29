const projectsList = document.getElementById("projects-list");

const projekte = [
  {
    name: "Puzzle",
    url: "https://axelh97.github.io/Abschlussprojekt-JavaScript-Puzzle/",
    backgroundImage: "url('images/puzzle.png')",
  },
  {
    name: "Städte in Thüringen",
    url: "https://axelh97.github.io/Stadte-in-Thueringen/",
    backgroundImage: "url('images/staedte-in-thueringen.png')",
  },
  {
    name: "altes Portfolio",
    url: "https://axelh97.github.io/Abschlussprojekt-html-css-Portfolio/",
    backgroundImage: "url('images/portfolio1.png')",
  },
];

projekte.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  projectElement.style.backgroundImage = project.backgroundImage;

  const nameElement = document.createElement("h3");
  nameElement.textContent = project.name;

  const linkElement = document.createElement("a");
  linkElement.href = project.url;
  linkElement.target = "_blank";
  linkElement.textContent = "Ansehen";

  projectElement.appendChild(nameElement);
  projectElement.appendChild(linkElement);
  projectsList.appendChild(projectElement);
});

const githubButton = document.createElement("a");
githubButton.href = "https://github.com/axelh97";
githubButton.target = "_blank";
githubButton.textContent = "Mein GitHub-Profil";
githubButton.classList.add("github-button");

projectsList.parentNode.insertBefore(githubButton, projectsList.nextSibling);
