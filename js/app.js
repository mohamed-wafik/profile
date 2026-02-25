const skillsData = [
  {
    category: { en: "Programming Languages", ar: "لغات البرمجة" },
    skills: [
      { name: "C++", level: 90 },
      { name: "TypeScript", level: 70 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "PHP", level: 75 },
      { name: "python", level: 75 },
    ],
  },
  {
    category: { en: "Frameworks & Libraries", ar: "الأطر والمكتبات" },
    skills: [
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Laravel", level: 80 },
      { name: "Node.js / Express", level: 75 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Redux", level: 70 },
    ],
  },
  {
    category: { en: "Database & Backend", ar: "قواعد البيانات والخلفية" },
    skills: [
      { name: "SQL / MySQL", level: 75 },
      { name: "MongoDB", level: 78 },
      { name: "Prisma", level: 80 },
    ],
  },
  {
    category: { en: "Tools", ar: "الأدوات" },
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Vite", level: 80 },
      { name: "Docker", level: 75 },
    ],
  },
];

const projectsData = [
  {
    img: "./image/image_dashboard.jpeg",
    title: { en: "Admin Dashboard", ar: "لوحة تحكم" },
    desc: {
      en: "A powerful Laravel MVC Admin Dashboard with user, product & order management, analytics charts, CRUD, and Tailwind CSS styling.",
      ar: "لوحة تحكم احترافية في Laravel تشمل إدارة المستخدمين والمنتجات والطلبات ومخططات تحليلية وعمليات CRUD.",
    },
    lang: ["php", "laravel", "mysql", "tailwind", "blade"],
    category: "web",
    links: { view: "#", code: "#" },
  },
  {
    img: "./image/online_bulid_image.jpeg",
    title: { en: "Ecommerce Website", ar: "متجر إلكتروني" },
    desc: {
      en: "A fully responsive online store with product catalog, add-to-cart, and smooth UX across devices.",
      ar: "متجر إلكتروني متجاوب مع كتالوج منتجات وسلة تسوق وتجربة مستخدم سلسة.",
    },
    lang: ["html", "css", "js"],
    category: "web",
    links: {
      view: "https://bulid-online-store.netlify.app",
      code: "https://github.com/mohamed-wafik/Ecommerce-Website",
    },
  },
  {
    img: "./image/full-stack-ecommerce-9ms2.vercel.app.jpeg",
    title: { en: "Full-Stack Website", ar: "موقع متكامل" },
    desc: {
      en: "Next.js, Shadcn UI, Tailwind, Prisma, MongoDB, JWT — full client & admin platform with role-based access.",
      ar: "تطبيق ويب متكامل باستخدام Next.js وShadcn UI وPrisma وMongoDB مع JWT ولوحة تحكم الإدارة.",
    },
    lang: [
      "nextjs",
      "typescript",
      "tailwind",
      "shadcn",
      "prisma",
      "mongodb",
      "jwt",
    ],
    category: "web",
    links: { view: "https://full-stack-ecommerce-9ms2.vercel.app/", code: "#" },
  },
  {
    img: "./image/chat-app.jpeg",
    title: { en: "Real-time Chat App", ar: "تطبيق دردشة" },
    desc: {
      en: "React + Socket.io + Node.js + MongoDB real-time chat with JWT auth and online status tracking.",
      ar: "دردشة فورية بـ React وSocket.io وNode.js وMongoDB مع مصادقة JWT وتتبع حالة الاتصال.",
    },
    lang: [
      "react",
      "tailwind",
      "nodejs",
      "express",
      "mongodb",
      "socket.io",
      "jwt",
    ],
    category: "web",
    links: { view: "#", code: "https://github.com/mohamed-wafik/chat-app" },
  },
  {
    img: "./image/image-to-do-website.jpeg",
    title: { en: "To-Do List", ar: "قائمة المهام" },
    desc: {
      en: "A minimal To-Do List app — add, complete, delete tasks with a clean responsive UI.",
      ar: "تطبيق قائمة مهام بسيط باستخدام HTML وCSS وJavaScript مع واجهة نظيفة ومتجاوبة.",
    },
    lang: ["html", "css", "js"],
    category: "web",
    links: {
      view: "https://cosmic-rugelach-968c38.netlify.app",
      code: "https://github.com/mohamed-wafik/To-Do-List",
    },
  },
  {
    img: "./image/image-portfolio-theme-new.jpeg",
    title: { en: "Profile Page", ar: "الملف الشخصي" },
    desc: {
      en: "Personal profile with responsive layout, smooth animations, and interactive About / Skills / Contact sections.",
      ar: "صفحة ملف شخصي متجاوبة مع حركات سلسة وأقسام تفاعلية.",
    },
    lang: ["html", "css", "js"],
    category: "web",
    links: { view: "#", code: "https://github.com/mohamed-wafik/profile" },
  },
  {
    img: "./image/image-template-one.jpeg",
    title: { en: "Template One", ar: "القالب الأول" },
    desc: {
      en: "A professional responsive website template built with HTML and CSS (Elzero Web School course).",
      ar: "قالب موقع احترافي ومتجاوب باستخدام HTML وCSS ضمن دورة Elzero.",
    },
    lang: ["html", "css"],
    category: "web",
    links: { view: "#", code: "#" },
  },
  {
    img: "./image/image-template-two.jpeg",
    title: { en: "Template Two", ar: "القالب الثاني" },
    desc: {
      en: "A clean responsive website template demonstrating layout structuring and elegant UI with pure HTML/CSS.",
      ar: "قالب موقع نظيف ومتجاوب يعرض تنظيم التخطيط وعناصر واجهة أنيقة.",
    },
    lang: ["html", "css"],
    category: "web",
    links: { view: "#", code: "#" },
  },
  {
    img: "./image/image-template-three.jpeg.jpeg",
    title: { en: "Template Three", ar: "القالب الثالث" },
    desc: {
      en: "Feature-rich modern website template with advanced responsive layouts built in pure HTML and CSS.",
      ar: "قالب موقع حديث وغني بالمميزات مع تخطيطات متجاوبة متقدمة.",
    },
    lang: ["html", "css"],
    category: "web",
    links: { view: "#", code: "#" },
  },
];

