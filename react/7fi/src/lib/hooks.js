export function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem('theme', theme)
  console.log('Theme set to', theme)
}

export function checkTheme() {
  const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null
  if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme)
  } else {
    localStorage.setItem('theme', 'light')
    checkTheme()
  }
}
