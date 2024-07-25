let mobileMenuWrap = document.querySelector('.mobile-menu-wrap');
let mobileMenu = document.querySelector('.mobile-menu');
let hamburgerBtn = document.querySelector('.hamburger-btn');
let xmarkBtn = document.querySelector('.xmark');
let body = document.querySelector('body');


hamburgerBtn.addEventListener('click', () => {
    mobileMenuWrap.classList.remove('none');
    mobileMenu.classList.add('open');
    body.classList.add(('body-scroll-stop'));
})

xmarkBtn.addEventListener('click', () => {
    mobileMenuWrap.classList.add('none');
    mobileMenu.classList.remove('open');
    body.classList.remove(('body-scroll-stop'));
})