// ── STATE ─────────────────────────────────────────────────────────────────────
let lang = "en";
let theme = "dark";
let mobileOpen = false;
const STEP = 3;
const INITIAL = 6;
let numShowProject = INITIAL;

// ── PRELOADER ─────────────────────────────────────────────────────────────────
"Mohamed Wafik".split("").forEach((ch, i) => {
  const s = document.createElement("span");
  s.textContent = ch === " " ? "\u00A0" : ch;
  s.style.animationDelay = i * 0.06 + "s";
  document.getElementById("preloaderName").appendChild(s);
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("preloader").classList.add("hide");
    initGSAP();
  }, 2000);
});

// ── RENDER SKILLS ─────────────────────────────────────────────────────────────
function renderSkills() {
  const container = document.getElementById("skills-container");
  container.innerHTML = "";
  skillsData.forEach((cat) => {
    const div = document.createElement("div");
    div.className = "skills-category";
    const label = document.createElement("div");
    label.className = "cat-label";
    label.textContent = lang === "ar" ? cat.category.ar : cat.category.en;
    div.appendChild(label);
    const grid = document.createElement("div");
    grid.className = "skills-grid";
    cat.skills.forEach((skill) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.innerHTML = `
        <div class="skill-header">
          <span class="skill-name">${skill.name}</span>
          <span class="skill-pct">${skill.level}%</span>
        </div>
        <div class="skill-bar"><div class="skill-fill" data-level="${skill.level}"></div></div>`;
      grid.appendChild(card);
    });
    div.appendChild(grid);
    container.appendChild(div);
  });
  // Animate bars when visible
  setTimeout(() => {
    document.querySelectorAll(".skill-fill").forEach((el) => {
      const obs = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            el.style.width = el.dataset.level + "%";
            obs.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      obs.observe(el);
    });
  }, 100);
}

