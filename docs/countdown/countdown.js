const dayNum = document.getElementById('dayNum')
const hourNum = document.getElementById('hourNum')
const minNum = document.getElementById('minNum')
const secNum = document.getElementById('secNum')

const countdown = () => {
  const countDate = new Date('November 23, 2023 8:00:00').getTime()
  const now = new Date().getTime()
  const gap = countDate - now

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)

  dayNum.innerText = textDay
  hourNum.innerText = textHour
  minNum.innerText = textMinute
  secNum.innerText = textSecond

  document.title = ('0' + textDay).slice(-2) + ':' + ('0' + textHour).slice(-2) + ':' + ('0' + textMinute).slice(-2) + ':' + ('0' + textSecond).slice(-2)
}

setInterval(countdown, 1000)
