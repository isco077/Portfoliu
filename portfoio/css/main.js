document.addEventListener('DOMContentLoaded', function() {
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileHomeWrap = document.querySelector('.mobile-home-wrap');
    const xmark = document.querySelector('.xmark');

    hamburgerBtn.addEventListener('click', function() {
        mobileHomeWrap.classList.toggle('none');
        mobileHomeWrap.classList.toggle('open');
    });

    xmark.addEventListener('click', function() {
        mobileHomeWrap.classList.toggle('none');
        mobileHomeWrap.classList.toggle('open');
    });
});
