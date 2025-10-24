// simple-dotnet-background.js
class SimpleDotNetBackground {
  constructor() {
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.dots = [];
    this.connections = [];

    this.init();
    this.animate();
  }

  init() {
    const canvas = document.getElementById("three-bg");

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.z = 50;

    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      alpha: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    this.createGridNetwork();
    window.addEventListener("resize", this.onWindowResize.bind(this));
  }

  createGridNetwork() {
    // Create a grid of dots
    const gridSize = 6;
    const spacing = 15;

    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const dot = new THREE.Vector3(
          (x - gridSize / 2) * spacing,
          (y - gridSize / 2) * spacing,
          0
        );

        this.dots.push(dot);
      }
    }

    // Create dots visualization
    const dotGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(this.dots.length * 3);

    this.dots.forEach((dot, i) => {
      positions[i * 3] = dot.x;
      positions[i * 3 + 1] = dot.y;
      positions[i * 3 + 2] = dot.z;
    });

    dotGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const dotMaterial = new THREE.PointsMaterial({
      color: 0x68217a, // .NET purple
      size: 2,
      transparent: true,
      opacity: 0.8,
    });

    this.dotMesh = new THREE.Points(dotGeometry, dotMaterial);
    this.scene.add(this.dotMesh);

    // Create connections
    this.createGridConnections();

    // Store original positions
    this.originalPositions = positions.slice();
  }

  createGridConnections() {
    const gridSize = 6;

    // Connect horizontally and vertically
    for (let x = 0; x < gridSize; x++) {
      for (let y = 0; y < gridSize; y++) {
        const index = x * gridSize + y;

        // Connect to right neighbor
        if (x < gridSize - 1) {
          this.createConnection(this.dots[index], this.dots[index + gridSize]);
        }

        // Connect to bottom neighbor
        if (y < gridSize - 1) {
          this.createConnection(this.dots[index], this.dots[index + 1]);
        }
      }
    }
  }

  createConnection(dot1, dot2) {
    const geometry = new THREE.BufferGeometry().setFromPoints([dot1, dot2]);
    const material = new THREE.LineBasicMaterial({
      color: 0x512d6d,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    });

    const line = new THREE.Line(geometry, material);
    this.scene.add(line);
    this.connections.push(line);
  }

  animate() {
    requestAnimationFrame(this.animate.bind(this));

    const time = Date.now() * 0.001;
    const positions = this.dotMesh.geometry.attributes.position.array;

    // Gentle wave animation
    for (let i = 0; i < this.dots.length; i++) {
      const i3 = i * 3;
      const x = this.originalPositions[i3];
      const y = this.originalPositions[i3 + 1];

      positions[i3 + 2] = Math.sin(time + x * 0.1 + y * 0.1) * 3;
    }

    this.dotMesh.geometry.attributes.position.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SimpleDotNetBackground();
});
