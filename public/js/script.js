const buttonPrevious = document.getElementById('button-previous');
const buttonNext = document.getElementById('button-next');

const paginationListButtons = document.getElementById('pagination-list-buttons')
    .getElementsByClassName('pagination-link');
const slides = document.getElementsByClassName('transition');

let currentIndex = 0;
let slideValue = 0;

buttonNext.addEventListener('click', () => {
    slideValue += 100;
    for(let slide of slides) {
        slide.style.transform = "translateX(" + slideValue/3 + "%)";
        console.log(slide);
    }

    changeCurrentButton(true);
    redefineButtons();
});

buttonPrevious.addEventListener('click', () => {
    slideValue -= 100;
    for(let slide of slides) {
        slide.style.transform = "translateX(" + slideValue/3 + "%)";
        console.log(slide);
    }

    changeCurrentButton(false);
    redefineButtons();
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