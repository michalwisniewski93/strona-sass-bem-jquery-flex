const burger = document.querySelector('.burgericon')
const nav = document.querySelector('nav')

burger.addEventListener('click', function(){
    nav.classList.toggle('active')
})