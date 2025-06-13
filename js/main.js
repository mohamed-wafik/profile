let links = document.querySelector("header .containter nav .links");

let buttonOpneLinks = document.querySelector(
  "header .containter nav .toggle-menu"
);

buttonOpneLinks.addEventListener("click", (e) => {
  links.classList.toggle("open");
});

window.onscroll = function () {
  handleActice(document.querySelector(".loading "));
  handleActice(document.querySelector(".about-section "));
  handleActice(document.querySelector(".my-skills "));
  handleActice(document.querySelector(".my-project "));
  handleActice(document.querySelector(".contact-us "));
};

function handleActice(ele) {
  let skillsOffsetTop = ele.offsetTop;

  let skillsOuterHeight = ele.offsetHeight;

  let windowHeight = this.innerHeight;

  let windowScrollTop = this.pageYOffset;

  if (
    windowScrollTop + 200 >
    skillsOffsetTop + skillsOuterHeight - windowHeight
  ) {
    document
      .querySelectorAll("header .containter nav .links li")
      .forEach((li) => {
        if (li.dataset.section === ele.dataset.section) {
          li.classList.add("active");
        } else {
          li.classList.remove("active");
        }
      });
  }
}

document
  .querySelector(".loading .intro .text button")
  .addEventListener("click", function () {
    document.querySelector(".about-section ").scrollIntoView({
      behavior: "smooth",
    });
  });
let mySkill = document.querySelector(".my-skills .containter");
async function fetchSkills() {
  try {
    const response = await fetch("./skill.json");
    if (!response.ok) throw new Error("Failed to fetch Skills");
    const data = await response.json();
    displaySkills(data);
  } catch (err) {
    console.error("Error : ", err);
    mySkill.innerHTML = `<p class="err-fetch">Something went wrong while loading Skills.</p>`;
  }
}
function displaySkills(data) {
  mySkill.innerHTML = "";
  data.forEach((skill) => {
    mySkill.innerHTML += `
        <div class="box">
          <div class="image"><img src="${skill.img}" alt="" /></div>
          <div class="text">${skill.name}</div>
        </div>
      `;
  });
}
fetchSkills();
let myProject = document.querySelector(".my-project .containter");
async function fetchProject() {
  try {
    const response = await fetch("./project.json");
    if (!response.ok) throw new Error("Failed to fetch Projects");
    const data = await response.json();
    displayProjects(data);
  } catch (err) {
    console.error("Error : ", err);
    myProject.innerHTML = `<p class="err-fetch">Something went wrong while loading projects.</p>`;
  }
}
function displayProjects(data) {
  myProject.innerHTML = "";
  data.slice(0, 4).forEach((skill) => {
    let langange = "";
    skill.lang.forEach((lang) => {
      langange += `<span class="lang ${lang}">${lang}</span>`;
    });
    myProject.innerHTML += `
      <div class="box">
        <div class="image">
          <img src="${skill.img}" alt="" />
          <div class="btns">
            <a href="${skill.links.view}" class="btn"><i class="fa-solid fa-eye"></i> View</a>
            <a href="${skill.links.code}" class="btn"><i class="fa-solid fa-code"></i> Code</a>
          </div>
        </div>
        <h3 class="name-project">${skill.title}</h3>
        <p class="text">${skill.description}</p>
        <div class="languages">${langange}</div>
      </div>
      `;
  });
}
fetchProject();
