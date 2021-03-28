burger.addEventListener('click', showBurger)
function showBurger() {
   this.classList.toggle('_show')
   body.classList.toggle('_lock')
}