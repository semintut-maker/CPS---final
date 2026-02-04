import '../scss/style.scss'

import 'swiper/swiper-bundle.min.css'
import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

// Массив для брендов
const brandLogos = [
  { image: require('../img/lenovo-logo.svg'), alt: 'Логотип - Lenovo' },
  { image: require('../img/samsung-logo.svg'), alt: 'Логотип - Samsung' },
  { image: require('../img/apple-logo.svg'), alt: 'Логотип - Apple' },
  { image: require('../img/view-logo.svg'), alt: 'Логотип - ViewSonic' },
  { image: require('../img/bosch-logo.svg'), alt: 'Логотип - Bosch' },
  { image: require('../img/acer-logo.svg'), alt: 'Логотип - Acer' },
  { image: require('../img/hp-logo.svg'), alt: 'Логотип - HP' },
  { image: require('../img/sony-logo.svg'), alt: 'Логотип - Sony' },
  { image: require('../img/lenovo-logo.svg'), alt: 'Логотип - Lenovo' },
  { image: require('../img/samsung-logo.svg'), alt: 'Логотип - Samsung' },
  { image: require('../img/apple-logo.svg'), alt: 'Логотип - Apple' }
]

//Массив для видов техники
const servicesData = [
  { title: 'Ремонт ноутбуков' },
  { title: 'Ремонт планшетов' },
  { title: 'Ремонт ПК' },
  { title: 'Ремонт мониторов' },
  { title: 'Ремонт телевизоров' },
  { title: 'Ремонт телефонов' },
  { title: 'Ремонт ноутбуков' },
  { title: 'Ремонт планшетов' },
  { title: 'Ремонт ПК' }
]
//Массив для прайса
const pricesData = [
  {
    title: 'Диагностика',
    price: 'Бесплатно',
    duration: '30 мин'
  },
  {
    title: 'Замена дисплея',
    price: '1000 ₽',
    duration: '30-120 мин'
  },
  {
    title: 'Замена полифонического динамика',
    price: '1000 ₽',
    duration: '30-120 мин'
  },
  {
    title: 'Тестирование с выдачей технического заключения',
    price: '1000 ₽',
    duration: '30-120 мин'
  },
  {
    title: 'Замена программного обеспечения',
    price: '1000 ₽',
    duration: '30-120 мин'
  }
]

const brandTemplate = document.querySelector('#brand-slide-template').content
const newBrandSlide = brandTemplate.querySelector('.brand-slide')
const serviceTemplate = document.querySelector(
  '#service-slide-template'
).content
const newServiceSlide = serviceTemplate.querySelector('.service-slide')
const priceTemplate = document.querySelector('#price-slide-template').content
const newPriceSlide = priceTemplate.querySelector('.price-slide')

const brandsSlider = document.querySelector('.brands__slider')
const brandsList = brandsSlider.querySelector('.brands__list')
const servicesSlider = document.querySelector('.services__slider')
const servicesList = servicesSlider.querySelector('.services__list')
const pricesSlider = document.querySelector('.prices__slider')
const pricesList = pricesSlider.querySelector('.prices__list')

// const expandButton = document.querySelector('.expand-button')
// const paragraphHidden = document.querySelector('.about__paragraph--hidden')
// const textHidden = paragraphHidden.querySelector('.about__hidden-text')
let swiperInstance = null
let swiperInstanceService = null
let swiperInstancePrice = null

// Заполняем слайдер брендами
for (let i = 0; i < brandLogos.length; i++) {
  const cloneSlide = newBrandSlide.cloneNode(true)
  const img = cloneSlide.querySelector('.brand-card__img')
  img.src = brandLogos[i].image
  img.alt = brandLogos[i].alt

  brandsList.appendChild(cloneSlide)
}

//Заполняем слайдер видами техники
for (let i = 0; i < servicesData.length; i++) {
  const cloneSlideService = newServiceSlide.cloneNode(true)
  const title = cloneSlideService.querySelector('.service-card__title')
  title.textContent = servicesData[i].title

  servicesList.appendChild(cloneSlideService)
}

//Заполняем слайдер прайсом
for (let i = 0; i < pricesData.length; i++) {
  const cloneSlidePrice = newPriceSlide.cloneNode(true)
  const title = cloneSlidePrice.querySelector('.price-card__title')
  const price = cloneSlidePrice.querySelector('.price-card__price')
  const duration = cloneSlidePrice.querySelector('.price-card__duration')
  title.textContent = pricesData[i].title
  price.textContent = pricesData[i].price
  duration.textContent = pricesData[i].duration

  pricesList.appendChild(cloneSlidePrice)
}

// Инициализация слайдера для брендов
const initSwiper = function () {
  if (window.innerWidth < 768) {
    if (!swiperInstance) {
      swiperInstance = new Swiper('.brands__slider', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        freeMode: true,
        pagination: {
          el: '.brands__pagination',
          clickable: true,
          bulletClass: 'brands__bullet',
          bulletActiveClass: 'brands__bullet--active'
        },
        observer: true,
        observeParents: true
      })
    }
  } else {
    if (swiperInstance) {
      swiperInstance.destroy(true, true)
      swiperInstance = null
    }
  }
}

