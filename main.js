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
fetch("./skill.json")
  .then((response) => response.json())
  .then((date) => {
    mySkill.innerHTML = "";
    date.forEach((skill) => {
      mySkill.innerHTML += `
          <div class="box">
            <div class="image"><img src="${skill.img}" alt="" /></div>
            <div class="text">${skill.name}</div>
          </div>
        `;
    });
  });
let myProject = document.querySelector(".my-project .containter");
fetch("./project.json")
  .then((response) => response.json())
  .then((date) => {
    myProject.innerHTML = "";
    date.forEach((skill, index) => {
      if (index === 4) {
        return false;
      }
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
          <p class="text">${skill.category}</p>
        </div>
        `;
    });
  });
