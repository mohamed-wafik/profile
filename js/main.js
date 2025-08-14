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
fetch("../skill.json")
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById("skills-container");

    data.forEach((categoryData) => {
      // Create category section
      const categoryDiv = document.createElement("div");
      categoryDiv.classList.add("skill-category");

      const categoryTitle = document.createElement("h3");
      categoryTitle.textContent = categoryData.category;
      categoryDiv.appendChild(categoryTitle);

      // Add each skill
      categoryData.skills.forEach((skill) => {
        const skillItem = document.createElement("div");
        skillItem.classList.add("skill-item");

        skillItem.innerHTML = `
           <div class="box">
            <div class="content">
                       <img src="${skill.img}" alt="${skill.name}" />
           <span>${skill.name}</span>
            </div>
           <span class="percent">${skill.level}%</span>
           </div>
          <div class="progress-bar">
            <div class="progress" style="width: ${skill.level}%;"></div>
          </div>
        `;

        categoryDiv.appendChild(skillItem);
      });

      container.appendChild(categoryDiv);
    });
  })
  .catch((err) => console.error("Error loading skills:", err));

let myProject = document.querySelector(".my-project .containter");
async function fetchProject() {
  myProject.innerHTML = `<div class="spinner"></div>`;
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
  data.slice(0, 4).forEach((product) => {
    let langange = "";
    product.lang.forEach((lang) => {
      langange += `<span class="lang ${lang}">${lang}</span>`;
    });
    myProject.innerHTML += `
      <div class="box">
        <div class="image">
          <img src="${product.img}" alt=${product.name} loading="lazy" />
          <div class="btns">
            <a href="${product.links.view}" class="btn"><i class="fa-solid fa-eye"></i> View</a>
            <a href="${product.links.code}" class="btn"><i class="fa-solid fa-code"></i> Code</a>
          </div>
        </div>
        <h3 class="name-project">${product.title}</h3>
        <p class="text">${product.description}</p>
        <div class="languages">${langange}</div>
      </div>
      `;
  });
}
fetchProject();
