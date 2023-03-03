import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
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
const axesHelper = new THREE.AxesHelper();
//scene.add(axesHelper);

const textureLoader = new THREE.TextureLoader();
const matCapTexture = textureLoader.load("./textures/matcaps/8.png");

const fontLoader = new FontLoader();
fontLoader.load("./fonts/helvetiker_regular.typeface.json", (font) => {
  const textGeometry = new TextGeometry("StoryBrain", {
    font: font,
    size: 0.5,
    height: 0.2,
    curveSegments: 5,
    bevelEnabled: true,
    bevelThickness: 0.01,
    bevelSize: 0.02,
    bevelOffset: 0,
    bevelSegments: 4,
  });
  textGeometry.center();
  const textMaterial = new THREE.MeshMatcapMaterial({
    wireframe: false,
  });
  textMaterial.matcap = matCapTexture;
  const text = new THREE.Mesh(textGeometry, textMaterial);
  scene.add(text);
});
console.time("donuts");
const donutGeometry = new THREE.TorusGeometry(0.3, 0.2, 20, 45);
const donutMaterial = new THREE.MeshMatcapMaterial({ matcap: matCapTexture });
for (let i = 0; i < 1000; i++) {
  const donut = new THREE.Mesh(donutGeometry, donutMaterial);
  scene.add(donut);
  donut.position.x = (Math.random() - 0.5) * 10;
  donut.position.y = (Math.random() - 0.5) * 10;
  donut.position.z = (Math.random() - 0.5) * 10;

  donut.rotation.x = Math.random() * Math.PI;
  donut.rotation.y = Math.random() * Math.PI;

  const scale = Math.random();
  donut.scale.set(scale, scale, scale);
}
console.timeEnd("donuts");
/* 
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
]); */
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

/* const material = new THREE.MeshBasicMaterial({
  map: doorColorTexture,
  wireframe: false,
}); */

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

//material.envMap = enivormentMapTexture;

//material.side = THREE.DoubleSide;
//material.wireframe = true;
//material.flatShading = true;

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

  /*   sphere.rotation.y = elapsedTime * 2;
  plane.rotation.y = elapsedTime * 3;
  torus.rotation.y = elapsedTime * 4; */

  /*   camera.position.x = -cursor.x * 10;
  camera.position.y = cursor.y * 10;
  camera.lookAt(cube.position); */
  //cube.material.color.setHSL(elapsedTime / 10, 0.5, 0.5);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(rotate);
};

rotate();
