import * as THREE from "three";
console.log(THREE);

const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
const sizes = {
  height: window.innerHeight,
  width: window.innerWidth,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
camera.position.x = 0;
scene.add(camera);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector(".webgl"),
});
renderer.setSize(sizes.width, sizes.height);
const clock = new THREE.Clock();

const rotate = () => {
  const elapsedTime = clock.getElapsedTime();
  console.log(elapsedTime);
  cube.rotation.y = elapsedTime * 2;
  renderer.render(scene, camera);
  requestAnimationFrame(rotate);
};

rotate();
