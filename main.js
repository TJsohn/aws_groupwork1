
const carousel = document.querySelector(".carousel");
const track = document.querySelector(".carousel-track");
const totalWidth = track.scrollWidth / 2;
let isPaused = false;

const navMenu = document.getElementById("navLinks");
const faBar = document.querySelector('.fa-bars');
const themeBtn = document.getElementById('darkModeToggle');
const topButton = document.getElementById("topBtn");

const triggerBtn = document.querySelector(".modalTriggerBtn")
const modal = document.querySelector(".modalWindow");
const closeBox = document.querySelector(".closeModal");


function autoScroll() {
    if (!isPaused) {
        carousel.scrollLeft += 1;
        if (carousel.scrollLeft >= totalWidth) {
            carousel.scrollLeft -= totalWidth;
        }
    }
    requestAnimationFrame(autoScroll);
}
requestAnimationFrame(autoScroll);

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

window.onscroll = function () { scrollFunction() };

function backToTopFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

faBar.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const displayModal = () => {
    modal.style.display = "block"
}

const closeModalWindow = () => {
    modal.style.display = "none"
}



carousel.addEventListener("mouseenter", () => {
    isPaused = true;
});
carousel.addEventListener("mouseleave", () => {
    isPaused = false;
});

carousel.addEventListener("touchstart", () => {
    isPaused = true;
});
carousel.addEventListener("touchend", () => {
    isPaused = false;
});


topButton.addEventListener('click', backToTopFunction);

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle("dark-mode");
});

triggerBtn.addEventListener('click', displayModal);
closeBox.addEventListener('click', closeModalWindow);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModalWindow();
})
