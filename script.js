// ===================== MENU BURGER =====================
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('open');
}

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// ===================== MODAL =====================
function openContact(productName) {
    const modal = document.getElementById('contactModal');
    const productNameEl = document.getElementById('productName');
    productNameEl.textContent = productName;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeContact() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = '';
}

// Fermer avec Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeContact();
});

// Fermer en cliquant à l'extérieur
window.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) closeContact();
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// ===================== ANIMATIONS AU SCROLL =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-aos]').forEach(el => {
    observer.observe(el);
});

// ===================== HEADER SCROLL EFFECT =====================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 2px 30px rgba(0,0,0,0.12)';
    } else {
        header.style.boxShadow = '0 1px 20px rgba(0,0,0,0.08)';
    }
});
