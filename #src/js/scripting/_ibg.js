let ibg = document.querySelectorAll('._ibg')

for (let index = 0; index < ibg.length; index++) {
   const ibgElement = ibg[index];
   let nextElement = ibgElement.querySelector('img').getAttribute('src')
   ibgElement.style.backgroundImage = `url("${nextElement}")`
   console.log(nextElement)


}
