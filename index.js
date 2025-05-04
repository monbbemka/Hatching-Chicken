// =============================================
// STEP 1: Set up the image array 
// =============================================
// Array of all images to cycle through
// Customize these paths to your own images
const images = [
  './assets/image-content/image1.png',
  './assets/image-content/image2.png',
  './assets/image-content/image3.png',
  './assets/image-content/image4.png',
  './assets/image-content/image5.png',
  './assets/image-content/image6.png'
];

// =============================================
// STEP 2: Reference HTML elements 
// =============================================
// Connect to the elements we need to change
const wholeContainer = document.querySelector('.container');
const innerContent = document.querySelector('.inner-container');
const imageContent = document.querySelector('.image-content');  // Image container
const mainButton = document.getElementById('main-button');      // Image switch button
const finalMessage = document.querySelector('.final-message');  // Final message
const repeatButton = document.getElementById('repeat-button');
const shrinkButton = document.getElementById('shrink-button');
const closeButton = document.getElementById('close-button');
const apology = document.getElementById("sorry-button");


// =============================================
// STEP 3: Track what image we're at 
// =============================================
// Start with the first image (index 0)
let currentIndex = 0;

// =============================================
// STEP 4: Update image function 
// =============================================
// Function to change images with fade effect
function updateImage(imageSrc) {
  // Fade out current image
  imageContent.style.opacity = 0;
  
  // Preload next image
  const img = new Image();
  img.src = imageSrc;
  
  // When image is loaded
  img.onload = () => {
    // Change to new image
    imageContent.style.backgroundImage = `url('${imageSrc}')`;
    
    // Fade in new image
    imageContent.style.opacity = 1;
  };
}


// =============================================
// STEP 5: Initial image display 
// =============================================
// Show first image when page loads
updateImage(images[currentIndex]);

// =============================================
// STEP 6: Button click handler 
// =============================================
// Change image when button is clicked
mainButton.addEventListener('click', () => {
  // Go to next image
  currentIndex++;
  
  // Update if not at the end
  if (currentIndex < images.length) {
    updateImage(images[currentIndex]);
  }
  
  // Once at the last image, show the final message and hide the button 
  if (currentIndex === images.length - 1) {
    mainButton.style.display = 'none';
    finalMessage.style.display = 'block';
  }
});

repeatButton.addEventListener('click', () => {
  currentIndex=0;
  apology.style.display = 'none';
  mainButton.style.display = 'block';
  finalMessage.textContent = 'Change is good!'
  finalMessage.style.display='none';
  updateImage(images[currentIndex]);

});

shrinkButton.addEventListener('click', () => {
  updateImage('./assets/image-minimize.png');
 
    mainButton.style.display = 'none';
    apology.style.display = 'none';
    finalMessage.textContent='You cannot ignore me!';
    finalMessage.style.display = 'block';

});

closeButton.addEventListener('click', () => {
  updateImage('./assets/image-close1.png');
  mainButton.style.display = 'none';
    finalMessage.textContent='Leaving without saying goodbye?!';
    finalMessage.style.display = 'block';

    setTimeout(function() {
    startSorrySequence();
  }, 3000);

});

function startSorrySequence(){
  finalMessage.style.display = "none";

  //Set up apology button
   // apology.id = 'sorry-button';
   // apology.textContent = "Sorry :("
    //innerContent.appendChild(apology);
    apology.style.display='block';

    //Load new image and text when apology button is clicked
    apology.addEventListener('click', () => {
      updateImage('./assets/image-close2.png');
      apology.style.display='none';
      finalMessage.textContent='Thank you, goodbye <3';
      finalMessage.style.display='block';

      // Whole window disappears 
      setTimeout(function(){
        wholeContainer.style.display='none';
      }, 5000);
})
}
