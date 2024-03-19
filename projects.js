const projectsList = document.getElementById("projects-list");

const projekte = [
  {
    name: "Puzzle",
    url: "https://axelh97.github.io/Abschlussprojekt-JavaScript-Puzzle/",
  },
  {
    name: "Städte in Thüringen",
    url: "https://axelh97.github.io/Stadte-in-Thueringen/",
  },
  {
    name: "altes Portfolio",
    url: "https://axelh97.github.io/Abschlussprojekt-html-css-Portfolio/",
  },
];

projekte.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  projectElement.innerHTML = `
        <h3>${project.name}</h3>
       
        <a href="${project.url}" target="_blank">Ansehen</a>
    `;
  projectsList.appendChild(projectElement);
});
