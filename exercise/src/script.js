import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Texture } from "three";
const canvas = document.querySelector(".webgl");
const cursor = {
  x: 0,
  y: 0,
};
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth,
};
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);

window.addEventListener("mousemove", (event) => {
  cursor.x = event.clientX / sizes.width - 0.5;
  cursor.y = event.clientY / sizes.height - 0.5;
});

window.addEventListener("resize", (event) => {
  sizes.height = window.innerHeight;
  sizes.width = window.innerWidth;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

window.addEventListener("dblclick", () => {
  if (!document.fullscreenElement) {
    canvas.requestFullscreen();
  } else {
    document.exitFullscreen();
  }
});

const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const scene = new THREE.Scene();

const textureLoader = new THREE.TextureLoader();
const doorAlphaTexture = textureLoader.load("./textures/door/alpha.jpg");
const doorColorTexture = textureLoader.load("./textures/extra/coin.png");
const mapTexture = textureLoader.load("./textures/extra/map.png");
const doorHeightTexture = textureLoader.load("./textures/door/height.jpg");
const doorAmbientOcclusionTexture = textureLoader.load(
  "./textures/door/ambientOcclusion.jpg"
);
const doorNormalTexture = textureLoader.load("./textures/door/normal.jpg");
const doorRoughnessTexture = textureLoader.load(
  "./textures/door/roughness.jpg"
);
const doorMetalnessTexture = textureLoader.load(
  "./textures/door/metalness.jpg"
);
const matCapTexture = textureLoader.load("./textures/matcaps/8.png");
const earthMatCapTexture = textureLoader.load("./textures/matcaps/2.png");
const gradientTexture = textureLoader.load("./textures/gradients/3.jpg");
/* const count = 500;
const positionArray = new Float32Array(count * 3 * 3);
for (let i = 0; i < count * 3 * 3; i++) {
  positionArray[i] = Math.random() - 0.5;
}

const positionAttributes = new THREE.BufferAttribute(positionArray, 3);
const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", positionAttributes); */

/* texture.rotation = Math.PI / 4;
texture.center.x = 0.5;
texture.center.y = 0.5; */
/* texture.magFilter = THREE.NearestFilter;
texture.generateMipmaps = false; */
const geometry = new THREE.SphereGeometry(0.5, 36, 36);
/* const material = new THREE.MeshBasicMaterial({
  map: doorColorTextrelativeure,
  wireframe: false,
}); */
const material = new THREE.MeshMatcapMaterial();
material.matcap = matCapTexture;
material.map = doorColorTexture;

const earthMaterial = new THREE.MeshMatcapMaterial();
earthMaterial.matcap = earthMatCapTexture;
earthMaterial.map = mapTexture;

material.side = THREE.DoubleSide;
//material.wireframe = true;
//material.flatShading = true;

const sphere = new THREE.Mesh(geometry, earthMaterial);
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 36, 32),
  material
);
const plane = new THREE.Mesh(new THREE.CylinderGeometry(5, 5, 1, 32), material);
scene.add(sphere, plane);
sphere.position.y = 1.5;
sphere.position.x = 4;
torus.position.y = -1.5;
plane.position.y = -1.5;

camera.position.z = 50;
camera.position.y = 20;
camera.position.x = 20;

const ambientLight = new THREE.AmbientLight(0xffffffff, 0.5);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xffffffff, 5);
pointLight.position.z = 1;
pointLight.position.y = 5;
pointLight.position.x = 1;
scene.add(pointLight);
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const clock = new THREE.Clock();

const planeRadius = 4;

const rotate = () => {
  const elapsedTime = clock.getElapsedTime();

  const angle = elapsedTime;
  const sphereX = planeRadius * Math.cos(angle);
  const sphereZ = planeRadius * Math.sin(angle);
  sphere.position.set(sphereX, 0, sphereZ);

  sphere.rotation.y = 2 * elapsedTime;
  plane.rotation.y = -elapsedTime / 15;
  torus.rotation.y = elapsedTime * 4;

  /*   camera.position.x = -cursor.x * 10;
  camera.position.y = cursor.y * 10;
  camera.lookAt(cube.position); */
  //cube.material.color.setHSL(elapsedTime / 10, 0.5, 0.5);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(rotate);
};

rotate();