// Инициализация слайдер для видов техники
const initSwiperService = function () {
  if (window.innerWidth < 768) {
    if (!swiperInstanceService) {
      swiperInstanceService = new Swiper('.services__slider', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        freeMode: true,
        pagination: {
          el: '.services__pagination',
          clickable: true,
          bulletClass: 'services__bullet',
          bulletActiveClass: 'services__bullet--active'
        },
        observer: true,
        observeParents: true
      })
    }
  } else {
    if (swiperInstanceService) {
      swiperInstanceService.destroy(true, true)
      swiperInstanceService = null
    }
  }
}

// Инициализация слайдер для прайса
const initSwiperPrice = function () {
  if (window.innerWidth < 768) {
    if (!swiperInstancePrice) {
      swiperInstancePrice = new Swiper('.prices__slider', {
        modules: [Pagination],
        direction: 'horizontal',
        loop: true,
        slidesPerView: 'auto',
        freeMode: true,
        pagination: {
          el: '.prices__pagination',
          clickable: true,
          bulletClass: 'prices__bullet',
          bulletActiveClass: 'prices__bullet--active'
        },
        observer: true,
        observeParents: true
      })
    }
  } else {
    if (swiperInstancePrice) {
      swiperInstancePrice.destroy(true, true)
      swiperInstancePrice = null
    }
  }
}

// Инициализируем слайдер при загрузке и при изменении размера окна
function handleResize() {
  initSwiper()
  initSwiperService()
  initSwiperPrice()
}

handleResize()
window.addEventListener('resize', handleResize)

// Обработчик кнопки "Читать далее"
const expandButton = document.querySelector('.expand-button')
const paragraphHidden = document.querySelector('.about__paragraph--hidden')
const textHidden = paragraphHidden.querySelector('.about__hidden-text')

if (expandButton) {
  expandButton.addEventListener('click', function () {
    expandButton.classList.toggle('coup')
    paragraphHidden.classList.toggle('visually-hidden')
    paragraphHidden.classList.toggle('show-all')
    textHidden.classList.toggle('visually-hidden')

    if (paragraphHidden.classList.contains('show-all')) {
      expandButton.textContent = 'Скрыть'
    } else {
      expandButton.textContent = 'Читать далее'
    }
  })
}

// Обработчик кнопки "Показать все" для брендов
const expandButtonBrands = document.querySelector('.brands__expand-button')
const swiperBrands = document.querySelector('.brands__slider')

if (expandButtonBrands) {
  expandButtonBrands.addEventListener('click', function () {
    swiperBrands.classList.toggle('show-all')
    expandButtonBrands.classList.toggle('coup')

    if (swiperBrands.classList.contains('show-all')) {
      expandButtonBrands.textContent = 'Скрыть'
    } else {
      expandButtonBrands.textContent = 'Показать все'
    }
  })
}

// Обработчик кнопки "Показать все" для сервиса
const expandButtonServices = document.querySelector('.services__expand-button')
const swiperServices = document.querySelector('.services__slider')

if (expandButtonServices) {
  expandButtonServices.addEventListener('click', function () {
    swiperServices.classList.toggle('show-all')
    expandButtonServices.classList.toggle('coup')

    if (swiperServices.classList.contains('show-all')) {
      expandButtonServices.textContent = 'Скрыть'
    } else {
      expandButtonServices.textContent = 'Показать все'
    }
  })
}

//Меню Бургер
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.querySelector('.burger-menu')
  const openBtn = document.querySelector('.header__button--burger')
  const closeBtn = document.querySelector('.burger-menu__close-btn')
  // Открытие меню
  openBtn.addEventListener('click', function () {
    menu.classList.add('active')
  })

  // Закрытие меню
  menu.addEventListener('click', (e) => {
    if (e.target === menu) {
      menu.classList.remove('active')
    }
  })

  closeBtn.addEventListener('click', function () {
    menu.classList.remove('active')
  })
})

//Меню обратная связь
document.addEventListener('DOMContentLoaded', function () {
  const submenuFb = document.querySelector('.submenu-feedback')
  const openBtnFb = document.querySelector('.burger-menu__chat-btn')
  const closeBtnFb = document.querySelector('.submenu-feedback__close-btn')

  // Открытие меню
  openBtnFb.addEventListener('click', function () {
    submenuFb.classList.add('active')

    setTimeout(() => {
      submenuFb.querySelector('input[type="text"]').focus()
    }, 50)
  })

  // Закрытие меню
  submenuFb.addEventListener('click', (e) => {
    if (e.target === submenuFb) {
      submenuFb.classList.remove('active')
    }
  })

  closeBtnFb.addEventListener('click', function () {
    submenuFb.classList.remove('active')
  })
})

//Меню заказать звонок
document.addEventListener('DOMContentLoaded', function () {
  const submenuCt = document.querySelector('.submenu-contact')
  const openBtnCt = document.querySelector('.burger-menu__call-btn')
  const closeBtnCt = document.querySelector('.submenu-contact__close-btn')

  // Открытие меню
  openBtnCt.addEventListener('click', function () {
    submenuCt.classList.add('active')

    setTimeout(() => {
      submenuCt.querySelector('input[type="tel"]').focus()
    }, 50)
  })

  //Закрытие меню
  submenuCt.addEventListener('click', (e) => {
    if (e.target === submenuCt) {
      submenuCt.classList.remove('active')
    }
  })

  closeBtnCt.addEventListener('click', function () {
    submenuCt.classList.remove('active')
  })
})
