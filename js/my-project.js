// Cache DOM elements
const myProjectContainer = document.querySelector(".my-project .containter");
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
    console.error("Error fetching projects:", err);
    if (myProjectContainer) {
      myProjectContainer.innerHTML =
        '<p class="err-fetch">Failed to load projects</p>';
    }
  }
}

function displayProjects(data) {
  if (!myProjectContainer) return;
  myProjectContainer.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach((project) => {
    const box = document.createElement("div");
    box.className = `box ${project.category || ""}`;

    const imageDiv = document.createElement("div");
    imageDiv.className = "image";

    const img = document.createElement("img");
    img.src = project.img;
    img.alt = project.title || "";
    img.loading = "lazy";

    const btnsDiv = document.createElement("div");
    btnsDiv.className = "btns";

    // Create view button
    const viewBtn = document.createElement("a");
    viewBtn.href = project.links?.view || "#";
    viewBtn.className = "btn";
    viewBtn.innerHTML = '<i class="fa-solid fa-eye"></i> View';

    // Create code button
    const codeBtn = document.createElement("a");
    codeBtn.href = project.links?.code || "#";
    codeBtn.className = "btn";
    codeBtn.innerHTML = '<i class="fa-solid fa-code"></i> Code';

    btnsDiv.appendChild(viewBtn);
    btnsDiv.appendChild(codeBtn);
    imageDiv.appendChild(img);
    imageDiv.appendChild(btnsDiv);

    const title = document.createElement("h3");
    title.className = "name-project";
    title.textContent = project.title || "";

    const desc = document.createElement("p");
    desc.className = "text";
    desc.textContent = project.description || "";

    const langDiv = document.createElement("div");
    langDiv.className = "languages";

    if (Array.isArray(project.lang)) {
      project.lang.forEach((lang) => {
        const langSpan = document.createElement("span");
        langSpan.className = `lang ${lang}`;
        langSpan.textContent = lang;
        langDiv.appendChild(langSpan);
      });
    }

    box.appendChild(imageDiv);
    box.appendChild(title);
    box.appendChild(desc);
    box.appendChild(langDiv);

    fragment.appendChild(box);
  });

  myProjectContainer.appendChild(fragment);
  setupFilterButtons();
}

function setupFilterButtons() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectBoxes = document.querySelectorAll(
    ".my-project .containter .box",
  );

  if (!filterButtons.length || !projectBoxes.length) return;

  // Use event delegation instead of attaching listeners to each button
  const filterContainer = filterButtons[0]?.parentElement;

  if (filterContainer) {
    // Remove old listeners by cloning
    const newFilterContainer = filterContainer.cloneNode(true);
    filterContainer.parentNode?.replaceChild(
      newFilterContainer,
      filterContainer,
    );

    newFilterContainer.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-btn");
      if (!btn) return;

      // Update active state
      newFilterContainer.querySelectorAll(".filter-btn").forEach((button) => {
        button.classList.remove("active");
      });
      btn.classList.add("active");

      // Filter projects
      const filter = btn.getAttribute("data-filter");
      projectBoxes.forEach((box) => {
        if (filter === "all" || box.classList.contains(filter)) {
          box.style.display = "block";
        } else {
          box.style.display = "none";
        }
      });
    });
  }
}

// Load projects on page ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", fetchProject);
} else {
  fetchProject();
}
