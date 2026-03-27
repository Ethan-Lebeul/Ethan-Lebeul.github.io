// Effet de frappe (Typewriter)
const text = "Développeur Fullstack & Designer d'interfaces";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Animation des barres de compétences au scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.bar-fill');
            bars.forEach(bar => {
                const targetWidth = bar.parentElement.dataset.width || "90%"; // fallback
                bar.style.width = targetWidth;
            });
        }
    });
}, { threshold: 0.5 });

// Initialisation
window.onload = () => {
    typeWriter();
    
    // Ajout d'une animation douce pour l'apparition des cartes projets
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        card.style.transition = `all 0.6s ease ${i * 0.2}s`;
        
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 500);
    });
};