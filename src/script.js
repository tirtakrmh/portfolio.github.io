// typing text hero
const typed = new Typed(".typing-text", {
  strings: ["NewBie Web Developer"],
  loop: true,
  typeSpeed: 55,
  backSpeed: 25,
  backDelay: 500,
});

// auto hide navbar click
$(".click-trigger").click(function () {
  $(".navbar-collapse").collapse("hide");
});

// automatic transparent navbar
const navBar = document.getElementsByTagName("nav")[0];
window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 1) {
    navBar.classList.replace("bg-transparent", "navbar-color");
  } else if (this.window.scrollY <= 0) {
    navBar.classList.replace("navbar-color", "bg-transparent");
  }
});

async function fetchData(type) {
  let response;
  switch (type) {
    case "education":
      response = await fetch("education/education.json");
      break;
    case "experience":
      response = await fetch("experience/experience.json");
      break;
    case "activities":
      response = await fetch("activities/activities.json");
      break;
    case "project":
      response = await fetch("project/project.json");
      break;
    default:
      throw new Error("Invalid type");
  }

  const data = await response.json();
  return data;
}


function showEducation(education) {
  let educationContainer = document.querySelector(".education .content");
  let educationHTML = "";
  education.forEach((educationItem) => { // Changed the variable name to avoid conflict
    educationHTML += `
    <div class="box" style="padding-left: 400px;" data-aos="fade-down">
      <img
          draggable="false"
          src="${educationItem.logo}"
          alt="institution logo"
          style="max-width: 100px; max-height: 100px;"/>
      <div class="desc" >
          <h3>${educationItem.title}</h3>
          <p>${educationItem.institution}</p>
          <p>${educationItem.year}</p>
      </div>
    </div>
`;
  });
  educationContainer.innerHTML = educationHTML;
}

function showExperience(experience) {
  let experienceContainer = document.querySelector(".experience .content");
  let experienceHTML = "";
  experience.forEach((experience) => {
    experienceHTML += `
    <div class="box" style="padding-left: 400px;" data-aos="fade-down">
      <img
          draggable="false"
          src="${experience.logo}"
          alt="institution logo"
          style="max-width: 100px; max-height: 100px;"/>
      <div class="desc" >
          <h3>${experience.title}</h3>
          <p>${experience.institution}</p>
          <p>${experience.year}</p>
      </div>
    </div>
`;
  });
  experienceContainer.innerHTML = experienceHTML;
}

function showActivities(activities) {  // Rename the function to showActivities
  let activitiesContainer = document.querySelector(".activities .content");
  let activitiesHTML = "";
  activities.forEach((activity) => {
    activitiesHTML += `
    <div class="box" style="padding-left: 400px;" data-aos="fade-down">
      <img
          draggable="false"
          src="${activity.logo}"
          alt="institution logo"
          style="max-width: 100px; max-height: 100px;"/>
      <div class="desc" >
          <h3>${activity.title}</h3>
          <p>${activity.institution}</p>
          <p>${activity.year}</p>
      </div>
    </div>
`;
  });
  activitiesContainer.innerHTML = activitiesHTML;
}

function showProject(projects) {
  let projectContainer = document.querySelector(".project .content");
  let projectHTML = "";

  projects.slice(0, 90).forEach((project) => {
    let demoButton = project.links.demo
      ? `<a href="${project.links.demo}" class="btn" target="_blank">
            <i class="fas fa-eye"></i>
            Demo
          </a>`
      : "";

    let codeButton = project.links.code
      ? `<a href="${project.links.code}" class="btn" target="_blank">
            <i class="fas fa-code"></i>
            Kode
          </a>`
      : "";

    projectHTML += `
        <div class="cards">
          <img draggable="false" src="${project.image}" alt="" />
          <div class="desc-content d-flex flex-column text-justify">
              <div class="tag">
                  <h3>${project.title}</h3>
                  <h5>${project.tech}</h5>
              </div>
              <div class="desc">
                  <p>${project.desc}</p>
                  <div class="btns">
                      ${demoButton}
                      ${codeButton}
                  </div>
              </div>
          </div>
        </div>`;
  });

  projectContainer.innerHTML = projectHTML;
}



fetchData("education").then((data) => {
  showEducation(data);
});

fetchData("experience").then((data) => {
  showExperience(data);
});

fetchData("activities").then((data) => {
  showActivities(data);
});

fetchData("project").then((data) => {
  showProject(data);
});


// animate on scroll (AOS)
AOS.init();

// disable inspect element or dev mode
document.addEventListener("contextmenu", function(e){
  e.preventDefault();
});

document.onkeydown = function (e){
  if (event) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)){
      return false;
  }
  if (e.ctrlKey && e.keyCode == "I".charCodeAt(0)){
      return false;
  }
}

// Scrollspy botstrap
const scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: ".navbar",
});

// scroll reveal animation content
const srtop = ScrollReveal({
  origin: "top",
  distance: "90px",
  duration: 1000,
  reset: true,
});

srtop.reveal(".home .content .intro h3", { delay: 300 });
srtop.reveal(".home .content .intro p", { delay: 300 });
srtop.reveal(".home .content .intro a", { delay: 400 });

srtop.reveal(".home .image", { delay: 600 });
srtop.reveal(".home .linkedin", { interval: 600 });
srtop.reveal(".home .github", { interval: 600 });
srtop.reveal(".home .instagram", { interval: 600 });

srtop.reveal(".about .cv-btn", { delay: 200 });
