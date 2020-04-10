let { body } = document;
let mobile__navigation = document.querySelector('.mobile-btn');

mobile__navigation.addEventListener('click', (e) => {
    e.preventDefault();
    body.classList.toggle('show');
})