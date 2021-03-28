const linksForPopap = document.querySelectorAll('.popap__link')
const popapLinkClose = document.querySelectorAll('.popap__container-content-close')

linksForPopap.forEach((current) => {
   current.addEventListener('click', popap)
})
popapLinkClose.forEach(current => current.addEventListener('click', closeLink))
function popap(event) {
   let current = this.getAttribute('href').slice(1)
   let popap = document.getElementById(current)
   showPopap(popap)
   event.preventDefault()
}
function showPopap(popap) {
   body.classList.add('_lock')
   let popaps = document.querySelectorAll('popap._show')
   popaps.forEach(current => popapClose(current))
   popap.classList.add('_show')
   popap.addEventListener('click', function (event) {
      if (!event.target.closest('.popap__container-content')) {
         popapClose(popap)
      }
   })
}
function closeLink(event) {
   popapClose(event.target.closest('.popap'))
}
function popapClose(popap) {
   popap.classList.remove('_show')
   body.classList.remove('_lock')
}