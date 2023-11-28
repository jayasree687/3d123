// =========DAT.GUI==========
const gui = new dat.GUI()

// Scene
const scene = new THREE.Scene();

// TextureLoader
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('./assets/text1.jpg')
const height = textureLoader.load('./assets/height2.png')
const alpha = textureLoader.load('./assets/alpha.png')
// const alpha = textureLoader.load('./assets/alpha.png')


// Geometry
// const geometry = new THREE.PlaneGeometry(3, 3,)
const geometry = new THREE.PlaneBufferGeometry(3, 3, 64, 64)

// Material
const material = new THREE.MeshStandardMaterial({
    color: 'gray',
    map: texture,
    displacementMap: height,
    displacementScale: .6,
    alphaMap: alpha,
    transparent: true,
    depthTest: false
})

const plane = new THREE.Mesh(geometry, material)
scene.add(plane)
plane.rotation.x = 181

const planeRotation = gui.addFolder('Rotation')

planeRotation.add(plane.rotation, 'x').min(0).max(600)
planeRotation.add(plane.rotation, 'y').min(0).max(600)

// Lights
const pointLight = new THREE.PointLight('#00b3ff', 3)
pointLight.position.x = .2
pointLight.position.y = 10
pointLight.position.z = 4.4
scene.add(pointLight)

const pointLightPosition = gui.addFolder('Light Position')

pointLightPosition.add(pointLight.position, 'x')
pointLightPosition.add(pointLight.position, 'y')
pointLightPosition.add(pointLight.position, 'z')

const col = { color: '#00ff00' }
gui.addColor(col, 'color').onChange(() => {
    pointLight.color.set(col.color)
})

// Base camera
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}
const camera = new THREE.PerspectiveCamera(65, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 3
scene.add(camera)

// Mesh


// Renderer
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.append(renderer.domElement);

document.addEventListener('mousemove', animateTerrain)
let mouseY = 0
function animateTerrain(event){
    mouseY = event.clientY
}

const clock = new THREE.Clock()

const tick = () => {
    const elapsedTime = clock.getElapsedTime()
    plane.rotation.z = .5 * elapsedTime
    plane.material.displacementScale = .3 + mouseY * .0005
    //   mesh.rotation.y += 0.02
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}
tick()