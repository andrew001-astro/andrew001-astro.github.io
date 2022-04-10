;(() => {
  let isThemeDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  let icon = document.querySelector("link[rel='icon']")

  if (isThemeDark) {
    icon.setAttribute('href', 'img/mylogo-hover.png')
  } else {
    icon.setAttribute('href', 'img/mylogo-normal.png')
  }
})()