// ── RENDER PROJECTS ───────────────────────────────────────────────────────────
function renderProjects(filter = "all") {
  const grid = document.getElementById("projectsGrid");
  grid.innerHTML = "";

  // FIX #1: slice first, then filter — so numShowProject is always respected
  const filtered = projectsData
    .slice(0, numShowProject)
    .filter((p) => filter === "all" || p.category === filter);

  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "project-card fade-up";
    const title = lang === "ar" ? p.title.ar : p.title.en;
    const desc = lang === "ar" ? p.desc.ar : p.desc.en;
    card.innerHTML = `
      <div class="project-img">
        <img src="${p.img}" alt="${title}" loading="lazy"/>
        <div class="project-overlay">
          <a href="${p.links.view}" class="overlay-btn primary" target="_blank">${lang === "ar" ? "عرض" : "View"}</a>
          <a href="${p.links.code}" class="overlay-btn ghost"   target="_blank">${lang === "ar" ? "الكود" : "Code"}</a>
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${title}</h3>
        <p class="project-desc">${desc}</p>
        <div class="project-tags">${p.lang.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      </div>`;
    grid.appendChild(card);
  });

  updateProjectBtns();

  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      "#projectsGrid .fade-up",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, stagger: 0.08, duration: 0.55, ease: "power2.out" },
    );
  }
}

// ── UPDATE BUTTON VISIBILITY ──────────────────────────────────────────────────
function updateProjectBtns() {
  const showMoreBtn = document.getElementById("showMoreBtn");
  const showLessBtn = document.getElementById("showLessBtn");
  const currentFilter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  const total =
    currentFilter === "all"
      ? projectsData.length
      : projectsData.filter((p) => p.category === currentFilter).length;

  // Show More: hidden when all are visible
  showMoreBtn.classList.toggle("hidden", numShowProject >= total);
  // Show Less: visible only when more than INITIAL are shown
  showLessBtn.classList.toggle("visible", numShowProject > INITIAL);
  // Keep button text bilingual
  showMoreBtn.textContent = lang === "ar" ? "عرض المزيد ↓" : "Show More ↓";
  showLessBtn.textContent = lang === "ar" ? "عرض أقل ↑" : "Show Less ↑";
}

// ── SHOW MORE ─────────────────────────────────────────────────────────────────
// FIX #2: single listener — no duplicate
document.getElementById("showMoreBtn").addEventListener("click", () => {
  const filter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  numShowProject = Math.min(numShowProject + STEP, projectsData.length);
  renderProjects(filter);
});

// ── SHOW LESS ─────────────────────────────────────────────────────────────────
document.getElementById("showLessBtn").addEventListener("click", () => {
  const filter =
    document.querySelector(".filter-btn.active")?.dataset.filter || "all";
  numShowProject = Math.max(numShowProject - STEP, INITIAL);
  renderProjects(filter);
  document
    .getElementById("projects")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

// ── FILTER ────────────────────────────────────────────────────────────────────
document.getElementById("filterBar").addEventListener("click", (e) => {
  const btn = e.target.closest(".filter-btn");
  if (!btn) return;
  document
    .querySelectorAll(".filter-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  numShowProject = INITIAL; // reset count on filter change
  renderProjects(btn.dataset.filter);
});

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const msg = document.getElementById("formMsg");
  msg.className = "form-msg success";
  msg.textContent =
    lang === "ar"
      ? "✅ تم إرسال رسالتك بنجاح!"
      : "✅ Message sent successfully!";
  e.target.reset();
  setTimeout(() => {
    msg.className = "form-msg";
  }, 4000);
});

// ── THEME (restore BEFORE attaching listener) ─────────────────────────────────
const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("mw_theme");
if (savedTheme) {
  theme = savedTheme;
  document.documentElement.setAttribute("data-theme", theme);
}
themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("mw_theme", theme);
});

// ── LANGUAGE ──────────────────────────────────────────────────────────────────
function applyLang() {
  const html = document.documentElement;
  html.setAttribute("lang", lang);
  html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementById("langBtn").textContent =
    lang === "ar" ? "English" : "عربي";
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
  });
  document
    .querySelectorAll("input[placeholder],textarea[placeholder]")
    .forEach((el) => {
      if (lang === "ar") {
        if (el.id === "nameInput") el.placeholder = "محمد وفيق";
        if (el.id === "emailInput") el.placeholder = "you@example.com";
        if (el.id === "msgInput") el.placeholder = "أخبرني عن مشروعك...";
      } else {
        if (el.id === "nameInput") el.placeholder = "Mohamed Wafik";
        if (el.id === "emailInput") el.placeholder = "you@example.com";
        if (el.id === "msgInput")
          el.placeholder = "Tell me about your project...";
      }
    });
  renderSkills();
  renderProjects(
    document.querySelector(".filter-btn.active")?.dataset.filter || "all",
  );
  localStorage.setItem("mw_lang", lang);
}

