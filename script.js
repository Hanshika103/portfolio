// SCROLL ANIMATION
const elements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    elements.forEach(el => {
        const position = el.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            el.classList.add('show');
        }
    });
});

// TYPING EFFECT
const roles = ["Java Developer", "Python Developer", "DSA Learner"];
let i = 0, j = 0;
let current = "";
let isDeleting = false;

function typeEffect() {
    current = roles[i];

    if (!isDeleting) j++;
    else j--;

    document.querySelector(".typing").innerText = current.substring(0, j);

    if (!isDeleting && j === current.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
        return;
    }

    if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();