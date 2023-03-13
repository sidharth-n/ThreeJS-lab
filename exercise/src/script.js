import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import * as dat from "dat.gui";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import typefaceFont from "three/examples/fonts/helvetiker_regular.typeface.json";

/**
 * Base
 */
// Debug
const gui = new dat.GUI();
let textContent = "Hello there!";
let text;
// Canvas
const canvas = document.querySelector("canvas.webgl");
const input = document.querySelector(".input");
const button = document.querySelector(".btn");

button.addEventListener("click", () => {
  if (input.value) {
    textContent = input.value;
    input.value = "";
    scene.remove(text);
    loadFont();
  }
});

// Scene
const scene = new THREE.Scene();

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const matcapTexture = textureLoader.load("textures/matcaps/8.png");

/**
 * Fonts
 */
const fontLoader = new FontLoader();

const loadFont = () => {
  fontLoader.load("/fonts/helvetiker_regular.typeface.json", (font) => {
    // Material
    const frontMaterial = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      emissive: 0x00ff00, // set emissive color to green
      emissiveIntensity: 10, // set emissive intensity to 1
      shininess: 100,
      metalness: 1, // set metalness to 1
      roughness: 0,
    });

    // 3. Create back material
    const backMaterial = new THREE.MeshPhongMaterial({
      color: new THREE.Color("green"),
      side: THREE.BackSide,
    });

    // 4. Create mesh

    // Text
    const textGeometry = new TextGeometry(textContent, {
      font: font,
      size: 0.5,
      height: 0.05,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 0.001,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
    });
    textGeometry.center();

    text = new THREE.Mesh(textGeometry, [frontMaterial, backMaterial]);
    //text.position.set(0, 0, -5);
    //text = new THREE.Mesh(textGeometry, material);
    scene.add(text);

    // Donuts
  });
};
loadFont();
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
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 7;
scene.add(camera);

// Controls
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const light = new THREE.DirectionalLight(0xffffff, 10);
light.position.set(2, 2, -1);
scene.add(light);
/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

/**
 * Animate
 */
const clock = new THREE.Clock();

const tick = () => {
  const elapsedTime = clock.getElapsedTime();

  // Update controls
  controls.update();

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(tick);
};

tick();
