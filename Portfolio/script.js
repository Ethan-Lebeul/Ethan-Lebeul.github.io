// Effet Typewriter
const text = "Développeur Fullstack & Designer UI/UX";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML = text.substring(0, index + 1) + '<span aria-hidden="true"></span>';
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Changement de couleur de la navbar au scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#0f172a';
        navbar.style.boxShadow = '0 5px 20px rgba(0,0,0,0.5)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Lancer les fonctions au chargement
window.onload = () => {
    typeWriter();
};