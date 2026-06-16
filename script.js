// Modal Contact
function openContact(productName) {
    const modal = document.getElementById('contactModal');
    const productNameSpan = document.getElementById('productName');
    const emailLink = document.getElementById('emailLink');
    const whatsappLink = document.getElementById('whatsappLink');
    
    productNameSpan.textContent = productName;
    
    // Personnalise les liens
    emailLink.href = `mailto:ton-email@exemple.com?subject=Commande: ${productName}&body=Bonjour, je souhaite commander: ${productName}`;
    whatsappLink.href = `https://wa.me/33XXXXXXXXX?text=Bonjour, je souhaite commander: ${productName}`;
    
    modal.style.display = 'block';
}

function closeContact() {
    document.getElementById('contactModal').style.display = 'none';
}

// Fermer avec Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContact();
    }
});

// Fermer en cliquant à l'extérieur
window.onclick = function(event) {
    const modal = document.getElementById('contactModal');
    if (event.target == modal) {
        closeContact();
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s, transform 0.6s';
    observer.observe(card);
});
