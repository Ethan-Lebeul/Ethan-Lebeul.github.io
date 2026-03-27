// Effet Typewriter
const text = "DÉVELOPPEUR FULLSTACK // PROTOCOLE ARK ACTIVÉ";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, index + 1) + '<span style="border-right: 2px solid var(--tek-cyan)"></span>';
        index++;
        setTimeout(typeWriter, 80);
    }
}

// Animation des barres de stats au chargement
function animateStats() {
    const bars = document.querySelectorAll('.bar-fill');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.transition = 'width 2s ease-out';
            bar.style.width = width;
        }, 500);
    });
}

// Navigation fluide et effet de scroll sur la navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(0, 10, 15, 0.95)';
        nav.style.boxShadow = '0 0 20px rgba(0, 242, 255, 0.2)';
    } else {
        nav.style.background = 'rgba(0, 20, 30, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// Lancer au démarrage
window.onload = () => {
    typeWriter();
    animateStats();
};