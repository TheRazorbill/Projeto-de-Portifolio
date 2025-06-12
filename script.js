const menuIcon = document.querySelector('.menu-icon');
const navlist = document.querySelector('.navlist');
const overlay = document.querySelector('.overlay');

function toggleMenu() {
    navlist.classList.toggle('open');
    menuIcon.classList.toggle('active');
    overlay.classList.toggle('open');
}

menuIcon.addEventListener('click', toggleMenu);
overlay.addEventListener('click', toggleMenu);

const texts = [
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER",
];

const typingSpeed = 100;
const erasingSpeed = 50;
const delayBeforeErase = 1000;
const delayBeforeTypingNext = 500;

const textElements = document.querySelector('.typewriter-text');

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        if (charIndex < currentText.length) {
            textElements.innerHTML += currentText.charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            setTimeout(() => {
                isDeleting = true;
                typeEffect();
            }, delayBeforeErase);
        }
    } else {
        if (charIndex > 1) {
            textElements.innerHTML = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, erasingSpeed);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            const nextText = texts[textIndex];

            textElements.innerHTML = nextText.charAt(0);
            charIndex = 1;

            setTimeout(typeEffect, delayBeforeTypingNext);
        }
    }
}

window.onload = () => {
    textElements.innerHTML = texts[textIndex].charAt(0);
    charIndex = 1;
    typeEffect();
};