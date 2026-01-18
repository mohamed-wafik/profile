const starsContainer = document.getElementById("stars");

// Create stars efficiently using DocumentFragment
const fragment = document.createDocumentFragment();
const starCount = 250; // Reduced from 400 for better performance

for (let i = 0; i < starCount; i++) {
  const star = document.createElement("div");
  star.className = "star";

  const size = Math.random() * 2.5 + 0.5;
  star.style.width = size + "px";
  star.style.height = size + "px";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDuration = Math.random() * 3 + 2 + "s";
  star.style.animationDelay = Math.random() * 3 + "s";

  fragment.appendChild(star);
}

starsContainer.appendChild(fragment);

// Shooting stars pool to reuse elements
const shootingStarsPool = [];
const poolSize = 3;

for (let i = 0; i < poolSize; i++) {
  const star = document.createElement("div");
  star.className = "shooting-star";
  shootingStarsPool.push({
    element: star,
    inUse: false,
  });
}

function createShootingStar() {
  // Find available star from pool
  let pooledStar = shootingStarsPool.find((s) => !s.inUse);

  if (!pooledStar) {
    // Create new if pool exhausted
    const newStar = document.createElement("div");
    newStar.className = "shooting-star";
    shootingStarsPool.push({
      element: newStar,
      inUse: true,
    });
    pooledStar = shootingStarsPool[shootingStarsPool.length - 1];
  }

  const star = pooledStar.element;
  pooledStar.inUse = true;

  star.style.top = Math.random() * 50 + "%";
  star.style.right = "0";

  if (star.parentNode !== document.body) {
    document.body.appendChild(star);
  }

  setTimeout(() => {
    pooledStar.inUse = false;
    star.remove();
  }, 3000);
}

// Create shooting stars every 5 seconds instead of 4 (less frequent)
let shootingStarInterval = setInterval(createShootingStar, 5000);
createShootingStar();

// Stop creating shooting stars after 30 seconds of no scroll activity
let shootingStarTimeout;
function resetShootingStarTimeout() {
  clearTimeout(shootingStarTimeout);
  shootingStarTimeout = setTimeout(() => {
    clearInterval(shootingStarInterval);
  }, 30000);
}
