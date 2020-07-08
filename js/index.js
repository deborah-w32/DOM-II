// Your code goes here

const logoLinks = document.querySelectorAll('nav')

logoLinks.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.color = "#de3e49"
    })
})

logoLinks.forEach(item => {
    item.addEventListener('mouseout', event => {
        event.target.style.color = "#212529"
    })
})

const buttonHover = document.querySelectorAll('.btn')

buttonHover.forEach(item => {
    item.addEventListener('mouseover', event => {
        event.target.style.backgroundColor = "#f9ac47"
    })
})

buttonHover.forEach(item => {
    item.addEventListener('mouseout', event => {
        event.target.style.backgroundColor = "#17A2B8"
    })
})

const pageFooterOnLoad = document.querySelector('footer')

window.addEventListener('load', () => {
    pageFooterOnLoad.style.backgroundColor = '#de3e49'
});

const pageCopyrightOnLoad = document.querySelector('footer p')

window.addEventListener('load', () => {
    pageCopyrightOnLoad.style.color = '#f9ac47'
});

const pageHeaderOnLoad = document.querySelector('header')

window.addEventListener('load', () => {
    pageHeaderOnLoad.style.backgroundColor = '#f9ac47'
});

const pageContentOnLoad = document.querySelector('.home')

window.addEventListener('load', () => {
    pageContentOnLoad.style.backgroundColor = '#f1cfb9'
});

const biggerButtons = document.querySelector('.btn')

biggerButtons.addEventListener('dblclick', function (event) {
    event.target.style.padding = '60px';
});

biggerButtons.forEach(item => {
    item.addEventListener('dblclick', event => {
        event.target.style.padding = '60px'
    })
})
