import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 120;

const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById("bg").appendChild(renderer.domElement);

// عدد النقاط
const PARTICLE_COUNT = 150;
const positions = new Float32Array(PARTICLE_COUNT * 3);
const particles = [];

for (let i = 0; i < PARTICLE_COUNT; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 200;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 200;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 200;

  particles.push({
    x: positions[i * 3],
    y: positions[i * 3 + 1],
    z: positions[i * 3 + 2],
    vx: (Math.random() - 0.5) * 0.05,
    vy: (Math.random() - 0.5) * 0.05,
    vz: (Math.random() - 0.5) * 0.05,
  });
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

// 🔹 نقاط صغيرة (مربعات صغيرة)
const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 1.2, // 👈 حجم أصغر
});

const points = new THREE.Points(geometry, material);
scene.add(points);

// 🔹 خطوط بين النقاط
const lineMaterial = new THREE.LineBasicMaterial({
  color: 0x4a5568,
  opacity: 0.5,
  transparent: true,
});

const lineGeometry = new THREE.BufferGeometry();
let linePositions = new Float32Array(PARTICLE_COUNT * PARTICLE_COUNT * 3);
lineGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage)
);

const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
scene.add(lines);

// 🔹 تأثير الماوس (Parallax)
const mouse = { x: 0, y: 0 };
window.addEventListener("mousemove", (e) => {
  mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
  mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
});

function animate() {
  requestAnimationFrame(animate);

  const pos = geometry.attributes.position.array;
  let linePos = lines.geometry.attributes.position.array;
  let idx = 0;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles[i].x += particles[i].vx;
    particles[i].y += particles[i].vy;
    particles[i].z += particles[i].vz;

    if (particles[i].x > 100 || particles[i].x < -100) particles[i].vx *= -1;
    if (particles[i].y > 100 || particles[i].y < -100) particles[i].vy *= -1;
    if (particles[i].z > 100 || particles[i].z < -100) particles[i].vz *= -1;

    pos[i * 3] = particles[i].x;
    pos[i * 3 + 1] = particles[i].y;
    pos[i * 3 + 2] = particles[i].z;

    for (let j = i + 1; j < PARTICLE_COUNT; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dz = particles[i].z - particles[j].z;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

      if (dist < 30) {
        linePos[idx++] = particles[i].x;
        linePos[idx++] = particles[i].y;
        linePos[idx++] = particles[i].z;

        linePos[idx++] = particles[j].x;
        linePos[idx++] = particles[j].y;
        linePos[idx++] = particles[j].z;
      }
    }
  }

  geometry.attributes.position.needsUpdate = true;
  lines.geometry.setDrawRange(0, idx / 3);
  lines.geometry.attributes.position.needsUpdate = true;

  // 🔹 حركة الكاميرا مع الماوس
  camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;
  camera.position.y += (mouse.y * 10 - camera.position.y) * 0.05;

  renderer.render(scene, camera);
}

animate();

window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
