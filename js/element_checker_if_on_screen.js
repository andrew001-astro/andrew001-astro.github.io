let elements
let elements2
let onScrollCallBack
let onScrollCallBack2

const setOnScroll = (container, elems, callback) => {
  elements2 = elems
  onScrollCallBack2 = callback
  // container.addEventListener('scroll', () => {
  window.addEventListener('scroll', containerOnScrollHandler)
}

const setOnScrollForMyImageFade = (container, elems, callback) => {
  elements = elems
  onScrollCallBack = callback
  // container.addEventListener('scroll', () => {
  window.addEventListener('scroll', containerOnScrollHandlerForMyImageFade)
}

const checkIfElementIsOnScreen = (element) => {
  let elementPosition = element.getBoundingClientRect()

  // console.log(elementPosition)

  // checking for partial visibility
  if (
    elementPosition.top < window.innerHeight - elementPosition.height / 4 &&
    elementPosition.bottom >= 0
  ) {
    return true
  }

  // // checking whether fully visible
  // if (
  //   elementPosition.top >= 0 &&
  //   elementPosition.bottom <= window.innerHeight
  // ) {
  //   return true
  // }
}

const containerOnScrollHandler = () => {
  let scrollY = window.scrollY
  // console.log(scrollY)
  elements2.forEach((element) => {
    if (checkIfElementIsOnScreen(element)) {
      onScrollCallBack2(element)
    }
  })
}

const containerOnScrollHandlerForMyImageFade = () => {
  let scrollY = window.scrollY
  // console.log(scrollY)
  elements.forEach((element) => {
    if (checkIfElementIsOnScreen(element)) {
      onScrollCallBack(element)
    }
  })
}

const removeOnScrollEventMyImageFade = () => {
  window.removeEventListener('scroll', containerOnScrollHandlerForMyImageFade)
}

let letters
let callbackForLetters

const setOnScrollForLetters = (container, elemLetters, callback) => {
  letters = elemLetters
  callbackForLetters = callback
  // container.addEventListener('scroll', () => {
  window.addEventListener('scroll', containerOnScrollHandlerforLetters)
}

const containerOnScrollHandlerforLetters = () => {
  let scrollY = window.scrollY
  // console.log(scrollY)
  letters.forEach((element) => {
    if (checkIfElementIsOnScreenFull(element)) {
      callbackForLetters(element)
    }
  })
}

const checkIfElementIsOnScreenFull = (element) => {
  let elementPosition = element.getBoundingClientRect()
  // checking whether fully visible
  if (
    elementPosition.top >= 0 &&
    elementPosition.bottom <= window.innerHeight
  ) {
    return true
  }
}
