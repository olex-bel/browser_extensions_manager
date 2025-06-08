
type Theme = 'light' | 'dark';

export function getSystemTheme(): Theme {
    const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return isDarkMode ? 'dark' : 'light';
}
