const starsContainer = document.getElementById("stars");

// إنشاء النجوم
for (let i = 0; i < 400; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = Math.random() * 2.5 + 0.5;
  star.style.width = size + "px";
  star.style.height = size + "px";

  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";

  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  star.style.animationDelay = Math.random() * 3 + "s";

  starsContainer.appendChild(star);
}

// إنشاء نجوم منطلقة
function createShootingStar() {
  const shootingStar = document.createElement("div");
  shootingStar.className = "shooting-star";
  shootingStar.style.top = Math.random() * 50 + "%";
  shootingStar.style.right = "0";
  document.body.appendChild(shootingStar);

  setTimeout(() => {
    shootingStar.remove();
  }, 3000);
}

setInterval(createShootingStar, 4000);
createShootingStar();
