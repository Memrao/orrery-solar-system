// JavaScript for toggling the navigation menu
const linesDiv = document.querySelector('.linesDiv');
const navLinks = document.getElementById('nav-links');

// Function to toggle the navigation menu
function toggleNav() {
    const nav = document.querySelector('nav'); // Assuming your nav element wraps around #nav-links
    nav.classList.toggle('active');
}

// Function to close the navigation menu
function closeNav() {
    const nav = document.querySelector('nav'); // Assuming your nav element wraps around #nav-links
    nav.classList.remove('active');
}

// Add event listener for the hamburger icon
linesDiv.addEventListener('click', toggleNav);

// Add event listeners for each navigation link
const links = document.querySelectorAll('.nav-links a');
links.forEach(link => {
    link.addEventListener('click', closeNav);
});


// Function to automatically switch between NEO images with dissolve effect
function autoSwitchNEOImages() {
    const neoImage = document.getElementById("neo-image");

    // Define the image paths for automatic rotation
    const images = [
        "../Source/homepage-comt2.png", // Comet image 1 (will be flipped and rotated)
        "../Source/Homepage-ast2.png", // Asteroid image 2 (rotated)
        "../Source/homepage-comt3.jpg" // Comet image 2 (will be flipped and rotated)
    ];

    let currentImageIndex = 0;

    // Function to switch images with slow dissolve effect
    function fadeToNextImage() {
        // Fade out the current image over 1 second
        neoImage.style.opacity = 0;

        // After the fade-out transition ends, change the image and fade in
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            neoImage.src = images[currentImageIndex];

            // Flip and rotate the first and third comet images horizontally to face the text
            if (currentImageIndex === 0 || currentImageIndex === 2) {
                neoImage.style.transform = 'scaleX(-1) rotate(15deg)'; // Flip and rotate comet images
            } else {
                neoImage.style.transform = 'rotate(15deg)'; // Rotate asteroid image
            }

            // Fade in the new image over 1 second
            neoImage.style.opacity = 1;
        }, 1000); // 1 second matches the fade-out duration
    }

    // Set the initial image direction and rotation before the first rotation
    if (currentImageIndex === 0 || currentImageIndex === 2) {
        neoImage.style.transform = 'scaleX(-1) rotate(15deg)'; // Flip and rotate first image on load
    } else {
        neoImage.style.transform = 'rotate(15deg)'; // Rotate for other images
    }

    // Automatically change the image every 4 seconds
    setInterval(fadeToNextImage, 2000);
}
// Call the function to start the image rotation with dissolve effect
autoSwitchNEOImages();
// Select the flip card and GIF elements
const flipCard = document.querySelector('.flip-card');
const gifImage = flipCard.querySelector('.flip-card-front img'); // Assuming the GIF is in the front side

// Play the GIF when the card is hovered
flipCard.addEventListener('mouseenter', () => {
    // Check if the GIF is loaded, and reset it to ensure it plays from the start
    if (gifImage) {
        // Set the src attribute to trigger the GIF restart
        const src = gifImage.src;
        gifImage.src = ''; // Clear the src to stop it
        gifImage.src = src; // Reset to the original src to play the GIF again
    }
});

// You can also add an optional mouseleave event if needed
flipCard.addEventListener('mouseleave', () => {
    // Optional: If you want to keep the GIF playing, you can leave this empty
});