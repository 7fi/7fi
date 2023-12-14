const dayNum = document.getElementById('dayNum')
const hourNum = document.getElementById('hourNum')
const minNum = document.getElementById('minNum')
const secNum = document.getElementById('secNum')
const perNum = document.getElementById('percentNum')

const countdown = (date) => {
  // const countDate = new Date('November 22, 2023 13:45:00').getTime()
  // const startDate = new Date('August 22, 2023 8:20:00').getTime()
  const countDate = new Date('December 22, 2023 14:30:00').getTime()
  const startDate = new Date('November 26, 2023 8:45:00').getTime()
  const now = new Date().getTime()
  const gap = countDate - now
  const soFar = now - startDate
  const percent = Math.round((1 - gap / (countDate - startDate)) * 10000)
  console.log(percent)
  // console.log(document.getElementById('progressBar'))
  document.getElementById('progressBar').style.width = percent / 100 + '%'

  const second = 1000
  const minute = second * 60
  const hour = minute * 60
  const day = hour * 24

  const textDay = Math.floor(gap / day)
  const textHour = Math.floor((gap % day) / hour)
  const textMinute = Math.floor((gap % hour) / minute)
  const textSecond = Math.floor((gap % minute) / second)

  // return {day: textDay, h}

  dayNum.innerText = textDay
  hourNum.innerText = textHour
  minNum.innerText = textMinute
  secNum.innerText = textSecond
  perNum.innerText = percent / 100 + '%'

  document.title = ('0' + textDay).slice(-2) + ':' + ('0' + textHour).slice(-2) + ':' + ('0' + textMinute).slice(-2) + ':' + ('0' + textSecond).slice(-2)
}

setInterval(countdown, 1000)
