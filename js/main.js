;(() => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 300)

  setTimeout(() => {
    document.querySelector('html').style.scrollBehavior = 'smooth'
  }, 500)

  let isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  let icon = document.querySelector("link[rel='icon']")

  if (isThemeDark) {
    if (window.location.pathname.split('/').includes('projects')) {
      icon.setAttribute('href', '../img/mylogo-hover.svg')
    } else {
      icon.setAttribute('href', 'img/mylogo-hover.svg')
    }
  } else {
    if (window.location.pathname.split('/').includes('projects')) {
      icon.setAttribute('href', '../img/mylogo-normal.svg')
    } else {
      icon.setAttribute('href', 'img/mylogo-normal.svg')
    }
  }

  setNavLogoUrl()
})()

function setClassToSlideFade(elements) {
  elements.forEach((element) => {
    element.classList.add('slide', 'fade')
  })
}

function initOnScrollMyImageFade() {
  if (screenWidth >= 768) {
    let meImage = document.querySelector('#intro .picture')

    let checkpoint = 300

    setOnScrollForMyImageFade(null, [meImage], (element) => {
      if (element.getBoundingClientRect().bottom > checkpoint) {
        element.style.opacity =
          (element.getBoundingClientRect().bottom - checkpoint) * 0.001
      } else {
        element.style.opacity = 0
      }

      if (window.pageYOffset <= 10) {
        element.style.opacity = 1
      }
    })
  }
}

document.querySelector('.fab-scroll-top').addEventListener('click', () => {
  window.scrollTo(0, 0)
})

function setNavLogoUrl() {
  let navLogoName = document.querySelector('nav .logo-name')
  navLogoName.setAttribute('href', window.location.origin)
  // if (window.location.pathname.split('/').includes('projects')) {
  //   navLogoName.setAttribute('href', '../')
  // } else {
  //   navLogoName.setAttribute('href', window.location.origin)
  // }
}
