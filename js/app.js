/* ── DATA ── */
const skillsData = [
  {
    cat: { en: "Programming Languages", ar: "لغات البرمجة" },
    skills: [
      { name: "C++", l: 90 },
      { name: "TypeScript", l: 70 },
      { name: "HTML5", l: 95 },
      { name: "CSS3", l: 90 },
      { name: "JavaScript", l: 85 },
      { name: "PHP", l: 75 },
      { name: "Python", l: 75 },
    ],
  },
  {
    cat: { en: "Frameworks & Libraries", ar: "الأطر والمكتبات" },
    skills: [
      { name: "React.js", l: 85 },
      { name: "Next.js", l: 80 },
      { name: "Laravel", l: 80 },
      { name: "Node.js / Express", l: 75 },
      { name: "Tailwind CSS", l: 80 },
      { name: "Redux", l: 70 },
    ],
  },
  {
    cat: { en: "Database & Backend", ar: "قواعد البيانات والخلفية" },
    skills: [
      { name: "SQL / MySQL", l: 75 },
      { name: "MongoDB", l: 78 },
      { name: "Prisma", l: 80 },
    ],
  },
  {
    cat: { en: "Tools", ar: "الأدوات" },
    skills: [
      { name: "Git & GitHub", l: 80 },
      { name: "Postman", l: 75 },
      { name: "Vite", l: 80 },
      { name: "Docker", l: 75 },
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
    cat: "web",
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
    cat: "web",
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
    lang: ["nextjs", "typescript", "tailwind", "prisma", "mongodb", "jwt"],
    cat: "web",
    links: {
      view: "https://full-stack-ecommerce-9ms2.vercel.app/",
      code: "#",
    },
  },
  {
    img: "./image/chat-app.jpeg",
    title: { en: "Real-time Chat App", ar: "تطبيق دردشة" },
    desc: {
      en: "React + Socket.io + Node.js + MongoDB real-time chat with JWT auth and online status tracking.",
      ar: "دردشة فورية بـ React وSocket.io وNode.js وMongoDB مع مصادقة JWT وتتبع حالة الاتصال.",
    },
    lang: ["react", "nodejs", "express", "mongodb", "socket.io", "jwt"],
    cat: "web",
    links: {
      view: "#",
      code: "https://github.com/mohamed-wafik/chat-app",
    },
  },
  {
    img: "./image/image-to-do-website.jpeg",
    title: { en: "To-Do List", ar: "قائمة المهام" },
    desc: {
      en: "A minimal To-Do List app — add, complete, delete tasks with a clean responsive UI.",
      ar: "تطبيق قائمة مهام بسيط باستخدام HTML وCSS وJavaScript مع واجهة نظيفة ومتجاوبة.",
    },
    lang: ["html", "css", "js"],
    cat: "web",
    links: {
      view: "https://cosmic-rugelach-968c38.netlify.app",
      code: "https://github.com/mohamed-wafik/To-Do-List",
    },
  },
  {
    img: "./image/image-portfolio-theme-new.jpeg",
    title: { en: "Profile Page", ar: "الملف الشخصي" },
    desc: {
      en: "Personal profile with responsive layout, smooth animations, and interactive sections.",
      ar: "صفحة ملف شخصي متجاوبة مع حركات سلسة وأقسام تفاعلية.",
    },
    lang: ["html", "css", "js"],
    cat: "web",
    links: {
      view: "#",
      code: "https://github.com/mohamed-wafik/profile",
    },
  },
  {
    img: "./image/image-template-one.jpeg",
    title: { en: "Template One", ar: "القالب الأول" },
    desc: {
      en: "A professional responsive website template built with HTML and CSS.",
      ar: "قالب موقع احترافي ومتجاوب باستخدام HTML وCSS.",
    },
    lang: ["html", "css"],
    cat: "web",
    links: { view: "#", code: "#" },
  },
  {
    img: "./image/image-template-two.jpeg",
    title: { en: "Template Two", ar: "القالب الثاني" },
    desc: {
      en: "A clean responsive website template demonstrating layout structuring and elegant UI.",
      ar: "قالب موقع نظيف ومتجاوب يعرض تنظيم التخطيط وعناصر واجهة أنيقة.",
    },
    lang: ["html", "css"],
    cat: "web",
    links: { view: "#", code: "#" },
  },
  {
    img: "./image/image-template-three.jpeg.jpeg",
    title: { en: "Template Three", ar: "القالب الثالث" },
    desc: {
      en: "Feature-rich modern website template with advanced responsive layouts.",
      ar: "قالب موقع حديث وغني بالمميزات مع تخطيطات متجاوبة متقدمة.",
    },
    lang: ["html", "css"],
    cat: "web",
    links: { view: "#", code: "#" },
  },
];

/* ── STATE ── */
let lang = localStorage.getItem("mw_lang") || "en",
  theme = localStorage.getItem("mw_theme") || "dark",
  mOpen = false;
const STEP = 3,
  INIT = 6;
let numShow = INIT;

/* ── CURSOR ── */
const cur = document.getElementById("cur"),
  curl = document.getElementById("curl");
let mx = 0,
  my = 0,
  rx = 0,
  ry = 0;
document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cur.style.left = mx + "px";
  cur.style.top = my + "px";
});
(function aR() {
  rx += (mx - rx) * 0.1;
  ry += (my - ry) * 0.1;
  curl.style.left = rx + "px";
  curl.style.top = ry + "px";
  requestAnimationFrame(aR);
})();
document.querySelectorAll("a,button").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    cur.style.width = "18px";
    cur.style.height = "18px";
    cur.style.background = "var(--K)";
    curl.style.width = "58px";
    curl.style.height = "58px";
    curl.style.borderColor = "rgba(0, 245, 255, 0.6)";
  });
  el.addEventListener("mouseleave", () => {
    cur.style.width = "10px";
    cur.style.height = "10px";
    cur.style.background = "var(--C)";
    curl.style.width = "38px";
    curl.style.height = "38px";
    curl.style.borderColor = "rgba(0, 245, 255, 0.6)";
  });
});

