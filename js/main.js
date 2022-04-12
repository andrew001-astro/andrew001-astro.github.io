;(() => {
  setTimeout(() => {
    window.scrollTo(0, 0)
  }, 300)

  let isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  let icon = document.querySelector("link[rel='icon']")

  if (isThemeDark) {
    if (window.location.pathname.split('/').includes('projects')) {
      icon.setAttribute('href', '../img/mylogo-hover.png')
    } else {
      icon.setAttribute('href', 'img/mylogo-hover.png')
    }
  } else {
    if (window.location.pathname.split('/').includes('projects')) {
      icon.setAttribute('href', '../img/mylogo-normal.png')
    } else {
      icon.setAttribute('href', 'img/mylogo-normal.png')
    }
  }
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
