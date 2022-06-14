const slideList = [{
        img: "images/img1.jpg",
        text: 'Pierwszy tekst'
    },
    {
        img: "images/img2.jpg",
        text: 'Drugi tekst'
    },
    {
        img: "images/img3.jpg",
        text: 'Trzeci tekst'
    }
];

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')]

const time = 3000;
let active = 0;

const changeDot = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) {
        active = 0;
    }
    if (active < 0) {
        active = slideList.length - 1;
    }
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDot();
}

let slideInterval = setInterval(changeSlide, time);

const keyChangeSlide = (e) => {
    if (e.keyCode == '39') {
        changeSlide();
        clearInterval(slideInterval);
    } else if (e.keyCode == '37') {
        active -= 2;
        changeSlide();
        clearInterval(slideInterval);
    }
    slideInterval = setInterval(changeSlide, time);
}