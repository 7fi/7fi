const modeToggle = document.getElementById('modeToggle')
const heroImg = document.getElementById('heroImg')
let lightMode = false
let pics = ['/images/Deep1.png', '/images/Factory1.png', '/images/Jailbird1.png', '/images/Ravine1.png', '/images/Spacesim1.png']

function load() {
  let myBool = decodeURIComponent(document.cookie).split('=')[1] === 'true'
  console.log('Lightmode is wrong:', myBool != lightMode)
  if (myBool != lightMode) {
    switchMode()
  }
  let random = Math.round(Math.random() * (pics.length - 1))
  console.log(random)
  heroImg.style.backgroundImage = 'url(' + pics[random] + ')'
  console.log(heroImg.style.backgroundImage)
}

// Toggle between light and dark mode
modeToggle.addEventListener('click', () => {
  switchMode()
})

function switchMode() {
  if (!lightMode) {
    modeToggle.children[0].classList.replace('gg-sun', 'gg-moon')
    document.documentElement.style.setProperty('--dark', '#eaeaea')
    document.documentElement.style.setProperty('--medDark', '#fff')
    document.documentElement.style.setProperty('--med', '#cfcfcf')
    document.documentElement.style.setProperty('--medLight', '#d1d1d1')
    document.documentElement.style.setProperty('--light', '#b3b3b3')
    document.documentElement.style.setProperty('--veryLight', '#222')
    document.documentElement.style.setProperty('--highlight', '#000')
    document.documentElement.style.setProperty('--highlight1', '#ddd')
  } else {
    modeToggle.children[0].classList.replace('gg-moon', 'gg-sun')
    document.documentElement.style.setProperty('--dark', '#333')
    document.documentElement.style.setProperty('--medDark', '#444')
    document.documentElement.style.setProperty('--med', '#555')
    document.documentElement.style.setProperty('--medLight', '#666')
    document.documentElement.style.setProperty('--light', '#777')
    document.documentElement.style.setProperty('--veryLight', '#ccc')
    document.documentElement.style.setProperty('--highlight', '#fff')
    document.documentElement.style.setProperty('--highlight1', '#222')
  }
  lightMode = !lightMode
  document.cookie = 'lightMode=' + lightMode + '; path=/'
  console.log(lightMode)
}
