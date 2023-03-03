import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
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

const gui = new dat.GUI();

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
const cubeTextureLoader = new THREE.CubeTextureLoader();

const doorAlphaTexture = textureLoader.load("./textures/door/alpha.jpg");
const doorColorTexture = textureLoader.load("./textures/door/color.jpg");
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
const matCapTexture = textureLoader.load("./textures/matcaps/4.png");
const gradientTexture = textureLoader.load("./textures/gradients/3.jpg");
const enivormentMapTexture = cubeTextureLoader.load([
  "./textures/environmentMaps/0/px.jpg",
  "./textures/environmentMaps/0/nx.jpg",
  "./textures/environmentMaps/0/py.jpg",
  "./textures/environmentMaps/0/ny.jpg",
  "./textures/environmentMaps/0/pz.jpg",
  "./textures/environmentMaps/0/nz.jpg",
]);
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
  map: doorColorTexture,
  wireframe: false,
}); */
const material = new THREE.MeshStandardMaterial();
/* material.matcap = matCapTexture;
material.map = doorColorTexture;
material.aoMap = doorAmbientOcclusionTexture;
material.aoMapIntensity = 1;
material.normalMap = doorNormalTexture;
material.normalScale.set(0.5, 0.5);
material.displacementMap = doorHeightTexture;
material.displacementScale = 0.5;
material.metalnessMap = doorMetalnessTexture;
material.roughnessMap = doorRoughnessTexture; */
material.metalness = 0.7;
material.roughness = 0.2;
material.envMap = enivormentMapTexture;
gui.add(material, "metalness").min(0).max(1).step(0.0001);
gui.add(material, "roughness").min(0).max(1).step(0.0001);

material.side = THREE.DoubleSide;
//material.wireframe = true;
//material.flatShading = true;

const sphere = new THREE.Mesh(geometry, material);
const torus = new THREE.Mesh(
  new THREE.TorusGeometry(0.3, 0.2, 36, 32),
  material
);
const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material);
scene.add(sphere, torus, plane);
sphere.position.y = 1.5;
torus.position.y = -1.5;

camera.position.z = 3;

scene.add(camera);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 0.5);
pointLight.position.set(5, 10, 5);
scene.add(pointLight);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
const clock = new THREE.Clock();

const rotate = () => {
  const elapsedTime = clock.getElapsedTime();
  sphere.rotation.y = elapsedTime * 2;
  plane.rotation.y = elapsedTime * 3;
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
