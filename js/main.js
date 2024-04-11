(function() {

// burger

  document.addEventListener('click', burgerInit)

  function burgerInit(e){
    const burgerMenu = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    
    if(!burgerMenu && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return

    document.body.classList.toggle('body--opened-menu')
  }

// gift modal

  const modalBtn = document.querySelector('.modal__close')

  document.addEventListener('click', openModal)
  document.addEventListener('keydown', modalClose)
  modalBtn.addEventListener('click', modalClose)

  function openModal(e){
    if(!e.target.classList.contains('about__button')) return
    e.preventDefault()
    if(e.target.classList.contains('about__button')){
      document.body.classList.add('body--opened-modal')
    }
  }

  function modalClose(e){
    const classChecking = document.body.classList.contains('body--opened-modal')
    if(e.target.closest('.modal__close') && classChecking || classChecking && e.code === 'Escape'){
    document.body.classList.remove('body--opened-modal')
    }
  }

// tabs

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', toggleTab)

function toggleTab(e){

  const tabControl = e.target.closest('.tab-controls__link')

  e.preventDefault()

  if(!tabControl) return
  if(e.target.closest('.tab-controls__link--focus')) return

  const tabContentID = tabControl.getAttribute('href')
  const tabContent = document.querySelector(tabContentID)
  const focusContent = document.querySelector('.tab-content--show')
  const focusControl = document.querySelector('.tab-controls__link--focus')

  focusContent.classList.remove('tab-content--show')
  tabContent.classList.add('tab-content--show')

  focusControl.classList.remove('tab-controls__link--focus')
  tabControl.classList.add('tab-controls__link--focus')
}

// accordion

const accordionLists = document.querySelectorAll('.accordion-list')

accordionLists.forEach(el =>{

  el.addEventListener('click', (e) => {
    
    const accordionList = e.currentTarget
    const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
    const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

    const accordionControl = e.target.closest('.accordion-list__control')
    if(!accordionControl) return
    e.preventDefault()
    const accordionItem = accordionControl.parentElement;
    const accordionContent = accordionControl.nextElementSibling;

    if(accordionOpenedItem && accordionItem != accordionOpenedItem) {
      accordionOpenedItem.classList.remove('accordion-list__item--opened')
      accordionOpenedContent.style.maxHeight = null
    }
    accordionItem.classList.toggle('accordion-list__item--opened')
    
    if(accordionItem.classList.contains('accordion-list__item--opened')) {
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
    } else {
      accordionContent.style.maxHeight = null;
    }
  })
})

//gallery swiper

const gallerySwiper = new Swiper('.gallery__slider', {

  spaceBetween: 15,
  slidesPerView: 1.2,

  pagination: {
    el: '.gallery__pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__next',
    prevEl: '.gallery__prev',
  },

  breakpoints: {
    451: {
      slidesPerView: 2,
    },
    601: {
      slidesPerView: 3,
    },
    801:{
      spaceBetween: 32,
    },
    1101: {
      slidesPerView: 4,
    }
  }

});

//testimonials swiper

const testimonialsSwiper = new Swiper('.testimonials__slider', {

  spaceBetween: 0,
  slidesPerView: 1,
  centeredSlides: true,

  navigation: {
    nextEl: '.testimonials__next',
    prevEl: '.testimonials__prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true,
  },

  breakpoints: {
    901: {
      slidesPerView: 1.5,
    },
    1201: {
      slidesPerView: 2.1,
    }
  }

});

//phone mask

const telInputs = document.querySelectorAll('input[type="tel"]')
    const im = new Inputmask('+7 (999) 999-99-99')
    im.mask(telInputs)

})()
