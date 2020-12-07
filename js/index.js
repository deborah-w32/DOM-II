// Your code goes here

const logoLinks = document.querySelectorAll('nav');

logoLinks.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = "#de3e49";
    });
});

logoLinks.forEach(item => {
    item.addEventListener('mouseout', event => {
        event.target.style.color = "#212529";
    });
});

const buttonHover = document.querySelectorAll('.btn');

buttonHover.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "#f9ac47";
    });
});

buttonHover.forEach(item => {
    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = "#17A2B8";
    });
});

const pageFooterOnLoad = document.querySelector('footer');

window.addEventListener('load', () => {
    pageFooterOnLoad.style.backgroundColor = '#de3e49';
});

const pageCopyrightOnLoad = document.querySelector('footer p');

window.addEventListener('load', () => {
    pageCopyrightOnLoad.style.color = '#f9ac47';
});

const pageHeaderOnLoad = document.querySelector('header');

window.addEventListener('load', () => {
    pageHeaderOnLoad.style.backgroundColor = '#f9ac47';
});

const pageContentOnLoad = document.querySelector('.home');

window.addEventListener('load', () => {
    pageContentOnLoad.style.backgroundColor = '#f1cfb9';
});

const biggerButtons = document.querySelectorAll('.btn');

biggerButtons.forEach(item => {
    item.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        item.style.padding = '60px';
        item.style.border = '5px dotted #93E9BE';
    });
});

// EVENT PROPOGATION
const body = document.querySelector('body');
const intro = document.querySelector('.intro');
const contentSection = document.querySelector('.content-section');
const inverseContent = document.querySelector('.inverse-content');

body.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    body.style.backgroundColor = '#C7EF00';
});

intro.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    intro.style.backgroundColor = '#FE4A49';
});

contentSection.addEventListener('dblclick', (e) => {
    e.stopPropagation();
    contentSection.style.backgroundColor = 'dodgerblue';
});

inverseContent.addEventListener('dblclick', () => {
    inverseContent.style.backgroundColor =  'darkorchid';
});

// PREVENT DEFAULT

const links = document.querySelectorAll('.nav a');

links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log('Links do not fire!');
    });
});

// gsap stretch

const pageTitle = document.getElementsByClassName('logo-heading');

gsap.fromTo(pageTitle, {x:10}, {duration:1, x:270, ease: "bounce"});