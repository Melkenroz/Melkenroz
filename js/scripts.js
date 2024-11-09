"use strict";

// declarations
let navButton = document.querySelector(".menu-toggler");
let barTop = document.querySelector(".top");
let barMiddle = document.querySelector(".middle");
let barBottom = document.querySelector(".bottom");
let scrollTop = document.querySelector("#scrollTop");
const app = document.querySelector("#app");

navButton.addEventListener("click", (e) => {
  e.preventDefault();

  // toggle nav state
  document.body.classList.toggle("menu-visible");
  barTop.classList.toggle("top-open");
  barMiddle.classList.toggle("middle-open");
  barBottom.classList.toggle("bottom-open");
});

// Close menu when navbutton is not clicked
document.onclick = function (e) {
  if (!navButton.contains(e.target)) {
    document.body.classList.remove("menu-visible");
    barTop.classList.remove("top-open");
    barMiddle.classList.remove("middle-open");
    barBottom.classList.remove("bottom-open");
  }
};

window.onscroll = function () {
  scrollToTop();
};

scrollTop.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

function scrollToTop() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollTop.style.display = "inline-block";
  } else {
    scrollTop.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Fetch de JSON data
  fetch("js/data.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Netwerkfout: " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      // Roep de functie aan om de data te tonen
      displayProfile(data.profiel);
    })
    .catch((error) => {
      console.error("Fout bij het laden van de data:", error);
    });
});

function displayProfile(profiel) {
  displayPersonalia(profiel.personalia);
  displayExpertise(profiel.expertise);
  displayProject(profiel.project);
}

function displayPersonalia(personalia) {
  const personaliaSection = document.createElement("section");
  personaliaSection.innerHTML = `  
          <!-- HOME PHOTO -->
          <article class="profiel-photo">
            <img
              class="image"
              src="media/${personalia.afbeelding}"
              alt="Profielfoto van ${personalia.naam}"
            />
          </article>
          <!-- HOME TEXT -->
          <article class="profiel-text">
            <h4>${personalia.functie}</h4>
            <h1>${personalia.naam}</h1>
            <p class="profiel-intro">${personalia.tekst}
            </p>
            <div class="home-buttons">
              <a
                class="btn btn-primary"
                href="media/${personalia.cv}"
                download="melvin.rozenblad-resume"
                >Download CV</a
              >
              <a class="btn btn-secondary" href="#contact">Contact</a>
            </div>
          </article>
`;
  personaliaSection.className = "personalia";
  app.appendChild(personaliaSection);
}

function displayExpertise(expertise) {
  const expertiseSection = document.createElement("section");
  expertiseSection.innerHTML = `
          <div class="section-title">
            <h2>Wat Ik Doe</h2>
          </div>`;

  expertise.forEach((exp) => {
    const expArt = document.createElement("article");
    expArt.innerHTML = `<h3>${exp.naam}</h3><p>${exp.tekst}</p>`;
    expertiseSection.appendChild(expArt);
  });
  expertiseSection.className = "container";
  app.appendChild(expertiseSection);
}

function displayProject(project) {
  const projectSection = document.createElement("section");
  projectSection.innerHTML = `
          <div class="section-title">
            <h2>Mijn Werk</h2>
          </div>`;

  project.forEach((proj) => {
    const projArt = document.createElement("article");
    projArt.innerHTML = `<h3>${proj.naam}</h3><p>${proj.tekst}</p>`;
    projectSection.appendChild(projArt);
  });
  projectSection.className = "container";
  projectSection.id = "portfolio";
  app.appendChild(projectSection);
}
