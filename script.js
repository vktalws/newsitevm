// Script para funcionalidades do site

// Scroll suave para as seções ao clicar nos links do menu
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.carrossel .slide');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const carrossel = document.getElementById('carrossel');
    carrossel.style.transform = `translateX(-${currentIndex * 100}%)`;
}





