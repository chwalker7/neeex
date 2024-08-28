document.addEventListener('DOMContentLoaded', function() {
    const images = [
        '1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg',
        '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg',
        '11.jpg', '12.jpg', '13.jpg'
    ];

    let slideIndex = 1;
    let slideContainer = document.querySelector('.slideshow-container');
    let dotContainer = document.querySelector('div[style="text-align:center"]');

    // Create slides
    images.forEach((img, index) => {
        let slide = document.createElement('div');
        slide.className = 'mySlides fade';
        slide.innerHTML = `
            <div class="numbertext">${index + 1} / ${images.length}</div>
            <img src="images/${img}" style="width:100%">
            <div class="text">Caption ${index + 1}</div>
        `;
        slideContainer.appendChild(slide);

        // Create dots
        let dot = document.createElement('span');
        dot.className = 'dot';
        dot.onclick = function() { currentSlide(index + 1); };
        dotContainer.appendChild(dot);
    });

    // Add navigation buttons
    slideContainer.innerHTML += `
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>
    `;

    showSlides(slideIndex);

    // Next/previous controls
    window.plusSlides = function(n) {
        showSlides(slideIndex += n);
    }

    // Thumbnail image controls
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