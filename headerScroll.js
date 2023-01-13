export function headerScroll () {
    const navbar = document.querySelector('.navbar')
  
    if (navbar) {
      window.addEventListener('scroll', function () {
        if (window.scrollY >= 50) {
          navbar.classList.add('scroll-header')
        } else {
          navbar.classList.remove('scroll-header')
        }
      })
    }
  }