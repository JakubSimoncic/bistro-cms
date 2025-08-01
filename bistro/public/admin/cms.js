function MarkdownControl({ value, onChange }) {
  const textarea = document.createElement('textarea');
  textarea.style.width = '100%';
  textarea.style.height = '300px';
  textarea.style.fontFamily = 'monospace';
  textarea.style.fontSize = '14px';
  textarea.value = value || '';

  textarea.addEventListener('input', e => {
    // Ulož pozici kurzoru
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    // Zavolej onChange s novou hodnotou
    onChange(e.target.value);

    // Nastav kurzor zpět na uložené místo (po vykreslení)
    requestAnimationFrame(() => {
      textarea.selectionStart = start;
      textarea.selectionEnd = end;
    });
  });

  return textarea;
}

function waitForCMS(callback) {
  if (window.CMS) {
    callback();
  } else {
    setTimeout(() => waitForCMS(callback), 50);
  }
}

waitForCMS(() => {
  CMS.registerWidget('markdown', MarkdownControl);
  CMS.init();
});
