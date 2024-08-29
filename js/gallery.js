document.addEventListener('DOMContentLoaded', () => {
    const slideShowContainer = document.querySelector('.slideshow-container');
    const dotContainer = document.querySelector('div[style="text-align:center"]');
    let autoSlideInterval;

    // Updated list of image filenames
    const imageList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg'];

    function loadImages() {
        imageList.forEach((imageName, index) => {
            const slide = document.createElement('div');
            slide.className = 'mySlides fade';

            const numberText = document.createElement('div');
            numberText.className = 'numbertext';
            numberText.textContent = `${index + 1} / ${imageList.length}`;

            const img = new Image();
            img.src = `images/${imageName}`;
            img.style.width = '100%';

            const text = document.createElement('div');
            text.className = 'text';
            text.textContent = `Image ${index + 1}`;

            slide.appendChild(numberText);
            slide.appendChild(img);
            slide.appendChild(text);

            slideShowContainer.appendChild(slide);

            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.onclick = () => currentSlide(index + 1);
            dotContainer.appendChild(dot);
        });

        // Add navigation buttons
        const prevButton = document.createElement('a');
        prevButton.className = 'prev';
        prevButton.onclick = () => plusSlides(-1);
        prevButton.innerHTML = '&#10094;';

        const nextButton = document.createElement('a');
        nextButton.className = 'next';
        nextButton.onclick = () => plusSlides(1);
        nextButton.innerHTML = '&#10095;';

        slideShowContainer.appendChild(prevButton);
        slideShowContainer.appendChild(nextButton);

        showSlides(1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => plusSlides(1), 5000); // Change slide every 5 seconds
    }

    loadImages();
    startAutoSlide();
});

let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}