/* ── CANVAS PARTICLES ── */
const cv = document.getElementById("bgc"),
  ctx = cv.getContext("2d");
let W = (cv.width = window.innerWidth),
  H = (cv.height = window.innerHeight);
window.addEventListener("resize", () => {
  W = cv.width = window.innerWidth;
  H = cv.height = window.innerHeight;
});
const pts = Array.from({ length: 80 }, () => ({
  x: Math.random() * W,
  y: Math.random() * H,
  r: Math.random() * 1.3 + 0.3,
  vx: (Math.random() - 0.5) * 0.22,
  vy: (Math.random() - 0.5) * 0.22,
  a: Math.random() * 0.45 + 0.08,
  c: ["#6C63FF", "#00D9FF", "#FF4D9D"][Math.floor(Math.random() * 3)],
}));
let mGX = W / 2,
  mGY = H / 2;
document.addEventListener("mousemove", (e) => {
  mGX = e.clientX;
  mGY = e.clientY;
});
(function draw() {
  ctx.clearRect(0, 0, W, H);
  // mouse glow
  const mg = ctx.createRadialGradient(mGX, mGY, 0, mGX, mGY, 140);
  mg.addColorStop(0, "rgba(0,245,255,.055)");
  mg.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = mg;
  ctx.beginPath();
  ctx.arc(mGX, mGY, 140, 0, Math.PI * 2);
  ctx.fill();
  pts.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0) p.x = W;
    if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H;
    if (p.y > H) p.y = 0;
    const r = parseInt(p.c.slice(1, 3), 16),
      g = parseInt(p.c.slice(3, 5), 16),
      b = parseInt(p.c.slice(5, 7), 16);
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${r},${g},${b},${p.a})`;
    ctx.fill();
  });
  for (let i = 0; i < pts.length; i++)
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x,
        dy = pts[i].y - pts[j].y,
        d = Math.sqrt(dx * dx + dy * dy);
      if (d < 95) {
        ctx.beginPath();
        ctx.moveTo(pts[i].x, pts[i].y);
        ctx.lineTo(pts[j].x, pts[j].y);
        ctx.strokeStyle = `rgba(123,47,247,${0.07 * (1 - d / 95)})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }
  requestAnimationFrame(draw);
})();

