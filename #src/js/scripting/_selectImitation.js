arrow.forEach((e) => {
   e.addEventListener('click', showSelect)
})
// Открытие селекта
function showSelect() {
   if (this.previousElementSibling.classList.contains('show')) {
      this.previousElementSibling.classList.remove('show')
   } else {
      deleteClass()
      this.previousElementSibling.classList.add('show')
   }
}
// Закрытие селекта
function deleteClass() {
   document.querySelectorAll('.select').forEach((e) => {
      e.classList.remove('show')
   })
   document.querySelectorAll('.range__container').forEach((e) => {
      e.classList.remove('show')
   })
}
// При клике на любое место в ДОКУМЕНТЕ селект должен закрываться
document.addEventListener('click', function (e) {
   if (!e.target.closest('.arrow-area') && !e.target.closest('.range__container')) {
      deleteClass()
   }
})
// SELECT Active ------------------------------>
// function selectCasting(element, attr) {
//    var value = element.getAttribute(attr); // Считываем значение выбранного элемента
//    var nodes = element.parentNode.childNodes; // Получаем все остальные элементы
// let selectContainer = element.parentNode.parentNode
//    for (var i = 0; i < nodes.length; i++) {
//       /* Отфильтровываем посторонние элементы text и input */
//       if (nodes[i] instanceof HTMLParagraphElement) {
//          /* Добавляем active у выбранного элемента, стирая данный класс у всех остальных */
//          if (value == nodes[i].getAttribute(attr)) {
//             nodes[i].className = "active";
// selectContainer.querySelector('p').innerHTML = nodes[i].innerHTML
//             deleteClass()
//          }
//          else {
//             nodes[i].className = "";
//          }
//       }
//    }
//    document.getElementById("my_selectFirst").value = value; // Устанавливаем в hidden-поле выбранное значение
// }
function select(classNameSelectElement, idNameSelectElement) { // nameSelect, nameElement, arrtElement
   let selectItems = document.querySelectorAll(classNameSelectElement)
   selectItems.forEach(function (current) {
      current.addEventListener('click', function () {
         let currentValue = this.dataset.value
         for (let index = 0; index < selectItems.length; index++) {
            const selectItem = selectItems[index];
            if (currentValue == selectItem.dataset.value) {
               selectItem.classList.add("active")
               deleteClass()
            } else {
               selectItem.classList.remove("active")
            }
         }
         document.getElementById(idNameSelectElement).value = currentValue;
      })
   })
}
select('.select__first', 'selectFirst')