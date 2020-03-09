const buttonPrevious = document.getElementById('button-previous');
const buttonNext = document.getElementById('button-next');
const buttonProjects = document.getElementById('button-projects');
const slider = document.getElementById('slides');
const hr = document.getElementById('hr-project');

const paginationListButtons = document.getElementById('pagination-list-buttons')
    .getElementsByClassName('pagination-link');
const slides = document.getElementsByClassName('transition');

let currentIndex = 0;
let slideValue = 0;

let currentTransform = -2/3 * 100;
let incrementTransform = 1/3 * 100;

buttonProjects.addEventListener('click', () => {
    window.scrollBy({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
    });
});

buttonNext.addEventListener('click', () => {
    currentTransform = currentTransform + incrementTransform;

    slider.style.transform = "translateX(" + currentTransform + "%)";
/*
    for(let slide of slides) {
        slide.style.transform = "translateX(" + slideValue/3 + "%)";
        console.log(slide);
    }
*/
    changeCurrentButton(true);
    redefineButtons();
});

buttonPrevious.addEventListener('click', () => {
    currentTransform = currentTransform - incrementTransform;

    slider.style.transform = "translateX(" + currentTransform + "%)";
    /*
    for(let slide of slides) {
        slide.style.transform = "translateX(" + slideValue/3 + "%)";
        console.log(slide);
    }
    */

    changeCurrentButton(false);
    redefineButtons();
});

window.addEventListener('scroll', () => {
    let top = this.scrollY;
    console.log(top);

    if(top >= 160) {
        hr.style.width = "300px";
    }
    else {
        hr.style.width = "0px";
    }
});

for(let i = 0; i < paginationListButtons.length; i++) {
    paginationListButtons[i].addEventListener('click', () => {
        slideValue = slideValue + ((i - currentIndex) * 100);
        for(let slide of slides) {
            slide.style.transform = "translateX(" + slideValue/3 + "%)";
            console.log(slide);
        }

        paginationListButtons[currentIndex].classList.remove('is-current');
        currentIndex = i;
        paginationListButtons[i].classList.add('is-current');

        redefineButtons();
    });
}

function changeCurrentButton(forward) {
    paginationListButtons[currentIndex].classList.remove('is-current');
    currentIndex = forward ? currentIndex + 1 : currentIndex - 1;
    paginationListButtons[currentIndex].classList.add('is-current');
}

function redefineButtons() {
    buttonNext.disabled = currentIndex < paginationListButtons.length - 1 ? false : true;
    buttonPrevious.disabled = currentIndex > 0 ? false : true;
}