/* ── PRELOADER ── */
"Mohamed Wafik".split("").forEach((ch, i) => {
  const s = document.createElement("span");
  s.textContent = ch === " " ? "\u00A0" : ch;
  s.style.animationDelay = i * 0.06 + "s";
  document.getElementById("ldName").appendChild(s);
});
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
    initGSAP();
  }, 2200);
});

/* ── THEME ── */
document.documentElement.setAttribute("data-theme", theme);
const tBtn = document.getElementById("themeBtn");
tBtn.textContent = theme === "dark" ? "🌙" : "☀️";
tBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  tBtn.textContent = theme === "dark" ? "🌙" : "☀️";
  localStorage.setItem("mw_theme", theme);
});

/* ── LANGUAGE ── */
function applyLang() {
  const h = document.documentElement;
  h.setAttribute("lang", lang);
  h.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.getElementById("langBtn").textContent =
    lang === "ar" ? "English" : "عربي";
  document.querySelectorAll("[data-en]").forEach((el) => {
    el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
  });
  [
    ["ni", "Mohamed Wafik", "محمد وفيق"],
    ["ei", "you@example.com", "you@example.com"],
    ["mi", "Tell me about your project...", "أخبرني عن مشروعك..."],
  ].forEach(([id, en, ar]) => {
    const el = document.getElementById(id);
    if (el) el.placeholder = lang === "ar" ? ar : en;
  });
  renderSkills();
  renderProjects(
    document.querySelector(".f-btn.active")?.dataset.filter || "all",
  );
  localStorage.setItem("mw_lang", lang);
}
document.getElementById("langBtn").addEventListener("click", () => {
  lang = lang === "en" ? "ar" : "en";
  applyLang();
});

