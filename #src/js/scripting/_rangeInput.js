

rangeInput.addEventListener('input', range)
function range() {
   let rangeInputValue = rangeInput.value

   rangeBackground.style.width = rangeInputValue + '%'

   rangeCount.style.left = rangeInput.value - 12 * this.value * 0.01 + '%'
   rangeCircle.style.left = rangeInput.value - 2 * this.value * 0.02 + '%'
   rangeCount.innerHTML = rangeInput.value
}
