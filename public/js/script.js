const arrowRight = document.getElementById('arrow-right');
const arrowLeft = document.getElementById('arrow-left');
const buttonProjects = document.getElementById('button-projects');
const slider = document.getElementById('slides');
const hr = document.getElementById('hr-project');

const slides = document.getElementsByClassName('box-container');

let currentSlide = 0;

let currentTransform = -2/3 * 100;
let incrementTransform = 1/3 * 100;
let hrFadedIn = false;

buttonProjects.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});

arrowRight.addEventListener('click', () => {
    if(currentSlide < slides.length - 1) {
        currentTransform = currentTransform + incrementTransform;
        slider.style.transform = "translateX(" + currentTransform + "%)";
        currentSlide++;
    }
});

arrowLeft.addEventListener('click', () => {
    if(currentSlide > 0) {
        currentTransform = currentTransform - incrementTransform;
        slider.style.transform = "translateX(" + currentTransform + "%)";
        currentSlide--;
    }
});

window.addEventListener('scroll', () => {
    let top = this.scrollY;

    if(top >= 400) {
        hr.style.width = "300px";
        hr.style.opacity = "1";
    }
});