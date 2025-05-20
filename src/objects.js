import * as THREE from 'three';

export function addObjectsToScene(scene) {
    const animatedObjects = [];

    // Base (chão)
    const plane = new THREE.Mesh(
        new THREE.PlaneGeometry(20, 20),
        new THREE.MeshBasicMaterial({ color: 0xdddddd, side: THREE.DoubleSide })
    );
    plane.rotation.x = -Math.PI / 2;
    scene.add(plane);

    // Cubo com rotação animada
    const cube = new THREE.Mesh(
        new THREE.BoxGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: 0xff5555 })
    );
    cube.position.set(-3, 0.5, 0);
    cube.rotation.set(0.3, 0.3, 0);
    scene.add(cube);
    animatedObjects.push(cube);

    // Esfera escalonada
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.7, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x55ff55 })
    );
    sphere.position.set(0, 0.7, 2);
    sphere.scale.set(1, 1.4, 1);
    scene.add(sphere);

    // Cone rotacionado
    const cone = new THREE.Mesh(
        new THREE.ConeGeometry(0.6, 1.5, 32),
        new THREE.MeshBasicMaterial({ color: 0x5555ff })
    );
    cone.position.set(3, 0.75, -2);
    cone.rotation.z = Math.PI / 6;
    scene.add(cone);

    return animatedObjects;
}

export function animateObjects(objects) {
    objects.forEach(obj => {
        obj.rotation.y += 0.01;
        obj.rotation.x += 0.005;
    });
}
