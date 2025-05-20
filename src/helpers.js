import * as THREE from 'three';

export function addHelpers(scene) {
    const axesHelper = new THREE.AxesHelper(5);
    const gridHelper = new THREE.GridHelper(20, 20);
    scene.add(axesHelper);
    scene.add(gridHelper);
}
