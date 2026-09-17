(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const printButton = document.querySelector('.print-button');
  const storedTheme = localStorage.getItem('theme');

  if (storedTheme === 'light' || storedTheme === 'dark') {
    root.dataset.theme = storedTheme;
  }

  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    root.dataset.theme = next;
    localStorage.setItem('theme', next);
  });

  printButton?.addEventListener('click', () => window.print());
})();
