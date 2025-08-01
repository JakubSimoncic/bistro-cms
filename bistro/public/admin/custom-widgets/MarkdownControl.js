function MarkdownControl({ value, onChange }) {
  const textarea = document.createElement('textarea');
  textarea.style.width = '100%';
  textarea.style.height = '300px';
  textarea.style.fontFamily = 'monospace';
  textarea.style.fontSize = '14px';
  textarea.value = value || '';

  textarea.addEventListener('input', e => {
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;

    onChange(e.target.value);

    requestAnimationFrame(() => {
      textarea.selectionStart = start;
      textarea.selectionEnd = end;
    });
  });

  return textarea;
}
