console.log("js loaded");

// 0, 1, 2
let imageUrls = [
    "./images/bulldog1.webp",
    "https://www.thesprucepets.com/thmb/5BuycnxoY7A6uxZHo7o9_JpRiaI=/1080x0/filters:no_upscale():strip_icc()/3_English-5b32e7c346e0fb0037bebcf9-5b3f730ec9e77c0037d368cc.jpg",
    "https://www.thesprucepets.com/thmb/l9wTE_1QUUBz8mGr-vFQHOxoioY=/1080x0/filters:no_upscale():strip_icc()/38166279_203775883825925_8679441027548839936_n-5b74d86846e0fb005052057f.jpg"
];

// replace the 1st image with the 2nd image?
// replace the 2nd image with the 3rd image
// When we run out of images, start back at the 1st?

const slideShowImage = document.getElementById('slide-show-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

prevButton.addEventListener("click", () => {
    updateImage("prev");
});

nextButton.addEventListener("click", () => {
    updateImage("next");
});

// Use Set Intervale to update the image every 3 seconds
let currentImageIndex = 0;

// Move to the next image
// Update the DOM to show it
// Keep track of the current index
// direction = either "prev" or "next"
function updateImage(direction){
    if(direction == "next"){
        currentImageIndex++;
    }else if (direction == "prev"){
        currentImageIndex--;
    }else{
        currentImageIndex++;
    }

    if(currentImageIndex >= imageUrls.length){
        currentImageIndex = 0;
    }

    if(currentImageIndex < 0){
        currentImageIndex = imageUrls.length - 1;
    }

    slideShowImage.src = imageUrls[currentImageIndex];
}

setInterval(updateImage, 5000);