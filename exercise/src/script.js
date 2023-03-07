import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import bgm from "./bgm.mp3";
/**
 * Base
 */
// Debug
const gui = new dat.GUI();
let action = null;
let gltf = null;
let animationIndex = 0;

//fox moves
const run = document.querySelector(".run");
const walk = document.querySelector(".walk");
const look = document.querySelector(".look");

run.addEventListener("click", () => {
  console.log("run clicked");
  animationIndex = 2;
  if (gltf && action) {
    const newClip = gltf.animations[animationIndex];
    action.stop();
    action = mixer.clipAction(newClip);
    action.play();
  }
  const music = new Audio(bgm);
  music.play();
  music.loop = true;
  console.log(music);
});

walk.addEventListener("click", () => {
  animationIndex = 1;
  if (gltf && action) {
    const newClip = gltf.animations[animationIndex];
    action.stop();
    action = mixer.clipAction(newClip);
    action.play();
  }
});

look.addEventListener("click", () => {
  animationIndex = 0;
  if (gltf && action) {
    const newClip = gltf.animations[animationIndex];
    action.stop();
    action = mixer.clipAction(newClip);
    action.play();
  }
});

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

const fog = new THREE.Fog("#262837", 0, 15);
scene.fog = fog;

//textures
const textureLoader = new THREE.TextureLoader();

const grassColorTexture = textureLoader.load("/textures/grass/color.jpg");
const grassAmbientOcclusionTexture = textureLoader.load(
  "/textures/grass/ambientOcclusion.jpg"
);
const grassNormalTexture = textureLoader.load("/textures/grass/normal.jpg");
const grassRoughnessTexture = textureLoader.load(
  "/textures/grass/roughness.jpg"
);

grassColorTexture.repeat.set(8, 8);
grassAmbientOcclusionTexture.repeat.set(8, 8);
grassNormalTexture.repeat.set(8, 8);
grassRoughnessTexture.repeat.set(8, 8);

grassColorTexture.wrapS = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapS = THREE.RepeatWrapping;
grassNormalTexture.wrapS = THREE.RepeatWrapping;
grassRoughnessTexture.wrapS = THREE.RepeatWrapping;

grassColorTexture.wrapT = THREE.RepeatWrapping;
grassAmbientOcclusionTexture.wrapT = THREE.RepeatWrapping;
grassNormalTexture.wrapT = THREE.RepeatWrapping;
grassRoughnessTexture.wrapT = THREE.RepeatWrapping;

//models
let mixer = null;
const gltfLoader = new GLTFLoader();

gltfLoader.load("./models/tree/pine-tree.gltf", (tree) => {
  scene.add(tree.scene);
  tree.scene.scale.set(0.4, 0.4, 0.4);
  tree.scene.position.set(-5, 0, 5);
});

gltfLoader.load("./models/tree/pine-tree.gltf", (tree) => {
  scene.add(tree.scene);
  tree.scene.scale.set(0.4, 0.4, 0.4);
  tree.scene.position.set(-4, 0, 0);
});

gltfLoader.load("./models/tree/pine-tree.gltf", (tree) => {
  scene.add(tree.scene);
  tree.scene.scale.set(0.4, 0.4, 0.4);
  tree.scene.position.set(5, 0, 0);
});

gltfLoader.load("./models/tree/pine-tree.gltf", (tree) => {
  scene.add(tree.scene);
  tree.scene.scale.set(0.4, 0.4, 0.4);
  tree.scene.position.set(-6, 0, -8);
});

gltfLoader.load("./models/tree/pine-tree.gltf", (tree) => {
  scene.add(tree.scene);
  tree.scene.scale.set(0.4, 0.4, 0.4);
  tree.scene.position.set(6, 0, -8);
});
gltfLoader.load("./models/tree/pine-tree.gltf", (tree) => {
  scene.add(tree.scene);
  tree.scene.scale.set(0.4, 0.4, 0.4);
  tree.scene.position.set(4, 0, 6);
});

gltfLoader.load("./models/Fox/glTF/Fox.gltf", (loadedGltf) => {
  gltf = loadedGltf;
  mixer = new THREE.AnimationMixer(gltf.scene);
  action = mixer.clipAction(gltf.animations[animationIndex]);
  action.play();
  scene.add(gltf.scene);
  gltf.scene.scale.set(0.025, 0.025, 0.025);
  gltf.scene.castShadow = true;
});

// Call the loadModel function again to reload the model and update the animation

/**
 * Floor
 */
const floor = new THREE.Mesh(
  new THREE.PlaneGeometry(30, 30),
  new THREE.MeshStandardMaterial({
    color: "#444444",
    map: grassColorTexture,
    metalness: 0,
    roughness: 0.5,
    aoMap: grassAmbientOcclusionTexture,
    normalMap: grassNormalTexture,
    roughnessMap: grassRoughnessTexture,
  })
);
floor.receiveShadow = true;
floor.rotation.x = -Math.PI * 0.5;
scene.add(floor);

/**
 * Lights
 */
const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight("#FEFCD7", 0.6);
directionalLight.castShadow = true;
directionalLight.shadow.mapSize.set(1024, 1024);
directionalLight.shadow.camera.far = 15;
directionalLight.shadow.camera.left = -7;
directionalLight.shadow.camera.top = 7;
directionalLight.shadow.camera.right = 7;
directionalLight.shadow.camera.bottom = -7;
directionalLight.position.set(0, 5, 5);
//scene.add(directionalLight);

const moon = new THREE.PointLight("#FEFCD7", 2, 100);
moon.castShadow = true;
moon.shadow.mapSize.width = 256;
moon.shadow.mapSize.height = 256;
moon.shadow.camera.far = 7;
moon.position.set(10, 50, 0);
scene.add(moon);

const moon1 = new THREE.PointLight("#FEFCD7", 4, 4);
moon1.castShadow = true;
moon1.shadow.mapSize.width = 256;
moon1.shadow.mapSize.height = 256;
moon1.shadow.camera.far = 7;
moon1.position.set(0, 3, 0);
scene.add(moon1);
/**
 * Sizes
 */
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

window.addEventListener("resize", () => {
  // Update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // Update camera
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // Update renderer
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(
  75,
  sizes.width / sizes.height,
  0.1,
  100
);
camera.position.set(5, 1, 5.6);
//camera.position.set(0, 25, 0);
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.target.set(0, 0.75, 0);
controls.enableDamping = true;

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor("#262837");

/**
 * Animate
 */
const clock = new THREE.Clock();
let previousTime = 0;

const tick = () => {
  const elapsedTime = clock.getElapsedTime();
  const deltaTime = elapsedTime - previousTime;
  previousTime = elapsedTime;
  if (mixer) {
    mixer.update(deltaTime * 2);
  }

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
