// Simple JavaScript for interactivity
document.addEventListener("DOMContentLoaded", function() {
    const btn = document.querySelector('.btn');
    if (btn) {
        btn.addEventListener('click', function() {
            alert('Thank you for clicking! More content coming soon.');
        });
    }
});