/* ── SKILLS RENDER ── */
function renderSkills() {
  const c = document.getElementById("sk-cnt");
  c.innerHTML = "";
  skillsData.forEach((cat) => {
    const d = document.createElement("div");
    d.className = "sk-cat rv";
    const l = document.createElement("div");
    l.className = "cat-lbl";
    l.textContent = lang === "ar" ? cat.cat.ar : cat.cat.en;
    d.appendChild(l);
    const g = document.createElement("div");
    g.className = "sk-grid";
    cat.skills.forEach((sk) => {
      const card = document.createElement("div");
      card.className = "sk-card";
      card.innerHTML = `<div class="sk-head"><span class="sk-nm">${sk.name}</span><span class="sk-pct">${sk.l}%</span></div><div class="sk-bar"><div class="sk-fill" data-l="${sk.l}"></div></div>`;
      g.appendChild(card);
    });
    d.appendChild(g);
    c.appendChild(d);
  });
  // re-observe new elements
  document.querySelectorAll(".rv:not(.vis)").forEach((el) => rvObs.observe(el));
  setTimeout(() => {
    document.querySelectorAll(".sk-fill").forEach((el) => {
      const o = new IntersectionObserver(
        (es) => {
          if (es[0].isIntersecting) {
            el.style.width = el.dataset.l + "%";
            o.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      o.observe(el);
    });
  }, 100);
}

/* ── PROJECTS RENDER ── */
function renderProjects(filter = "all") {
  const grid = document.getElementById("pjGrid");
  grid.innerHTML = "";
  const filtered = projectsData.filter(
    (p, i) => i < numShow && (filter === "all" || p.cat === filter),
  );
  filtered.forEach((p) => {
    const card = document.createElement("div");
    card.className = "pj-card";
    const title = lang === "ar" ? p.title.ar : p.title.en;
    const desc = lang === "ar" ? p.desc.ar : p.desc.en;
    const vl = lang === "ar" ? "عرض" : "View";
    const cl = lang === "ar" ? "الكود" : "Code";
    card.innerHTML = `<div class="pj-img"><img src="${p.img}" alt="${title}" loading="lazy"/><div class="pj-ov"><a href="${p.links.view}" class="ov-btn p" target="_blank">${vl}</a><a href="${p.links.code}" class="ov-btn g" target="_blank">${cl}</a></div></div><div class="pj-body"><h3 class="pj-ttl">${title}</h3><p class="pj-desc">${desc}</p><div class="pj-tags">${p.lang.map((t) => `<span class="tag">${t}</span>`).join("")}</div></div>`;
    grid.appendChild(card);
  });
  updateBtns(filter);
  if (typeof gsap !== "undefined") {
    gsap.fromTo(
      "#pjGrid .pj-card",
      { opacity: 0, y: 26 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.06,
        duration: 0.5,
        ease: "power2.out",
      },
    );
  }
}
function updateBtns(f = "all") {
  const total =
    f === "all"
      ? projectsData.length
      : projectsData.filter((p) => p.cat === f).length;
  const bm = document.getElementById("bmBtn"),
    bl = document.getElementById("blBtn");
  bm.classList.toggle("hide", numShow >= total);
  bl.classList.toggle("vis", numShow > INIT);
  bm.textContent = lang === "ar" ? "عرض المزيد ↓" : "Show More ↓";
  bl.textContent = lang === "ar" ? "عرض أقل ↑" : "Show Less ↑";
}
document.getElementById("bmBtn").addEventListener("click", () => {
  const f = document.querySelector(".f-btn.active")?.dataset.filter || "all";
  numShow = Math.min(numShow + STEP, projectsData.length);
  renderProjects(f);
});
document.getElementById("blBtn").addEventListener("click", () => {
  const f = document.querySelector(".f-btn.active")?.dataset.filter || "all";
  numShow = Math.max(numShow - STEP, INIT);
  renderProjects(f);
  document
    .getElementById("projects")
    .scrollIntoView({ behavior: "smooth", block: "start" });
});
document.getElementById("fBar").addEventListener("click", (e) => {
  const b = e.target.closest(".f-btn");
  if (!b) return;
  document
    .querySelectorAll(".f-btn")
    .forEach((x) => x.classList.remove("active"));
  b.classList.add("active");
  numShow = INIT;
  renderProjects(b.dataset.filter);
});

/* ── CONTACT FORM ── */
document.getElementById("ctForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const fm = document.getElementById("fm");
  fm.className = "fm ok";
  fm.textContent =
    lang === "ar"
      ? "✅ تم إرسال رسالتك بنجاح!"
      : "✅ Message sent successfully!";
  e.target.reset();
  setTimeout(() => {
    fm.className = "fm";
  }, 4000);
});

/* ── NAV HAMBURGER ── */
const ham = document.getElementById("ham"),
  mnav = document.getElementById("mnav");
ham.addEventListener("click", () => {
  mOpen = !mOpen;
  ham.classList.toggle("open", mOpen);
  mnav.classList.toggle("open", mOpen);
});
mnav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    mOpen = false;
    ham.classList.remove("open");
    mnav.classList.remove("open");
  }
});

/* ── NAV SCROLL ── */
window.addEventListener(
  "scroll",
  () => {
    const pos = window.scrollY + 80;
    ["hero", "about", "skills", "projects", "services", "contact"].forEach(
      (id) => {
        const sec = document.getElementById(id);
        if (
          sec &&
          pos >= sec.offsetTop &&
          pos < sec.offsetTop + sec.offsetHeight
        )
          document
            .querySelectorAll(".n-links a")
            .forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === "#" + id),
            );
      },
    );
    document
      .getElementById("nb")
      .classList.toggle("scrolled", window.scrollY > 20);
    // parallax orbs
    document.querySelector(".o1").style.transform =
      `translateY(${window.scrollY * 0.07}px)`;
    document.querySelector(".o2").style.transform =
      `translateY(${window.scrollY * -0.05}px)`;
  },
  { passive: true },
);

