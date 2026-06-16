// ===================== MENU BURGER =====================
function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('open');
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('open');
    });
});

// ===================== MODAL =====================
function openContact(productName, isTrial) {
    const modal = document.getElementById('contactModal');
    const productNameEl = document.getElementById('productName');
    const modalTitle = document.getElementById('modalTitle');
    const modalIcon = document.getElementById('modalIcon');
    const modalDesc = document.getElementById('modalDesc');
    const paymentSection = document.getElementById('paymentSection');

    productNameEl.textContent = productName;

    if (isTrial) {
        // Mode essai gratuit
        modalIcon.textContent = '🎁';
        modalTitle.textContent = 'Essai Gratuit';
        modalDesc.textContent = 'Contacte-moi sur Discord pour recevoir ton essai gratuit de Shinobi Viewer :';
        paymentSection.style.display = 'none';
    } else {
        // Mode achat normal
        modalIcon.textContent = '💬';
        modalTitle.textContent = 'Commander';
        modalDesc.textContent = 'Contacte-moi sur Discord pour finaliser ta commande :';
        paymentSection.style.display = 'block';
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeContact() {
    document.getElementById('contactModal').style.display = 'none';
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeContact();
});

window.addEventListener('click', e => {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) closeContact();
});

// ===================== SMOOTH SCROLL =====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// ===================== ANIMATIONS SCROLL =====================
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 120);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// ===================== HEADER SCROLL =====================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.boxShadow = window.scrollY > 50
        ? '0 2px 30px rgba(0,0,0,0.12)'
        : '0 1px 20px rgba(0,0,0,0.08)';
});
