// Selectors
const redTraveler = document.getElementsByClassName('block--red');
const blueTraveler = document.getElementsByClassName('block--blue');
const greenTraveler = document.getElementsByClassName('block--green');
const pinkTraveler = document.getElementsByClassName('block--pink');
const grayTraveler = document.getElementsByClassName('block--gray');
const blocks = document.querySelectorAll('.blocks .block');


// eventListener

// click

blocks.forEach(block => block.addEventListener('click', () => {
    blocks.forEach(block => block.style.order = (block.style.order + 1));
    block.style.order = 0; 
}));

// mousedown
redTraveler[0].addEventListener('mousedown', () => {
    redTraveler[0].style.transform = 'translateX(150vw)';
    redTraveler[0].style.transition = '5s';
});
blueTraveler[0].addEventListener('mousedown', () => {
    blueTraveler[0].style.transform = 'translateX(150vw)';
    blueTraveler[0].style.transition = '5s';
});
greenTraveler[0].addEventListener('mousedown', () => {
    greenTraveler[0].style.transform = 'translateX(150vw)';
    greenTraveler[0].style.transition = '5s';
});
pinkTraveler[0].addEventListener('mousedown', () => {
    pinkTraveler[0].style.transform = 'translateX(150vw)';
    pinkTraveler[0].style.transition = '5s';
});
grayTraveler[0].addEventListener('mousedown', () => {
    grayTraveler[0].style.transform = 'translateX(150vw)';
    grayTraveler[0].style.transition = '5s';
});