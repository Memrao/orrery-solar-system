// Initialize Three.js scene
let scene, camera, renderer, earthMesh;
let targetPosition = { x: 0, y: 0 }; // Target position for the Earth
let textVisible = false; // Flag to check if the text is visible

function init() {
    const canvas = document.getElementById('three-canvas');

    // Set up scene
    scene = new THREE.Scene();

    // Set up camera
    camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2; // Camera position to focus on the Earth

    // Set up renderer
    renderer = new THREE.WebGLRenderer({
        canvas: canvas,
        alpha: true // Keep alpha for transparency
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add a subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5); // Soft white light with lower intensity
    scene.add(ambientLight);

    // Add a directional light for highlights
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // Lower intensity for a more natural look
    directionalLight.position.set(2, 3, 5).normalize(); // Adjusted position for better lighting angle
    scene.add(directionalLight);

    // Create Earth texture from uploaded image
    const earthTexture = new THREE.TextureLoader().load("../Source/earth.jpg"); // Ensure this is a full Earth image
    const earthGeometry = new THREE.SphereGeometry(0.5, 32, 32); // Sphere size remains 0.5
    const earthMaterial = new THREE.MeshPhongMaterial({
        map: earthTexture,
        shininess: 20 // Reduced shininess for a less reflective surface
    });

    // Create the Earth mesh and add to the scene
    earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    earthMesh.position.set(-2, 1, 0); // Start position in the top-left corner
    scene.add(earthMesh);

    // Call the animate function
    animate();
}

// Function to animate the scene
function animate() {
    requestAnimationFrame(animate);

    // Move Earth towards the center smoothly
    const speed = 0.05; // Speed of the movement
    if (Math.abs(earthMesh.position.x - targetPosition.x) > 0.01) {
        earthMesh.position.x += (targetPosition.x - earthMesh.position.x) * speed;
    }
    if (Math.abs(earthMesh.position.y - targetPosition.y) > 0.01) {
        earthMesh.position.y += (targetPosition.y - earthMesh.position.y) * speed;
    }

    // Render the scene
    renderer.render(scene, camera);

    // If Earth reaches the center, show the text
    if (!textVisible && Math.abs(earthMesh.position.x - targetPosition.x) < 0.01 &&
        Math.abs(earthMesh.position.y - targetPosition.y) < 0.01) {
        showText(); // Show the text when the Earth is centered
        textVisible = true; // Update flag to avoid repeated calls
    }
}

// Function to fade in the Orbit Xplorer text and redirect
function showText() {
    const textElement = document.getElementById('overlay-text');
    textElement.style.opacity = 1; // Set text to fully visible

    // // Set a timeout to redirect after 2.5 seconds (0.5 seconds delay plus text display)
    setTimeout(() => {
        window.location.href = "./main/main.html"; // Redirect to the main page after 2 seconds
    }, 3000); // 2500 milliseconds
}

// When the page loads, initialize Three.js
window.onload = () => {
    init();
};