const iframe = document.querySelector('');
iframe.addEventListener('load', () => {
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  const iframeBody = iframeDocument.querySelector('body');
  iframeBody.style.backgroundColor = '#252525';
});