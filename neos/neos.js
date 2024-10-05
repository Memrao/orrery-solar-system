// JS to handle the back button functionality
document.querySelector('.back-button button').addEventListener('click', () => {
    window.history.back();
});

// // Optionally, if you want to fetch data dynamically for the sections
// window.addEventListener('DOMContentLoaded', () => {
//     // If data is stored in a JSON format, for example:
//     const neoData = {
//         "sections": [{
//                 "title": "Near-Earth Objects (NEOs)",
//                 "content": "Near-Earth Objects (NEOs) are small celestial bodies, such as asteroids and comets, whose orbits bring them close to Earth. The realization that Earth exists within a cloud of orbiting NEOs, which can occasionally collide with the planet, has spurred extensive research. These objects provide opportunities for space exploration, as well as insights into the risks they may pose to life on Earth."
//             },
//             {
//                 "title": "Scientific Importance",
//                 "content": "NEOs are of great scientific interest because they hold records of the early solar system's formation and evolution. Studying their orbital characteristics, physical properties, and compositions allows researchers to infer their origins and history. These objects are some of the most accessible for exploration, with energy requirements to reach them often lower than that needed for a mission to the Moon. Additionally, they offer valuable opportunities for spacecraft missions to gather samples, furthering our understanding of the solar system."
//             },
//             {
//                 "title": "NEO Classification and Orbital Dynamics",
//                 "content": "NEOs are classified into three main groups based on their orbits relative to Earth's: Amor, Apollo, and Aten objects. Most NEOs originate from collisions in the main asteroid belt, with fragments eventually making their way into Earth-crossing orbits due to gravitational interactions with planets like Jupiter and Saturn."
//             },
//             {
//                 "title": "Physical and Chemical Properties",
//                 "content": "Research on NEOs involves assessing their size, shape, spin, and mass, as well as their chemical and mineralogical composition. These factors provide insight into the processes that shaped NEOs and help identify their relationships to meteorites and other solar system bodies. By studying these small worlds, scientists aim to better understand the events that occurred in the primordial solar nebula, which led to the formation of planets."
//             },
//             {
//                 "title": "Exploration and Hazard Mitigation",
//                 "content": "Understanding NEOs is crucial for developing strategies to mitigate potential impact hazards. Further exploration of NEOs, through both ground-based and space missions, will help identify which objects are most likely to collide with Earth and determine their potential consequences. NEOs are significant not only for scientific discovery but also for planetary defense, offering valuable insights into the early solar system and helping to develop measures to prevent potential catastrophes caused by asteroid impacts."
//             }
//         ]
//     };

// Populate the sections dynamically
const sections = document.querySelectorAll('section');

neoData.sections.forEach((data, index) => {
    if (sections[index]) {
        const h2 = sections[index].querySelector('h2') || sections[index].querySelector('h1');
        const p = sections[index].querySelector('p');

        if (h2) h2.textContent = data.title;
        if (p) p.textContent = data.content;
    }
});


// Ensure you have included OrbitControls.js in your project

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 5); // Set initial position

// Create a renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Add a plane geometry with a texture
const geometry = new THREE.PlaneGeometry(4, 4);
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('img1.jpg'); // Use your image file
const material = new THREE.MeshStandardMaterial({
    map: texture,
    side: THREE.DoubleSide,
    roughness: 0.5,
    metalness: 0.2
});
const plane = new THREE.Mesh(geometry, material);
scene.add(plane);

// Add lighting
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight1 = new THREE.DirectionalLight(0xffffff, 1);
directionalLight1.position.set(5, 5, 5);
scene.add(directionalLight1);

const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight2.position.set(-5, -5, 5);
scene.add(directionalLight2);

const sideLight1 = new THREE.DirectionalLight(0xffffff, 0.4);
sideLight1.position.set(-3, 0, 5);
scene.add(sideLight1);

const sideLight2 = new THREE.DirectionalLight(0xffffff, 0.4);
sideLight2.position.set(3, 0, 5);
scene.add(sideLight2);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444, 0.4);
scene.add(hemisphereLight);

// Post-processing for bloom effect
const composer = new THREE.EffectComposer(renderer);
const renderPass = new THREE.RenderPass(scene, camera);
composer.addPass(renderPass);

const bloomPass = new THREE.BloomPass(1.5);
composer.addPass(bloomPass);

// Add controls to rotate and zoom the camera
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enablePan = true; // Allow panning left and right
controls.enableZoom = true; // Allow zooming in and out
controls.maxPolarAngle = Math.PI / 2; // Limit the vertical angle (if needed)
controls.minPolarAngle = 0; // To keep the camera from going below the ground

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    composer.render();
}

// Start animation
animate();

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    composer.setSize(window.innerWidth, window.innerHeight);
});