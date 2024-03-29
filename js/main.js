(function() {
  document.addEventListener('click', burgerInit)

  function burgerInit(e){
    const burgerMenu = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    
    if(!burgerMenu && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return

    document.body.classList.toggle('body--opened-menu')
  }

  const modalBtn = document.querySelector('.modal__close')

  document.addEventListener('click', openModal)
  document.addEventListener('keydown', modalClose)
  modalBtn.addEventListener('click', modalClose)

  function openModal(e){
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
})()
