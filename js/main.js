(function() {
  document.addEventListener('click', burgerInit)
  function burgerInit(e){
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')

    if(!burgerIcon && !burgerNavLink) return

    if(document.documentElement.clientWidth > 900) return

    if(burgerIcon){
      e.preventDefault()
    }

    if(!document.body.classList.contains('body--menu-active')) {
      document.body.classList.add('body--menu-active')
    } else {
      document.body.classList.remove('body--menu-active')
    }

  }
})()
