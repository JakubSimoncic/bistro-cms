// Netlify CMS poskytuje 'h' pro vytváření React elementů
function MarkdownControl({ value, onChange, forID }) {
  return h('textarea', {
    id: forID,
    style: {
      width: '100%',
      height: '300px',
      fontFamily: 'monospace',
      fontSize: '14px',
    },
    value: value || '',
    onInput: (e) => {
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;

      onChange(e.target.value);

      // Zachovej pozici kurzoru
      requestAnimationFrame(() => {
        textarea.selectionStart = start;
        textarea.selectionEnd = end;
      });
    },
  });
}

window.CMS.registerWidget('markdown', MarkdownControl);
window.CMS.init();
