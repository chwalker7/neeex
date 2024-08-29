document.addEventListener('DOMContentLoaded', () => {
    const slideShowContainer = document.querySelector('.slideshow-container');
    const dotContainer = document.querySelector('div[style="text-align:center"]');
    let autoSlideInterval;

    // Updated list of image filenames with alt text
    const imageList = [
        { filename: '1.webp', alt: 'Equipment delivery' },
        { filename: '2.webp', alt: 'Dozer clearing land' },
        { filename: '3.webp', alt: 'Dozer digging a trench' },
        { filename: '4.webp', alt: 'Site preparation for construction' },
        { filename: '5.webp', alt: 'Grading a large area' },
        { filename: '6.webp', alt: 'Grading a large area' },
        { filename: '7.webp', alt: 'Heavy machinery at work on a job site' },
        { filename: '8.webp', alt: 'Aerial view of an excavation project' },
        { filename: '9.webp', alt: 'Heavy machinery at work on a job site' },
        { filename: '10.webp', alt: 'Leveling ground for a new construction' },
        { filename: '11.webp', alt: 'Precision excavation work' },
        { filename: '12.webp', alt: 'Large-scale earthmoving project' },
        { filename: '13.webp', alt: 'Excavation and equipment on site' }
    ];

    function loadImages() {
        imageList.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = 'mySlides fade';

            const numberText = document.createElement('div');
            numberText.className = 'numbertext';
            numberText.textContent = `${index + 1} / ${imageList.length}`;

            const img = new Image();
            img.src = `images/${image.filename}`;
            img.alt = image.alt;
            img.style.width = '100%';

            const text = document.createElement('div');
            text.className = 'text';
            text.textContent = image.alt;

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
        prevButton.setAttribute('aria-label', 'Previous slide');

        const nextButton = document.createElement('a');
        nextButton.className = 'next';
        nextButton.onclick = () => plusSlides(1);
        nextButton.innerHTML = '&#10095;';
        nextButton.setAttribute('aria-label', 'Next slide');

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
