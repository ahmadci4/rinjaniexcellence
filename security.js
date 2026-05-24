// --- HIGH COPYRIGHT PROTECTION LOGIC ---

// 1. Mencegah Klik Kanan (Context Menu)
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 2. Mencegah Shortcut Keyboard (Ctrl+C, Ctrl+X, Ctrl+U, Ctrl+S, Ctrl+P, F12)
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        e.preventDefault();
    }
    if (e.ctrlKey) {
        const key = e.key.toLowerCase();
        if (key === 'c' || key === 'x' || key === 'u' || key === 's' || key === 'p') {
            e.preventDefault();
        }
    }
});

// 3. Mencegah Gambar Ditarik (Drag & Drop)
document.addEventListener('dragstart', function(e) {
    if (e.target.tagName.toLowerCase() === 'img') {
        e.preventDefault();
    }
});

// 4. Mematikan fungsi Copy
document.addEventListener('copy', function(e) {
    e.preventDefault();
});
