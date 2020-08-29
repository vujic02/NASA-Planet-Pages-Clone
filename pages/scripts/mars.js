let scene, camera, renderer;

function init() {
  let container = document.querySelector(".mars");

  scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xdddddd); -=-=- OVO JE BLOKIRALO MOJ BACKGROUND

  camera = new THREE.PerspectiveCamera(
    40,
    window.innerWidth / window.innerHeight,
    1,
    5000
  );
  camera.rotation.y = (45 / 180) * Math.PI;
  camera.position.x = 800;
  camera.position.y = 100;
  camera.position.z = 1000;

  hlight = new THREE.AmbientLight(0x404040, 5);
  scene.add(hlight);

  renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  window.addEventListener("resize", onWindowResize);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);

  // to disable zoom
  controls.enableZoom = false;

  // to disable pan
  controls.enablePan = false;

  controls.update();

  let loader = new THREE.GLTFLoader();

  loader.load("./3d_models/Mars.glb", function (gltf) {
    planet = gltf.scene.children[0];
    planet.scale.set(0.5, 0.5, 0.5);
    scene.add(gltf.scene);
    animate();
  });
}

function onWindowResize() {
  let width = window.innerWidth;
  let height = window.innerHeight;
  renderer.setSize(width, height);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function animate() {
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

init();
