document.addEventListener("DOMContentLoaded", function() {
    // 1. Mobilní menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // 2. Scroll efekt (schování hlavičky)
    const header = document.querySelector("header");
    let lastScroll = 0;
    const delta = 50;

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (Math.abs(currentScroll - lastScroll) < delta) return;

        if (currentScroll > lastScroll && currentScroll > 100) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
    });

    // 3. Lightbox pro galerii (pokud na stránce existuje)
    const images = document.querySelectorAll(".galerie-img");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    let currentIndex = 0;

    if (images.length > 0 && lightbox) {
        images.forEach((img, index) => {
            img.addEventListener("click", () => {
                currentIndex = index;
                lightboxImg.src = img.src;
                lightbox.style.display = "flex";
            });
        });

        // Zavření a navigace (zjednodušeně pro JS soubor)
        window.closeLightbox = () => lightbox.style.display = "none";
        window.changeImage = (dir) => {
            currentIndex = (currentIndex + dir + images.length) % images.length;
            lightboxImg.src = images[currentIndex].src;
        };

        // Klávesnice
        document.addEventListener("keydown", (e) => {
            if (lightbox.style.display === "flex") {
                if (e.key === "ArrowRight") changeImage(1);
                if (e.key === "ArrowLeft") changeImage(-1);
                if (e.key === "Escape") closeLightbox();
            }
        });
    }
});