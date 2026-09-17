(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const printButton = document.querySelector('.print-button');
  let storedTheme;
  try { storedTheme = localStorage.getItem('theme'); } catch { /* Storage may be disabled. */ }

  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.dataset.theme = storedTheme;
  }

  const updateThemeButton = () => {
    const dark = root.dataset.theme === 'dark';
    themeButton?.setAttribute('aria-pressed', String(dark));
    themeButton?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
    if (themeButton) themeButton.textContent = dark ? 'Light theme' : 'Dark theme';
  };
  updateThemeButton();
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch { /* Switching still works without persistence. */ }
    updateThemeButton();
  });

  printButton?.addEventListener('click', () => window.print());
})();
