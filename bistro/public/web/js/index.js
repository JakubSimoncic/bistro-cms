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
            document.getElementById('cornerVideoClose').onclick = function() {
                document.getElementById('cornerVideo').style.display = 'none';
            };

            if (window.netlifyIdentity) {
                window.netlifyIdentity.on("init", (user) => {
                    if (!user) {
                        window.netlifyIdentity.on("login", () => {
                            document.location.href = "/admin/";
                        });
                    }
                });
            }
console.log("Stránka načtena.");
