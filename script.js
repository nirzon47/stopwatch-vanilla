// DOM Elements
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const milliseconds = document.getElementById('milliseconds')

let startTime
let running = false
let time

const start = document.getElementById('start')
const stop = document.getElementById('stop')

// Event Listeners
start.addEventListener('click', () => {
	startStopwatch()
})

// Functions
const startStopwatch = () => {
	if (!running) {
		startTime = new Date().getTime()
		time = setInterval(() => {
			updateMilliseconds()
		}, 10)

		running = true
	} else {
		return
	}
}

const updateMilliseconds = () => {
	const currentTime = new Date().getTime()
	const elapsedTime = currentTime - startTime
	const updatedMilliseconds = elapsedTime % 1000

	milliseconds.textContent = updatedMilliseconds.toString().padStart(3, '000')

	if (elapsedTime >= 1000) {
		updateSeconds()
		startTime = currentTime
	}
}

const updateSeconds = () => {
	const secondsValue = parseInt(seconds.style.getPropertyValue('--value'))

	if (secondsValue < 59) {
		seconds.style.setProperty('--value', secondsValue + 1)
	} else {
		updateMinutes()
		seconds.style.setProperty('--value', 0)
	}
}

const updateMinutes = () => {
	const minutesValue = parseInt(minutes.style.getPropertyValue('--value'))

	if (minutesValue < 59) {
		minutes.style.setProperty('--value', minutesValue + 1)
	} else {
		updateHours()
		minutes.style.setProperty('--value', 0)
	}
}

const updateHours = () => {
	const hoursValue = parseInt(hours.style.getPropertyValue('--value'))

	if (hoursValue < 59) {
		hours.style.setProperty('--value', hoursValue + 1)
	} else {
		clearInterval(time)
		alert('Max time reached!')
	}
}