document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  applyLang();
});

// ── HAMBURGER ────────────────────────────────────────────────────────────────
const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");
hamburger.addEventListener("click", () => {
  mobileOpen = !mobileOpen;
  hamburger.classList.toggle("open", mobileOpen);
  mobileNav.classList.toggle("open", mobileOpen);
});
mobileNav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mobileOpen = false;
    hamburger.classList.remove("open");
    mobileNav.classList.remove("open");
  }
});

// ── ACTIVE NAV ON SCROLL ──────────────────────────────────────────────────────
window.addEventListener(
  "scroll",
  () => {
    const pos = window.scrollY + 100;
    ["hero", "about", "skills", "projects", "contact"].forEach((id) => {
      const sec = document.getElementById(id);
      if (
        sec &&
        pos >= sec.offsetTop &&
        pos < sec.offsetTop + sec.offsetHeight
      ) {
        document.querySelectorAll(".nav-links a").forEach((a) => {
          a.classList.toggle("active", a.getAttribute("href") === "#" + id);
        });
      }
    });
    document.getElementById("navbar").style.boxShadow =
      window.scrollY > 20 ? "0 4px 30px rgba(0,0,0,0.3)" : "none";
  },
  { passive: true },
);

// ── GSAP ANIMATIONS ───────────────────────────────────────────────────────────
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero entrance sequence
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .fromTo(
      ".hero-eyebrow",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
    )
    .fromTo(
      ".hero-name",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.9 },
      "-=0.5",
    )
    .fromTo(
      ".hero-role",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.6",
    )
    .fromTo(
      ".hero-desc",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7 },
      "-=0.5",
    )
    .fromTo(
      ".hero-btns",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.4",
    )
    .fromTo(
      ".hero-stats",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6 },
      "-=0.3",
    )
    .fromTo(
      ".hero-visual",
      { opacity: 0, x: 60 },
      { opacity: 1, x: 0, duration: 1.0 },
      "-=1.2",
    )
    .fromTo(
      ".social-pill",
      { opacity: 0, x: 30 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 },
      "-=0.6",
    );

  // About
  gsap.fromTo(
    ".about-grid > div:first-child",
    { opacity: 0, x: -50 },
    {
      opacity: 1,
      x: 0,
      duration: 0.9,
      ease: "power2.out",
      scrollTrigger: { trigger: "#about", start: "top 75%" },
    },
  );
  gsap.fromTo(
    ".about-card",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.12,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".about-cards", start: "top 80%" },
    },
  );
  gsap.fromTo(
    ".tl-item",
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      stagger: 0.2,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: ".timeline", start: "top 80%" },
    },
  );

  // Section titles
  document.querySelectorAll(".section-title").forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      },
    );
  });

  // Skills
  ScrollTrigger.create({
    trigger: "#skills",
    start: "top 75%",
    once: true,
    onEnter() {
      gsap.fromTo(
        ".skills-category",
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: "power2.out" },
      );
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.04,
          duration: 0.5,
          ease: "back.out(1.2)",
        },
      );
    },
  });

  // Contact
  gsap.fromTo(
    ".contact-item",
    { opacity: 0, x: -30 },
    {
      opacity: 1,
      x: 0,
      stagger: 0.15,
      duration: 0.7,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 75%" },
    },
  );
  gsap.fromTo(
    ".contact-form .form-group",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.1,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 75%" },
    },
  );
}

// ── INIT ──────────────────────────────────────────────────────────────────────
document.getElementById("footerYear").textContent = new Date().getFullYear();

// FIX #3: restore saved lang BEFORE calling applyLang
const savedLang = localStorage.getItem("mw_lang");
if (savedLang) lang = savedLang;

// applyLang calls renderSkills() + renderProjects() internally — no extra call needed
applyLang();
