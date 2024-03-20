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

  projectElement.addEventListener("mouseenter", () => {
    nameElement.style.opacity = "1";
    linkElement.style.opacity = "1";
  });

  projectElement.addEventListener("mouseleave", () => {
    nameElement.style.opacity = "0";
    linkElement.style.opacity = "0";
  });

  projectElement.appendChild(nameElement);
  projectElement.appendChild(linkElement);
  projectsList.appendChild(projectElement);
});
