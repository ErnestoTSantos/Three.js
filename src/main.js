import { createScene } from './scene.js';
import { createCamera } from './camera.js';
import { createRenderer } from './renderer.js';
import { setupControls } from './controls.js';
import { addObjectsToScene, animateObjects } from './objects.js';
import { addHelpers } from './helpers.js';
import { setupResize } from './resize.js';

const scene = createScene();
const camera = createCamera();
const renderer = createRenderer();
const controls = setupControls(camera, renderer.domElement);

document.body.appendChild(renderer.domElement);

const animated = addObjectsToScene(scene);
addHelpers(scene);

setupResize(camera, renderer);

function animate() {
  requestAnimationFrame(animate);
  animateObjects(animated);
  controls.update();
  renderer.render(scene, camera);
}

animate();
