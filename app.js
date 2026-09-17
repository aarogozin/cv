(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const printButton = document.querySelector('.print-button');
  const emailButtons = document.querySelectorAll('.email-button');
  const email = [97,110,116,111,110,64,114,111,103,111,122,46,105,110].map(code => String.fromCharCode(code)).join('');
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

  emailButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = `mailto:${email}`;
      link.textContent = email;
      link.className = button.className;
      button.replaceWith(link);
    }, { once: true });
  });
})();
