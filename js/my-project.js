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
  data.forEach((skill, index) => {
    let langange = "";
    skill.lang.forEach((lang) => {
      langange += `<span class="lang ${lang}">${lang}</span>`;
    });
    myProject.innerHTML += `
<div class="box ${skill.category}">
  <div class="image">
    <img src="${skill.img}" alt="" loading="lazy" />
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
  const filterButtons = document.querySelectorAll(".filter-btn");
  const AllBoxProject = document.querySelectorAll(
    ".my-project .containter .box"
  );

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterButtons.forEach((removeAction) => {
        removeAction.classList.remove("active");
      });
      btn.classList.add("active");

      const filter = e.target.getAttribute("data-filter");

      if (filter === "all") {
        AllBoxProject.forEach((box) => {
          box.style.display = "block";
        });
      } else {
        AllBoxProject.forEach((box) => {
          if (box.classList.contains(filter)) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
      }
    });
  });
}
fetchProject();
