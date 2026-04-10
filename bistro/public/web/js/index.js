            // Logika pro Slideshow
            let slideIndex = 0;
            showSlides();

            function showSlides() {
                let slides = document.getElementsByClassName("slide");
                if (slides.length === 0) return; // Ochrana, pokud by slides neexistovaly
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slideIndex++;
                if (slideIndex > slides.length) {slideIndex = 1}
                slides[slideIndex - 1].style.display = "block";
                setTimeout(showSlides, 5000);
            }

            // Logika pro zavření plovoucího videa
            const closeBtn = document.getElementById('cornerVideoClose');
            const videoBox = document.getElementById('cornerVideo');

            if (closeBtn && videoBox) {
                closeBtn.onclick = function() {
                    videoBox.style.display = 'none';
                };
            }

            if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", (user) => {
                    if (!user) {
                        window.netlifyIdentity.on("login", () => {
                            document.location.href = "/admin/";
                        });
                    }
                });
            }
document.addEventListener('DOMContentLoaded', function() {
    const placeholder = document.getElementById('videoPlaceholder');
    if (placeholder) {
        placeholder.addEventListener('click', function() {
            const container = document.getElementById('cornerVideo');
            // Teď tam teprve vložíme skutečné video
            container.innerHTML = '<span id="cornerVideoClose">&times;</span><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/TkxlEAl4fEo?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
            
            // Musíme znovu zprovoznit křížek pro zavření
            document.getElementById('cornerVideoClose').onclick = function() {
                container.style.display = 'none';
            };
        });
    }
});

console.log("Stránka načtena.");
