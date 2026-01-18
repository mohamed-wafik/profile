// Defer non-critical operations using requestIdleCallback
function deferredTask(callback, timeout = 2000) {
  if ("requestIdleCallback" in window) {
    requestIdleCallback(callback, { timeout });
  } else {
    setTimeout(callback, 100);
  }
}

// Throttle function to optimize scroll performance
function throttle(func, wait) {
  let timeout = null;
  let previous = 0;
  return function executedFunction(...args) {
    const now = Date.now();
    const remaining = wait - (now - previous);
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      func.apply(this, args);
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now();
        timeout = null;
        func.apply(this, args);
      }, remaining);
    }
  };
}

function handleScroll() {
  const sections = [
    document.querySelector(".loading"),
    document.querySelector(".about-section"),
    document.querySelector(".my-skills"),
    document.querySelector(".my-project"),
    document.querySelector(".contact-us"),
  ].filter(Boolean);

  sections.forEach((ele) => {
    handleActice(ele);
  });
}

function handleActice(ele) {
  if (!ele) return;

  const skillsOffsetTop = ele.offsetTop;
  const skillsOuterHeight = ele.offsetHeight;
  const windowHeight = window.innerHeight;
  const windowScrollTop = window.pageYOffset;

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

// Use throttled scroll handler - fires max every 150ms
window.addEventListener("scroll", throttle(handleScroll, 150));

// Setup button handler safely
const aboutBtn = document.querySelector(".loading .intro .text button");
if (aboutBtn) {
  aboutBtn.addEventListener("click", function () {
    const aboutSection = document.querySelector(".about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
}
// Fetch and cache skills data
let skillsCache = null;
async function loadSkills() {
  if (skillsCache) {
    displaySkills(skillsCache);
    return;
  }

  const container = document.getElementById("skills-container");
  if (!container) return;

  try {
    const res = await fetch("../skill.json");
    if (!res.ok) throw new Error("Failed to fetch skills");

    const data = await res.json();
    skillsCache = data; // Cache the data
    displaySkills(data);
  } catch (err) {
    console.error("Error loading skills:", err);
  }
}

function displaySkills(data) {
  const container = document.getElementById("skills-container");
  if (!container) return;

  // Use DocumentFragment to minimize reflows
  const fragment = document.createDocumentFragment();

  data.forEach((categoryData) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("skill-category");

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = categoryData.category;
    categoryDiv.appendChild(categoryTitle);

    categoryData.skills.forEach((skill) => {
      const skillItem = document.createElement("div");
      skillItem.classList.add("skill-item");

      const box = document.createElement("div");
      box.className = "box";

      const content = document.createElement("div");
      content.className = "content";

      const img = document.createElement("img");
      img.src = skill.img;
      img.alt = skill.name;
      img.loading = "lazy";

      const nameSpan = document.createElement("span");
      nameSpan.textContent = skill.name;

      content.appendChild(img);
      content.appendChild(nameSpan);

      const percentSpan = document.createElement("span");
      percentSpan.className = "percent";
      percentSpan.textContent = skill.level + "%";

      box.appendChild(content);
      box.appendChild(percentSpan);

      const progressBar = document.createElement("div");
      progressBar.className = "progress-bar";

      const progress = document.createElement("div");
      progress.className = "progress";
      progress.style.width = skill.level + "%";

      progressBar.appendChild(progress);

      skillItem.appendChild(box);
      skillItem.appendChild(progressBar);
      categoryDiv.appendChild(skillItem);
    });

    fragment.appendChild(categoryDiv);
  });

  container.innerHTML = "";
  container.appendChild(fragment);
}

// Defer skills loading until idle
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    deferredTask(() => loadSkills());
  });
} else {
  deferredTask(() => loadSkills());
}

let myProject = document.querySelector(".my-project .containter");
let projectCache = null;

async function fetchProject() {
  // Use cached data if available
  if (projectCache) {
    displayProjects(projectCache);
    return;
  }

  myProject.innerHTML = `<div class="spinner"></div>`;
  try {
    const response = await fetch("./project.json");
    if (!response.ok) throw new Error("Failed to fetch Projects");
    const data = await response.json();
    projectCache = data; // Cache the data
    displayProjects(data);
  } catch (err) {
    console.error("Error : ", err);
    myProject.innerHTML = `<p class="err-fetch">Something went wrong while loading projects.</p>`;
  }
}

function displayProjects(data) {
  myProject.innerHTML = "";

  // Use DocumentFragment to minimize reflows
  const fragment = document.createDocumentFragment();

  data.slice(0, 4).forEach((product) => {
    const box = document.createElement("div");
    box.className = "box";

    const imageDiv = document.createElement("div");
    imageDiv.className = "image";

    const img = document.createElement("img");
    img.src = product.img;
    img.alt = product.name;
    img.loading = "lazy";

    const btnsDiv = document.createElement("div");
    btnsDiv.className = "btns";

    const viewBtn = document.createElement("a");
    viewBtn.href = product.links.view;
    viewBtn.className = "btn";
    viewBtn.innerHTML = `<i class="fa-solid fa-eye"></i> View`;

    const codeBtn = document.createElement("a");
    codeBtn.href = product.links.code;
    codeBtn.className = "btn";
    codeBtn.innerHTML = `<i class="fa-solid fa-code"></i> Code`;

    btnsDiv.appendChild(viewBtn);
    btnsDiv.appendChild(codeBtn);

    imageDiv.appendChild(img);
    imageDiv.appendChild(btnsDiv);

    const title = document.createElement("h3");
    title.className = "name-project";
    title.textContent = product.title;

    const desc = document.createElement("p");
    desc.className = "text";
    desc.textContent = product.description;

    const langDiv = document.createElement("div");
    langDiv.className = "languages";

    product.lang.forEach((lang) => {
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
}

// Defer project loading until idle to avoid blocking main thread
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    deferredTask(() => fetchProject(), 1000);
  });
} else {
  deferredTask(() => fetchProject(), 1000);
}
