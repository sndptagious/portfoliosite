/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.remove('show');
    }
}
navLinks.forEach((link) => link.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58;
        const sectionId = current.getAttribute('id');
        const sectionLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (sectionLink) {
            if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
                sectionLink.classList.add('active-link');
            } else {
                sectionLink.classList.remove('active-link');
            }
        }
    });
};
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '50px',
    duration: 1200,
    delay: 200,
    reset: false,
});

sr.reveal('.hero__content, .about__image, .skill-card, .service-card, .work__card, .contact__content', {});
sr.reveal('.hero__visual, .about__content, .contact__form', { delay: 300 });
sr.reveal('.socials__icon, .status-badge', { interval: 120 });
