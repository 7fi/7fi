// const dayNum = document.getElementById('dayNum')
// const hourNum = document.getElementById('hourNum')
// const minNum = document.getElementById('minNum')
// const secNum = document.getElementById('secNum')
// const perNum = document.getElementById('percentNum')
const content = document.getElementById('content')
const countdowns = document.getElementById('countdowns')

let titleSet = false

const countdown = (end, start) => {
  const holder = document.createElement('div')
  holder.classList.add('countdown')

  const progressBar = document.createElement('div')
  progressBar.id = 'progressBar'

  const numberHolder = document.createElement('div')
  numberHolder.classList.add('numbers')

  const dayHolder = document.createElement('div')
  dayHolder.classList.add('textContainer')
  const dayNum = document.createElement('h2')
  dayNum.id = 'dayNum'
  const dayText = document.createElement('h3')
  dayText.textContent = 'Days'
  dayHolder.appendChild(dayNum)
  dayHolder.appendChild(dayText)

  const hourHolder = document.createElement('div')
  hourHolder.classList.add('textContainer')
  const hourNum = document.createElement('h2')
  hourNum.id = 'hourNum'
  const hourText = document.createElement('h3')
  hourText.textContent = 'Hours'
  hourHolder.appendChild(hourNum)
  hourHolder.appendChild(hourText)

  const minHolder = document.createElement('div')
  minHolder.classList.add('textContainer')
  const minNum = document.createElement('h2')
  minNum.id = 'minNum'
  const minText = document.createElement('h3')
  minText.textContent = 'Minutes'
  minHolder.appendChild(minNum)
  minHolder.appendChild(minText)

  const secHolder = document.createElement('div')
  secHolder.classList.add('textContainer')
  const secNum = document.createElement('h2')
  secNum.id = 'secNum'
  const secText = document.createElement('h3')
  secText.textContent = 'Seconds'
  secHolder.appendChild(secNum)
  secHolder.appendChild(secText)

  const percNum = document.createElement('h3')
  percNum.id = 'percentNum'

  numberHolder.appendChild(dayHolder)
  numberHolder.appendChild(hourHolder)
  numberHolder.appendChild(minHolder)
  numberHolder.appendChild(secHolder)

  holder.appendChild(numberHolder)
  holder.appendChild(percNum)
  holder.appendChild(progressBar)

  countdowns.appendChild(holder)

  // const countDate = new Date('November 22, 2023 13:45:00').getTime()
  // const startDate = new Date('August 22, 2023 8:20:00').getTime()
  // const countDate = new Date('December 22, 2023 13:30:00').getTime()
  // const startDate = new Date('November 26, 2023 8:45:00').getTime()
  // const countDate = new Date('February 16, 2024 8:00:00').getTime()
  // const startDate = new Date('January 7, 2024 8:15:00').getTime()
  // const countDate = new Date('March 30, 2024 12:00:00').getTime()
  // const startDate = new Date('February 19, 2024 11:30').getTime()
  const startDate = start
  const countDate = end
  const now = new Date().getTime()
  const gap = countDate - now
  const soFar = now - startDate
  const percent = Math.round((1 - gap / (countDate - startDate)) * 10000)
  // console.log(percent)
  // console.log(document.getElementById('progressBar'))
  progressBar.style.width = percent / 100 + '%'

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
  percNum.innerText = percent / 100 + '%'
  if (!titleSet) {
    document.title = ('0' + textDay).slice(-2) + ':' + ('0' + textHour).slice(-2) + ':' + ('0' + textMinute).slice(-2) + ':' + ('0' + textSecond).slice(-2)
    titleSet = true
  }
}

const updateCountdown = () => {
  while (countdowns.firstChild) {
    countdowns.removeChild(countdowns.firstChild)
  }
  titleSet = false

  countdown(new Date('May 24, 2024 12:00:00').getTime(), new Date('March 22, 2024 1:45').getTime())
  countdown(new Date('June 11, 2024 12:00:00').getTime(), new Date('August 22, 2023 08:20').getTime())
}

setInterval(updateCountdown, 1000)
