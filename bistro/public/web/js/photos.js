            let images = document.querySelectorAll(".galerie-img");
            let currentIndex = 0;
            
            function openLightbox(imgElement) {
                currentIndex = Array.from(images).indexOf(imgElement);
                document.getElementById("lightbox-img").src = imgElement.src;
                document.getElementById("lightbox").style.display = "flex";
            }

            function closeLightbox() {
                document.getElementById("lightbox").style.display = "none";
            }
            
            function changeImage(direction) {
                currentIndex = (currentIndex + direction + images.length) % images.length;
                document.getElementById("lightbox-img").src = images[currentIndex].src;
            }
            
            document.addEventListener("keydown", function(event) {
                if (document.getElementById("lightbox").style.display === "flex") {
                    if (event.key === "ArrowRight") changeImage(1);
                    if (event.key === "ArrowLeft") changeImage(-1);
                    if (event.key === "Escape") closeLightbox();
                }
            });
console.log("Fotky načteny.");
