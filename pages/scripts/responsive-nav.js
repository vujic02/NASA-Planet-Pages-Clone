const toggleNavbar = document.querySelector('.toggle-button');
const navbarLi = document.querySelectorAll('#navbar li');

toggleNavbar.addEventListener('click', () => {
    navbarLi.forEach(e => {
        e.classList.toggle('shown');
    })
});
