const circle = document.querySelector('.progress-ring__circle')
const radiusCircle = circle.r.baseVal.value; // радиус круга
const circumference = 2 * Math.PI * radiusCircle; // длина окружности
const span = document.querySelector('span')
circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference

//функция для вычисления процентов dashoffset
function setProgress(percent, stopProgress, time) {
   var time = Math.round(time * 1000 / 100)
   percent = 0;
   start = 0;
   let interval = setInterval(() => {
      start++
      if (percent == stopProgress) {
         clearInterval(interval)
      } else {
         const offset = circumference - percent / 100 * circumference;
         circle.style.strokeDashoffset = offset;
         span.innerHTML = start + '%'
      }
      percent++
   }, time);
}
setProgress(40, 40, 2)