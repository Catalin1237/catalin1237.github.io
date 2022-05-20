const hamburger = document.getElementById('ham');
const navLink = document.getElementById('navL');

hamburger.addEventListener('click', ()=>{
    navLink.classList.toggle('show');
})