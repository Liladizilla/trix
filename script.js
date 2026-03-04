// Example script.js file

// This could be for handling a form submit
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Form submitted!");
});

// Or any other interactivity, like changing elements or handling animations.
// 🚀 BLACK HOLE BACKGROUND (Three.js)
const canvas = document.getElementById("bgCanvas");
const scene = new THREE.Scene();
let camera, renderer;

function initBlackhole() {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 1);

  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 1;

  const geometry = new THREE.PlaneGeometry(2, 2);

  const material = new THREE.ShaderMaterial({
    vertexShader: `
      void main() {
        gl_Position = vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      precision highp float;
      uniform float time;
      uniform vec2 resolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / resolution.xy;
        uv = uv * 2.0 - 1.0;
        uv.x *= resolution.x / resolution.y;

        float r = length(uv);
        float angle = atan(uv.y, uv.x);

        float spin = 0.3 * time;
        angle += spin;

        float radius = 0.4;
        float glow = smoothstep(radius, radius + 0.05, r);
        float sphere = smoothstep(radius - 0.02, radius, r);

        float colorFactor = pow(1.0 - r, 3.0);
        vec3 color = vec3(0.0, 0.2, 0.6) * colorFactor;
        color += vec3(1.0, 0.6, 0.1) * glow * (1.0 - sphere);

        gl_FragColor = vec4(color, 1.0);
      }
    `,
    uniforms: {
      time: { value: 0 },
      resolution: { value: new THREE.Vector2() },
    },
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  window.addEventListener("resize", onWindowResize);

  function animate(time) {
    material.uniforms.time.value = time * 0.0005;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

function onWindowResize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  scene.children[0].material.uniforms.resolution.value.set(w, h);
}

initBlackhole();