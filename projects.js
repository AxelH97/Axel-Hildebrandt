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
    backgroundImage: "url('images/portfolio.png')",
  },
];

projekte.forEach((project) => {
  const projectElement = document.createElement("div");
  projectElement.classList.add("project");
  projectElement.style.backgroundImage = project.backgroundImage;
  projectElement.style.backgroundSize = "cover";
  projectElement.style.backgroundPosition = "center";

  projectElement.innerHTML = `
      <h3>${project.name}</h3>
      <a href="${project.url}" target="_blank">Ansehen</a>
    `;
  projectsList.appendChild(projectElement);
});
