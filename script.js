// script.js (or index.html inline)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then((reg) => {
                console.log('Service Worker registered with scope:', reg.scope);
            })
            .catch((err) => {
                console.error('Service Worker registration failed:', err);
            });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('Solar System Explorer app loaded!');

    // Theme toggle functionality
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeToggleButton) {
        themeToggleButton.addEventListener('click', () => {
            // Toggle dark theme on body element
            document.body.classList.toggle('dark');
            // Optionally store the theme choice in localStorage for persistence
            if (document.body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        });

        // On page load, check for the stored theme preference and apply it
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            document.body.classList.add('dark');
        }
    }

    // If additional dynamic behaviors or animations are required, you can add them here.
    // For example, handling mouse hover effects, animations, etc.
    
    // Example: Add animation to the planet cards on hover
    const planetCards = document.querySelectorAll('.cards-container .card');
    planetCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            card.classList.add('hovered');
        });
        card.addEventListener('mouseout', () => {
            card.classList.remove('hovered');
        });
    });
});
