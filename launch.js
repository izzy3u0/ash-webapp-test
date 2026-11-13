(() => {
  const standalone = window.navigator.standalone === true ||
    window.matchMedia('(display-mode: standalone)').matches;
  const installing = new URLSearchParams(window.location.search).get('install') === '1';

  // Keep Safari on the Ash origin while the user adds the icon.
  // A Home Screen launch always continues to ChatGPT, even if iOS saves the query.
  if (installing && !standalone) {
    document.getElementById('status').textContent = '把 Ash 添加到主屏幕';
    document.getElementById('install-help').hidden = false;
    return;
  }

  window.setTimeout(() => {
    window.location.replace('https://chatgpt.com/');
  }, 500);
})();
