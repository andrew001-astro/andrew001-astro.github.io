;(() => {
  let lettersContainer = document.querySelector('#lwt .row')
  let letters = Array.from(document.querySelectorAll('#lwt .row [class*=col]'))
  letters.forEach((elem) => {
    elem.classList.add('fade')
  })

  let order = [5, 15, 8, 3, 11, 2, 6, 12, 7, 4, 0, 13, 1, 10, 14, 9]

  setOnScrollForLetters(null, [lettersContainer], (element) => {
    order.forEach((index, counter) => {
      setTimeout(() => {
        letters[index].classList.add('fade-in')
      }, counter * 100)
    })
  })
})()
