        fetch('/web/pages/menu-cj.md')
                .then(response => response.text())
                .then(markdown => {
                    const content = markdown.replace(/^---[\s\S]*?---\s*/, '');
                    const html = marked.parse(content);
                    document.getElementById('menu-content').innerHTML = html;
                })
                .catch(error => {
                    document.getElementById('menu-content').innerHTML = 'Nepodařilo se načíst denní menu.';
                    console.error(error);
                });
console.log("Menu načteno.");
