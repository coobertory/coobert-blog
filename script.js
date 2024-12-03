document.getElementById('theme-selector').addEventListener('change', function(e) {
    const theme = e.target.value;
    if (theme === 'light') {
        document.documentElement.style.setProperty('--bg-color', '#ffffff');
        document.documentElement.style.setProperty('--text-color', '#000000');
        document.documentElement.style.setProperty('--nav-bg', '#f0f0f0');
    } else {
        document.documentElement.style.setProperty('--bg-color', '#1a1a1a');
        document.documentElement.style.setProperty('--text-color', '#ffffff');
        document.documentElement.style.setProperty('--nav-bg', '#2d2d2d');
    }
});