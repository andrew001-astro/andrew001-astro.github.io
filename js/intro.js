;(() => {
  let introChildren = document.querySelectorAll('#intro .details .slide-fade')
  introChildren.forEach((element) => {
    element.classList.add('slide', 'fade')
  })

  introChildren.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('slide-up', 'fade-in')
    }, 200 * (index + 1))
  })
})()
