const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let mouse = {
  x: null,
  y: null,
};

const particles = [];
const particleCount = 250;
const mouseRadius = 100;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.baseX = this.x;
    this.baseY = this.y;
    this.size = Math.random() * 3 + 1;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.speedY = (Math.random() - 0.5) * 0.3;
    this.color = `rgba(255, 255, 255, ${Math.random() * 0.5 + 0.5})`;
  }

  update() {
    this.baseX += this.speedX;
    this.baseY += this.speedY;

    if (this.baseX < 0) this.baseX = canvas.width;
    if (this.baseX > canvas.width) this.baseX = 0;
    if (this.baseY < 0) this.baseY = canvas.height;
    if (this.baseY > canvas.height) this.baseY = 0;

    if (mouse.x != null && mouse.y != null) {
      const dx = mouse.x - this.baseX;
      const dy = mouse.y - this.baseY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < mouseRadius) {
        const force = (mouseRadius - distance) / mouseRadius;
        const angle = Math.atan2(dy, dx);
        this.x = this.baseX - Math.cos(angle) * force * 50;
        this.y = this.baseY - Math.sin(angle) * force * 50;
      } else {
        // ترجع لمكانها بشكل ناعم
        this.x += (this.baseX - this.x) * 0.05;
        this.y += (this.baseY - this.y) * 0.05;
      }
    } else {
      this.x = this.baseX;
      this.y = this.baseY;
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

window.addEventListener("mouseout", () => {
  mouse.x = null;
  mouse.y = null;
});

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  requestAnimationFrame(animate);
}

animate();
