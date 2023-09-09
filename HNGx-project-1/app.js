const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
const d = new Date()
const today = days[d.getDay()]
const currentUTCTime = Date.now()


document.querySelector('[data-testid="currentDayOfTheWeek"]').innerHTML += today

document.querySelector('[data-testid="currentUTCTime"]').innerHTML += currentUTCTime
