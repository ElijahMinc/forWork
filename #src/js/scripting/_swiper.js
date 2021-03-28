const swiperSlideHeight = document.querySelectorAll('.swiper-slide')
swiperSlideHeight.forEach(current => {
   current.style.height = 'auto';
   current.style.minHeight = '100%';
})
new Swiper('.swiper-container', {

   //Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
   },
   pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,

      // Динамические буллеты
      dynamicBullets: true,

      //Кастомные буллеты
      renderBullet: function (index, className) {
         return '<span class="' + className + '">' + (index + 1) + '</span>'
      },
      // Фракции
      type: 'fraction',
      renderFraction: function (currentClass, totalClass) {
         return 'Foto <span class="' + currentClass + '"></span>' +
            ' of ' +
            '<span class="' + totalClass + '"></span>';
      },
      type: 'progressbar',
   },


   // Scrollbar

   scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
   },

   // Перетаскивание слайдов на пк: вкл\вкл
   simulateTouch: true,
   //Чувствительность свайпа
   touchRadio: 45,
   //Угол срабатывания свайпа\перетаскивания
   touchAngle: 100,
   //Курсор перетаскивания 
   grabCursor: true,
   // Переключение на слайд при клике на него
   slideToClickedSlide: false,

   //Навигация по хэшу

   hashNavigation: {
      //отслеживать состояние
      watchState: true,
   },

   //Управление слайдером с помощью клавиатуры
   keyboard: {
      // вкл/выкл этой возможности
      enabled: true,
      // вкл/выкл только тогда, когда мы проскролили до слайдера
      onlyInViewport: true,
      // управление клавишами
      pageUpDown: true,

   },

   //Управление слайдером с помощью колеса мышки
   mouseWheel: {
      sensitive: 1,
      //Чувствительность мышки
      //Класс объекта, на котором будет срабатывать прокрутка мышью
      // eventsTarget: ".image-slider",
   },

   //Автовысота
   autoHeight: true,

   //Количество слайдов для показа
   slidesPerView: 3, // or 'auto'

   //Отключение всех видимых пользовательских интрументов управления

   watchOverflow: true,

   // Отступы слайдер 
   spaceBetween: 20,

   // Определеяет, сколько слайдов будет прокручиваться сразу
   slidesPerGroup: 1,
   // //Активный слайд по центру
   // centeredSlides: true,

   //Стартовый слайд
   initialSlide: 0,
   // //мультирядность
   slidesPerColumn: 1,
   //Бесконечность
   loop: false,
   //Количество дублирующих слайдов
   loopedSlides: 0,

   // Свободный режим
   freeMode: false,

   //Автопрокрутка
   autoplay: {
      // пауза между прокруткой
      delay: 1000,
      // закончить на последнем слайде
      stopOnLastSlide: true,
      // отключить после ручного переключения
      disableOnInteraction: true,

   },


   //Скорость листания слайдов
   speed: 800,

   //Вертикальный слайдер

   direction: 'horizontal', //'vertical',

   //Эффекты переключение слайдов
   //Листание
   effect: 'slide',

   effect: 'fade',
   fadeEffect: {
      // Паралелльная смена прозрачности
      crossFade: true,
   },

   effect: 'flip',

   flipEffect: {
      slideShows: true,
      // Показ только активного слайда
      limitRotation: true,
   },


   effect: 'cube',

   cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
   },


   effect: 'coverflow',

   coverFlowEffect: {
      //угол
      stretch: 20,
      // наложение
      stretch: 50,
      // тень
      slideShadows: true,
   },


   //Брэйк-поинты

   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 2,
      },
      992: {
         slidesPerView: 3,
      }
   },

   //Отключить предзагрузку картинок
   preloadImages: false,
   // Lazy Loading
   // подгрузка картинок
   lazy: {
      //подгружать на старте
      //переключение слайда
      loadOntransitionStart: false,
      //подгрузить предыдущую и следующую картинки
      loadPrevNext: false,
   },
   //Слежка за видимыми слайдами
   watchSlidesProgress: true,
   //Добавление класса видимым слайдам
   watchSlidesVisibility: true,

   //Zoom

   zoom: {
      //Максимальное увеличение
      maxRatio: 5,
      //Минимальнео увеличение
      minRatio: 1,
   },
   // Миниатюры превью
   thumbs: {
      //Свайпер с миниатюрами и его настройки
      swiper: {
         el: ".image-mini-slider",
         slidesPerView: 5,

      }
   },

});


new Swiper('.image-in-slider', {

   //Курсор перетаскивания 
   grabCursor: true,


   pagination: {
      el: '.swiper-pagination',
      clickable: true,

      dynamicBullets: true,
   },

   //корректная работа
   //перетаскивание слайда
   //для дочернего слайда
   nested: true,

});

// Init more sliders

const swiperSecond = new Swiper('.slider__container-casting', {
   wrapperClass: "slider__wrapper-second", // YOUR WRAPPERCLASS
   slideClass: "slider__slide-second", // YOUR SLIDERCLASS
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   navigation: {
      nextEl: '.swiper-button-next.button-nextSecond', // 
      prevEl: '.swiper-button-prev.button-prevSecond'
   },

   slidesPerView: 6,
   spaceBetween: 10,
   slidesPerGroup: 1,
   watchOverflow: false,
   speed: 800,

   breakpoints: {
      320: {
         slidesPerView: 2,
      },
      440: {
         slidesPerView: 3,
      },
      650: {
         slidesPerView: 4,
      },
      768: {
         slidesPerView: 5,
      },
      900: {
         slidesPerView: 6,
      }
   },
});