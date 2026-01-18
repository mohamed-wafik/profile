let myProject = document.querySelector(".my-project .containter");
let projectsCache = null;

async function fetchProject() {
  try {
    if (projectsCache) {
      displayProjects(projectsCache);
      return;
    }

    const response = await fetch("./project.json");
    if (!response.ok) throw new Error("Failed to fetch Projects");
    const data = await response.json();
    projectsCache = data;
    displayProjects(data);
  } catch (err) {
    console.error("Error : ", err);
    myProject.innerHTML = `<p class="err-fetch">Something went wrong while loading projects.</p>`;
  }
}

function displayProjects(data) {
  myProject.innerHTML = "";

  // Use DocumentFragment to avoid multiple reflows
  const fragment = document.createDocumentFragment();

  data.forEach((skill) => {
    const box = document.createElement("div");
    box.className = `box ${skill.category}`;

    const imageDiv = document.createElement("div");
    imageDiv.className = "image";

    const img = document.createElement("img");
    img.src = skill.img;
    img.alt = skill.title || "";
    img.loading = "lazy";

    const btnsDiv = document.createElement("div");
    btnsDiv.className = "btns";

    const viewBtn = document.createElement("a");
    viewBtn.href = skill.links.view;
    viewBtn.className = "btn";
    viewBtn.innerHTML = `<i class="fa-solid fa-eye"></i> View`;

    const codeBtn = document.createElement("a");
    codeBtn.href = skill.links.code;
    codeBtn.className = "btn";
    codeBtn.innerHTML = `<i class="fa-solid fa-code"></i> Code`;

    btnsDiv.appendChild(viewBtn);
    btnsDiv.appendChild(codeBtn);
    imageDiv.appendChild(img);
    imageDiv.appendChild(btnsDiv);

    const title = document.createElement("h3");
    title.className = "name-project";
    title.textContent = skill.title;

    const desc = document.createElement("p");
    desc.className = "text";
    desc.textContent = skill.description;

    const langDiv = document.createElement("div");
    langDiv.className = "languages";

    skill.lang.forEach((lang) => {
      const langSpan = document.createElement("span");
      langSpan.className = `lang ${lang}`;
      langSpan.textContent = lang;
      langDiv.appendChild(langSpan);
    });

    box.appendChild(imageDiv);
    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(langDiv);

    fragment.appendChild(box);
  });

  myProject.appendChild(fragment);
  setupFilterButtons();
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const AllBoxProject = document.querySelectorAll(
    ".my-project .containter .box",
  );

  filterButtons.forEach((btn) => {
    // Remove previous listeners by cloning
    const newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);
  });

  // Re-query after replacing buttons
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      document.querySelectorAll(".filter-btn").forEach((removeAction) => {
        removeAction.classList.remove("active");
      });
      btn.classList.add("active");

      const filter = e.target.getAttribute("data-filter");

      document
        .querySelectorAll(".my-project .containter .box")
        .forEach((box) => {
          if (filter === "all") {
            box.style.display = "block";
          } else if (box.classList.contains(filter)) {
            box.style.display = "block";
          } else {
            box.style.display = "none";
          }
        });
    });
  });
}

fetchProject();
