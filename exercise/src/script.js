import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
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
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true;
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 3;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
});
renderer.setSize(sizes.width, sizes.height);
const clock = new THREE.Clock();

const rotate = () => {
  const elapsedTime = clock.getElapsedTime();
  //cube.rotation.y = elapsedTime * 2;

  /*   camera.position.x = -cursor.x * 10;
  camera.position.y = cursor.y * 10;
  camera.lookAt(cube.position); */
  cube.material.color.setHSL(elapsedTime / 10, 0.5, 0.5);
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(rotate);
};

rotate();
