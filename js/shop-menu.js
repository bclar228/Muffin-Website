// Code for shop-menu (changing the images upon button press)
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'muffin-no-background.png',
        'muffin-no-background-2.png',
        'muffin-no-background-3.png',
        'muffin-no-background-4.png'
    ];

    let currentIndex = 0; // Start with the first image
    const muffinPictureDiv = document.querySelector('.muffin-picture');
    
    // Function to update the muffin picture background image
    function updateBackgroundImage() {
        muffinPictureDiv.style.backgroundImage = `url('images/${images[currentIndex]}')`;
    }

    // Initially set the background image
    updateBackgroundImage();

    // Function to navigate to the previous image
    function prevImage() {
        /* Adding the total number of images to result ensures that
        the expression inside the parentheses never goes negative. Then
        the modulus operator is used to wrap the index if it exceeds the bounds
        of the array length. This operation ensures the index cycles within
        the range 0 to images.length - 1 (because index starts at 0) */
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateBackgroundImage();
    }

    // Function to navigate to the next image
    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        updateBackgroundImage();
    }

    // Event listeners for left and right buttons
    const leftButton = document.querySelector('.left-button');
    const rightButton = document.querySelector('.right-button');

    leftButton.addEventListener('click', prevImage);
    rightButton.addEventListener('click', nextImage);
});