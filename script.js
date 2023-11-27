import * as THREE from 'model-viewer.min.js';

let scene, camera, renderer;
let car1, car2;
let annotationsVisible = true;

init();
animate();

function init() {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('scene-container').appendChild(renderer.domElement);

    // Load your 3D car models
    loadCar('path/to/car1.gltf', 'car1', new THREE.Vector3(-2, 0, 0));
    loadCar('path/to/car2.gltf', 'car2', new THREE.Vector3(2, 0, 0));

    // Add some annotations
    addAnnotations();
}

function loadCar(modelPath, name, position) {
    const loader = new THREE.GLTFLoader();
    loader.load(modelPath, (gltf) => {
        const car = gltf.scene;
        car.name = name;
        car.position.copy(position);
        scene.add(car);

        if (name === 'car1') {
            car1 = car;
        } else if (name === 'car2') {
            car2 = car;
        }
    });
}

function addAnnotations() {
    // Add your annotations logic here
    // You may want to use HTML overlays or Three.js sprites for annotations
}

function toggleCar(carName) {
    if (carName === 'car1') {
        car1.visible = !car1.visible;
    } else if (carName === 'car2') {
        car2.visible = !car2.visible;
    }
}

function toggleAnnotations() {
    annotationsVisible = !annotationsVisible;
    // Toggle the visibility of annotations
    // Implement your logic to show/hide annotations
}

function animate() {
    requestAnimationFrame(animate);

    // Add any animations or interactions here

    renderer.render(scene, camera);
}
