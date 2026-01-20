const starsContainer = document.getElementById("stars");

if (starsContainer) {
  // Create stars efficiently using DocumentFragment
  const fragment = document.createDocumentFragment();
  const starCount = 250; // Optimized count for performance

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

  // Shooting stars object pool for memory efficiency
  class ShootingStarPool {
    constructor(size = 3) {
      this.pool = [];
      this.size = size;

      for (let i = 0; i < size; i++) {
        const star = document.createElement("div");
        star.className = "shooting-star";
        this.pool.push({
          element: star,
          inUse: false,
        });
      }
    }

    acquire() {
      const available = this.pool.find((s) => !s.inUse);
      if (available) {
        available.inUse = true;
        return available;
      }

      // Create new if pool exhausted
      const newStar = document.createElement("div");
      newStar.className = "shooting-star";
      const poolEntry = { element: newStar, inUse: true };
      this.pool.push(poolEntry);
      return poolEntry;
    }

    release(poolEntry) {
      poolEntry.inUse = false;
      if (poolEntry.element.parentNode) {
        poolEntry.element.remove();
      }
    }
  }

  const shootingStarPool = new ShootingStarPool(3);

  function createShootingStar() {
    const pooledStar = shootingStarPool.acquire();
    const star = pooledStar.element;

    star.style.top = Math.random() * 50 + "%";
    star.style.right = "0";

    if (star.parentNode !== document.body) {
      document.body.appendChild(star);
    }

    // Auto-release after animation completes
    setTimeout(() => {
      shootingStarPool.release(pooledStar);
    }, 3000);
  }

  // Create shooting stars every 5 seconds with auto-stop
  let shootingStarInterval;
  let shootingStarTimeout;

  function startShootingStars() {
    if (!shootingStarInterval) {
      shootingStarInterval = setInterval(createShootingStar, 5000);
      createShootingStar();
    }
    resetIdleTimeout();
  }

  function resetIdleTimeout() {
    clearTimeout(shootingStarTimeout);
    shootingStarTimeout = setTimeout(() => {
      clearInterval(shootingStarInterval);
      shootingStarInterval = null;
    }, 30000);
  }

  // Resume on scroll, pause after idle
  window.addEventListener("scroll", startShootingStars, { passive: true });
}
