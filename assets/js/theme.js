(() => {
  const modes = ['system', 'light', 'dark'];
  let mode = 'system';
  try { mode = localStorage.getItem('theme') || 'system'; } catch {}
  if (!modes.includes(mode)) mode = 'system';
  function apply() {
    document.documentElement.dataset.theme = mode;
    const button = document.getElementById('theme');
    if (!button) return;
    button.querySelector('span').textContent = mode[0].toUpperCase() + mode.slice(1);
    button.setAttribute('aria-label', 'Color theme: ' + mode + '; click to switch');
  }
  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.getElementById('theme').addEventListener('click', () => {
      mode = modes[(modes.indexOf(mode) + 1) % modes.length];
      try { localStorage.setItem('theme', mode); } catch {}
      apply();
    });
  });
})();
