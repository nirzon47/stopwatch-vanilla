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
const reset = document.getElementById('reset')

// Event Listeners
start.addEventListener('click', (event) => {
	event.stopPropagation()

	startStopwatch()
})

stop.addEventListener('click', (event) => {
	event.stopPropagation()

	stopStopwatch()
})

// Functions
const startStopwatch = () => {
	if (running) {
		return
	}

	startTime = startTime || new Date().getTime()
	time = setInterval(() => {
		updateTime()
	}, 10)

	running = true
}

const stopStopwatch = () => {
	if (running) {
		running = false
		clearInterval(time)
	}
}

const updateTime = () => {
	const elapsed = Date.now() - startTime
	const updatedHours = Math.floor(elapsed / 3600000)
	const updatedMinutes = Math.floor((elapsed % 3600000) / 60000)
	const updatedSeconds = Math.floor((elapsed % 60000) / 1000)
	const updatedMilliseconds = elapsed % 1000

	milliseconds.textContent = updatedMilliseconds.toString().padStart(3, '000')
	seconds.style.setProperty('--value', updatedSeconds)
	minutes.style.setProperty('--value', updatedMinutes)
	hours.style.setProperty('--value', updatedHours)
}
