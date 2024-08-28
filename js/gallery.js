document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('#gallery');

    async function loadImages() {
        try {
            const response = await fetch('/images');
            const imageList = await response.json();

            imageList.forEach(imageName => {
                const img = new Image();
                img.src = `images/${imageName}`;
                gallery.appendChild(img);
            });
        } catch (error) {
            console.error('Error loading images:', error);
        }
    }

    loadImages();
});