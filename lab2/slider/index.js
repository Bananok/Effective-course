const slider = document.querySelector('.slider-items');
if (!localStorage.getItem('numberSlide')) {
    localStorage.setItem('numberSlide', '1')
}
slider.style.transform = `translateX(-${(Number(localStorage.getItem('numberSlide'))-1)*500}px)`;

let timeout = setTimeout(() => leftright2(), 3000);

function leftright1() {
    clearTimeout(timeout);
    timeout = setTimeout(() => leftright2(), 3000);
    const numberSlide = Number(localStorage.getItem('numberSlide'));
    if (numberSlide === 1) {
        slider.style.transform = `translateX(-1000px)`;
        localStorage.setItem('numberSlide', '3')
    } else {
        slider.style.transform = `translateX(-${(numberSlide-2)*500}px)`;
        localStorage.setItem('numberSlide', String(numberSlide-1))
    }
}
function leftright2() {
    clearTimeout(timeout);
    timeout = setTimeout(() => leftright2(), 3000);
    const numberSlide = Number(localStorage.getItem('numberSlide'));
    if (numberSlide === 3) {
        slider.style.transform = `translateX(0px)`;
        localStorage.setItem('numberSlide', '1')
    } else {
    slider.style.transform = `translateX(-${numberSlide*500}px)`;
    localStorage.setItem('numberSlide', String(numberSlide+1))
    }
}
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === "ArrowRight" || key === " ") { leftright2(); }
    if (key === "ArrowLeft") { leftright1(); }
}, false);