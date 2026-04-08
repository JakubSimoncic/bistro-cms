/* --- FINÁLNÍ SJEDNOCENÝ SKRIPT PRO BISTRO FLORENC --- */

document.addEventListener("DOMContentLoaded", function() {

    // 1. OVLÁDÁNÍ MOBILNÍHO MENU (☰)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
    }

    // 2. CHYTRÉ SCHOVÁVÁNÍ LIŠTY PŘI SKROLU
    const header = document.querySelector("header");
    let lastScroll = 0;
    const delta = 50; // Tolerance v pixelech, aby lišta nekmitala

    window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;

        // Pokud je rozdíl skrolu menší než delta, nic nedělej
        if (Math.abs(currentScroll - lastScroll) < delta) return;

        if (currentScroll > lastScroll && currentScroll > 100) {
            // Skrol dolů -> Schovat lištu
            header.style.transform = "translateY(-100%)";
            if (navMenu) navMenu.classList.remove('show'); // Pro jistotu zavře menu
        } else {
            // Skrol nahoru -> Ukázat lištu
            header.style.transform = "translateY(0)";
        }
        lastScroll = currentScroll;
    });

    // 3. AUTOMATICKÁ SLIDESHOW (Pokud na stránce existuje)
    let slideIndex = 0;
    const slides = document.getElementsByClassName("slide");

    if (slides.length > 0) {
        showSlides();
    }

    function showSlides() {
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 5000);
    }

    // 4. ZAVÍRÁNÍ YOUTUBE VIDEA V ROHU
    const closeBtn = document.getElementById('cornerVideoClose');
    const videoBox = document.getElementById('cornerVideo');

    if (closeBtn && videoBox) {
        closeBtn.onclick = function() {
            videoBox.style.display = 'none';
        };
    }

    // 5. NETLIFY IDENTITY (Správa administrace)
    if (window.netlifyIdentity) {
        window.netlifyIdentity.on("init", (user) => {
            if (!user) {
                window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                });
            }
        });
    }
});
