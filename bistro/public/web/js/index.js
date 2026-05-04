document.addEventListener('DOMContentLoaded', function() {
    console.log("Stránka načtena a připravena.");

    // 1. LOGIKA PRO SLIDESHOW
    const pravyBlok = document.querySelector('.pravy-blok');
    const obrazky = [
        '/web/fotky/slide_3.jpg',
        '/web/fotky/slide_1.jpg',
        '/web/fotky/slide_2.jpg'
    ];

    let slideIndex = 0;

    function zmenObrazek() {
        if (pravyBlok) {
            const cesta = obrazky[slideIndex];
            pravyBlok.style.backgroundImage = `url('${cesta}')`;
            slideIndex = (slideIndex + 1) % obrazky.length;
        }
    }

    if (pravyBlok) {
        zmenObrazek();
        setInterval(zmenObrazek, 5000);
    }

    // 2. LOGIKA PRO VIDEO (PLACEHOLDER A ZAVŘENÍ)
    const placeholder = document.getElementById('videoPlaceholder');
    const videoBox = document.getElementById('cornerVideo');
    const closeBtn = document.getElementById('cornerVideoClose');

    // Kliknutí na placeholder (načtení videa)
    if (placeholder) {
        placeholder.addEventListener('click', function() {
            if (videoBox) {
                videoBox.innerHTML = '<span id="cornerVideoClose">&times;</span><iframe width="100%" height="100%" src="https://www.youtube-nocookie.com/embed/TkxlEAl4fEo?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>';
                
                // Re-aktivace křížku po vložení HTML
                document.getElementById('cornerVideoClose').onclick = function() {
                    videoBox.style.display = 'none';
                };
            }
        });
    }

    // Zavření videa (pokud už tam křížek je od začátku)
    if (closeBtn && videoBox) {
        closeBtn.onclick = function() {
            videoBox.style.display = 'none';
        };
    }

    // 3. NETLIFY IDENTITY
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
