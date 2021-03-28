// Один открывающийся аккордеон 
accordion.forEach((current) => {
   if (current.parentElement.classList.contains('_only')) {
      current.addEventListener('click', function (e) {
         if (this.classList.contains('_show')) {
            this.classList.remove('_show')
         } else {
            accordion.forEach((current) => {
               current.classList.remove('_show')
            })
            this.classList.add('_show')
         }
      })
   } else {
      current.addEventListener('click', function (e) {
         this.classList.toggle('_show')
      })
   }
})
// Соседствующий элемент
// .nextElementSibling