/* ── SCROLL REVEAL ── */
const rvObs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("vis");
    });
  },
  { threshold: 0.1 },
);
document.querySelectorAll(".rv").forEach((el) => rvObs.observe(el));

/* ── 3D TILT ── */
document.addEventListener("mousemove", (e) => {
  const card = e.target.closest(".pj-card,.ab-card,.sk-card");
  if (!card) return;
  const rect = card.getBoundingClientRect();
  const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
  const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
  card.style.transform = `perspective(600px) rotateY(${dx * 5}deg) rotateX(${-dy * 3}deg) translateY(-4px)`;
  card.style.boxShadow = `${-dx * 14}px ${-dy * 9}px 36px rgba(123,47,247,.18)`;
});
document.addEventListener(
  "mouseleave",
  (e) => {
    const card = e.target.closest(".pj-card,.ab-card,.sk-card");
    if (card) {
      card.style.transform = "";
      card.style.boxShadow = "";
    }
  },
  true,
);

/* ── GSAP ── */
function initGSAP() {
  gsap.registerPlugin(ScrollTrigger);
  gsap
    .timeline({ defaults: { ease: "power3.out" } })
    .to(".h-eye", { opacity: 1, y: 0, duration: 0.7 }, ".3")
    .to(".h-name", { opacity: 1, y: 0, duration: 0.85 }, "-.5")
    .to(".h-role", { opacity: 1, y: 0, duration: 0.65 }, "-.55")
    .to(".h-desc", { opacity: 1, y: 0, duration: 0.65 }, "-.5")
    .to(".h-btns", { opacity: 1, y: 0, duration: 0.6 }, "-.4")
    .to(".h-stats", { opacity: 1, y: 0, duration: 0.6 }, "-.35")
    .to(".h-vis", { opacity: 1, x: 0, duration: 0.95 }, "-.85")
    .fromTo(
      ".soc-pill",
      { opacity: 0, x: 24 },
      { opacity: 1, x: 0, stagger: 0.1, duration: 0.5 },
      "-.5",
    );

  gsap.fromTo(
    ".ab-txt",
    { opacity: 0, x: -40 },
    {
      opacity: 1,
      x: 0,
      duration: 0.85,
      ease: "power2.out",
      scrollTrigger: { trigger: "#about", start: "top 78%" },
    },
  );
  gsap.fromTo(
    ".ab-card",
    { opacity: 0, y: 26 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.09,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: ".ab-cards", start: "top 82%" },
    },
  );
  gsap.fromTo(
    ".tl-it",
    { opacity: 0, x: -22 },
    {
      opacity: 1,
      x: 0,
      stagger: 0.16,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: ".tl", start: "top 82%" },
    },
  );
  gsap.fromTo(
    ".svc-it",
    { opacity: 0, y: 20 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.09,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: ".svc-list", start: "top 82%" },
    },
  );
  gsap.fromTo(
    ".ct-item",
    { opacity: 0, x: -24 },
    {
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 0.65,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 78%" },
    },
  );
  gsap.fromTo(
    ".fg",
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power2.out",
      scrollTrigger: { trigger: "#contact", start: "top 78%" },
    },
  );
  gsap.to(".o1", {
    y: -75,
    scrollTrigger: { trigger: "#hero", scrub: 1.5 },
  });
  gsap.to(".o2", {
    y: 55,
    scrollTrigger: { trigger: "#hero", scrub: 2 },
  });
}

/* ── INIT ── */
document.getElementById("fyear").textContent = new Date().getFullYear();
applyLang();
