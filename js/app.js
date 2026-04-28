
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
            { name: "Python", level: 75 },
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
            "prisma",
            "mongodb",
            "jwt",
          ],
          category: "web",
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
          category: "web",
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
          category: "web",
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
          category: "web",
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
          category: "web",
          links: { view: "#", code: "#" },
        },
      ];

      let lang = "en",
        theme = "dark",
        mobileOpen = false;
      const STEP = 3,
        INITIAL = 6;
      let numShow = INITIAL;

      // CURSOR
      const cur = document.getElementById("cursor"),
        cring = document.getElementById("cursorRing");
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
      (function animRing() {
        rx += (mx - rx) * 0.1;
        ry += (my - ry) * 0.1;
        cring.style.left = rx + "px";
        cring.style.top = ry + "px";
        requestAnimationFrame(animRing);
      })();
      document
        .querySelectorAll(
          "a,button,.project-card,.about-card,.service-item,.social-pill",
        )
        .forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cur.style.width = "16px";
            cur.style.height = "16px";
            cring.style.width = "60px";
            cring.style.height = "60px";
          });
          el.addEventListener("mouseleave", () => {
            cur.style.width = "8px";
            cur.style.height = "8px";
            cring.style.width = "36px";
            cring.style.height = "36px";
          });
        });

      // PRELOADER
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
        }, 2100);
      });

      // RENDER SKILLS
      function renderSkills() {
        const c = document.getElementById("skills-container");
        c.innerHTML = "";
        skillsData.forEach((cat) => {
          const d = document.createElement("div");
          d.className = "skills-category";
          const l = document.createElement("div");
          l.className = "cat-label";
          l.textContent = lang === "ar" ? cat.category.ar : cat.category.en;
          d.appendChild(l);
          const g = document.createElement("div");
          g.className = "skills-grid";
          cat.skills.forEach((sk) => {
            const card = document.createElement("div");
            card.className = "skill-card";
            card.innerHTML = `<div class="skill-header"><span class="skill-name">${sk.name}</span><span class="skill-pct">${sk.level}%</span></div><div class="skill-bar"><div class="skill-fill" data-level="${sk.level}"></div></div>`;
            g.appendChild(card);
          });
          d.appendChild(g);
          c.appendChild(d);
        });
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

      // RENDER PROJECTS
      function renderProjects(filter = "all") {
        const grid = document.getElementById("projectsGrid");
        grid.innerHTML = "";
        const filtered = projectsData
          .slice(0, numShow)
          .filter((p) => filter === "all" || p.category === filter);
        filtered.forEach((p) => {
          const card = document.createElement("div");
          card.className = "project-card fade-up";
          const title = lang === "ar" ? p.title.ar : p.title.en;
          const desc = lang === "ar" ? p.desc.ar : p.desc.en;
          card.innerHTML = `<div class="project-img"><img src="${p.img}" alt="${title}" loading="lazy"/><div class="project-overlay"><a href="${p.links.view}" class="overlay-btn primary" target="_blank">${lang === "ar" ? "عرض" : "View"}</a><a href="${p.links.code}" class="overlay-btn ghost" target="_blank">${lang === "ar" ? "الكود" : "Code"}</a></div></div><div class="project-body"><h3 class="project-title">${title}</h3><p class="project-desc">${desc}</p><div class="project-tags">${p.lang.map((t) => `<span class="tag">${t}</span>`).join("")}</div></div>`;
          grid.appendChild(card);
        });
        updateBtns();
        if (typeof gsap !== "undefined") {
          gsap.fromTo(
            "#projectsGrid .fade-up",
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              stagger: 0.07,
              duration: 0.55,
              ease: "power2.out",
            },
          );
        }
      }
      function updateBtns() {
        const f =
          document.querySelector(".filter-btn.active")?.dataset.filter || "all";
        const total =
          f === "all"
            ? projectsData.length
            : projectsData.filter((p) => p.category === f).length;
        document
          .getElementById("showMoreBtn")
          .classList.toggle("hidden", numShow >= total);
        document
          .getElementById("showLessBtn")
          .classList.toggle("visible", numShow > INITIAL);
        document.getElementById("showMoreBtn").textContent =
          lang === "ar" ? "عرض المزيد ↓" : "Show More ↓";
        document.getElementById("showLessBtn").textContent =
          lang === "ar" ? "عرض أقل ↑" : "Show Less ↑";
      }
      document.getElementById("showMoreBtn").addEventListener("click", () => {
        const f =
          document.querySelector(".filter-btn.active")?.dataset.filter || "all";
        numShow = Math.min(numShow + STEP, projectsData.length);
        renderProjects(f);
      });
      document.getElementById("showLessBtn").addEventListener("click", () => {
        const f =
          document.querySelector(".filter-btn.active")?.dataset.filter || "all";
        numShow = Math.max(numShow - STEP, INITIAL);
        renderProjects(f);
        document
          .getElementById("projects")
          .scrollIntoView({ behavior: "smooth", block: "start" });
      });
      document.getElementById("filterBar").addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        numShow = INITIAL;
        renderProjects(btn.dataset.filter);
      });

      // CONTACT FORM
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

      // THEME
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

      // LANGUAGE
      function applyLang() {
        const html = document.documentElement;
        html.setAttribute("lang", lang);
        html.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
        document.getElementById("langBtn").textContent =
          lang === "ar" ? "English" : "عربي";
        document.querySelectorAll("[data-en]").forEach((el) => {
          el.textContent = lang === "ar" ? el.dataset.ar : el.dataset.en;
        });
        ["nameInput", "emailInput", "msgInput"].forEach((id) => {
          const el = document.getElementById(id);
          if (!el) return;
          if (lang === "ar") {
            if (id === "nameInput") el.placeholder = "محمد وفيق";
            if (id === "emailInput") el.placeholder = "you@example.com";
            if (id === "msgInput") el.placeholder = "أخبرني عن مشروعك...";
          } else {
            if (id === "nameInput") el.placeholder = "Mohamed Wafik";
            if (id === "emailInput") el.placeholder = "you@example.com";
            if (id === "msgInput")
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

      // HAMBURGER
      const hamburger = document.getElementById("hamburger"),
        mobileNav = document.getElementById("mobileNav");
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

      // ACTIVE NAV + SCROLL
      window.addEventListener(
        "scroll",
        () => {
          const pos = window.scrollY + 80;
          [
            "hero",
            "about",
            "skills",
            "projects",
            "services",
            "contact",
          ].forEach((id) => {
            const sec = document.getElementById(id);
            if (
              sec &&
              pos >= sec.offsetTop &&
              pos < sec.offsetTop + sec.offsetHeight
            ) {
              document.querySelectorAll(".nav-links a").forEach((a) => {
                a.classList.toggle(
                  "active",
                  a.getAttribute("href") === "#" + id,
                );
              });
            }
          });
          document
            .getElementById("navbar")
            .classList.toggle("scrolled", window.scrollY > 20);
        },
        { passive: true },
      );

      // GSAP
      function initGSAP() {
        gsap.registerPlugin(ScrollTrigger);

        // Hero sequence
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .to(".hero-eyebrow", { opacity: 1, y: 0, duration: 0.8 }, ".4")
          .to(".hero-name", { opacity: 1, y: 0, duration: 0.9 }, "-.5")
          .to(".hero-role", { opacity: 1, y: 0, duration: 0.7 }, "-.6")
          .to(".hero-desc", { opacity: 1, y: 0, duration: 0.7 }, "-.5")
          .to(".hero-btns", { opacity: 1, y: 0, duration: 0.6 }, "-.4")
          .to(".hero-stats", { opacity: 1, y: 0, duration: 0.6 }, "-.3")
          .to(".hero-visual", { opacity: 1, x: 0, duration: 1.0 }, "-.9")
          .fromTo(
            ".social-pill",
            { opacity: 0, x: 28 },
            { opacity: 1, x: 0, stagger: 0.12, duration: 0.5 },
            "-.5",
          );

        // Scroll reveals
        gsap.fromTo(
          ".about-text-block",
          { opacity: 0, x: -45 },
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
          { opacity: 0, y: 28 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: ".about-cards", start: "top 80%" },
          },
        );
        gsap.fromTo(
          ".tl-item",
          { opacity: 0, x: -26 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.18,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: ".timeline", start: "top 80%" },
          },
        );
        gsap.fromTo(
          ".about-stat",
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.08,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: { trigger: ".about-stats", start: "top 85%" },
          },
        );

        document
          .querySelectorAll(".section-title,.section-sub,.section-tag")
          .forEach((el) => {
            gsap.fromTo(
              el,
              { opacity: 0, y: 25 },
              {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: "power2.out",
                scrollTrigger: { trigger: el, start: "top 88%" },
              },
            );
          });

        ScrollTrigger.create({
          trigger: "#skills",
          start: "top 75%",
          once: true,
          onEnter() {
            gsap.fromTo(
              ".skills-category",
              { opacity: 0, y: 36 },
              {
                opacity: 1,
                y: 0,
                stagger: 0.12,
                duration: 0.7,
                ease: "power2.out",
              },
            );
            gsap.fromTo(
              ".skill-card",
              { opacity: 0, scale: 0.9 },
              {
                opacity: 1,
                scale: 1,
                stagger: 0.03,
                duration: 0.5,
                ease: "back.out(1.2)",
              },
            );
          },
        });

        gsap.fromTo(
          ".service-item",
          { opacity: 0, y: 22 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: ".services-list", start: "top 80%" },
          },
        );

        gsap.fromTo(
          ".contact-item",
          { opacity: 0, x: -28 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.12,
            duration: 0.7,
            ease: "power2.out",
            scrollTrigger: { trigger: "#contact", start: "top 75%" },
          },
        );
        gsap.fromTo(
          ".contact-form .form-group",
          { opacity: 0, y: 18 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.09,
            duration: 0.5,
            ease: "power2.out",
            scrollTrigger: { trigger: "#contact", start: "top 75%" },
          },
        );

        // Parallax orbs
        gsap.to(".orb-1", {
          y: -80,
          scrollTrigger: { trigger: "#hero", scrub: 1.5 },
        });
        gsap.to(".orb-2", {
          y: 60,
          scrollTrigger: { trigger: "#hero", scrub: 2 },
        });
      }

      // INIT
      document.getElementById("footerYear").textContent =
        new Date().getFullYear();
      const savedLang = localStorage.getItem("mw_lang");
      if (savedLang) lang = savedLang;
      applyLang();
