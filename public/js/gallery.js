document.addEventListener('DOMContentLoaded', () => {
    const slideshowContainer = document.querySelector('.slideshow-container');
    const dotContainer = document.querySelector('div[style="text-align:center"]');
    const imageFolder = 'images/';

    async function loadImage(url) {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(img);
            img.onerror = reject;
        });
    }

    async function loadImages() {
        try {
            const response = await fetch('/images');
            const imageList = await response.json();

            slideshowContainer.innerHTML = ''; // Clear existing slides
            dotContainer.innerHTML = ''; // Clear existing dots

            for (let i = 0; i < imageList.length; i++) {
                const imageName = imageList[i];
                const imageUrl = `${imageFolder}${imageName}`;

                try {
                    await loadImage(imageUrl);

                    // Create slide
                    const slide = document.createElement('div');
                    slide.className = 'mySlides fade';
                    slide.innerHTML = `
                        <div class="numbertext">${i + 1} / ${imageList.length}</div>
                        <img src="${imageUrl}" style="width:100%">
                        <div class="text">Caption ${i + 1}</div>
                    `;
                    slideshowContainer.appendChild(slide);

                    // Create dot
                    const dot = document.createElement('span');
                    dot.className = 'dot';
                    dot.onclick = () => currentSlide(i + 1);
                    dotContainer.appendChild(dot);

                    console.log(`Successfully loaded and added image: ${imageUrl}`);
                } catch (error) {
                    console.error(`Failed to load image: ${imageUrl}`, error);
                }
            }

            // Add navigation arrows
            const prevArrow = document.createElement('a');
            prevArrow.className = 'prev';
            prevArrow.onclick = () => plusSlides(-1);
            prevArrow.innerHTML = '❮';
            slideshowContainer.appendChild(prevArrow);

            const nextArrow = document.createElement('a');
            nextArrow.className = 'next';
            nextArrow.onclick = () => plusSlides(1);
            nextArrow.innerHTML = '❯';
            slideshowContainer.appendChild(nextArrow);

            // Initialize slideshow
            showSlides(slideIndex);
        } catch (error) {
            console.error('Error in loadImages:', error);
        }
    }

    loadImages();

    // Slideshow functionality
    let slideIndex = 1;

    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    window.currentSlide = function(n) {
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
});