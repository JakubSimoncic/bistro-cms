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
