// DOM Elements
const hours = document.getElementById('hours')
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const milliseconds = document.getElementById('milliseconds')

let startTime
let running = false
let elapsed = 0
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

reset.addEventListener('click', (event) => {
	event.stopPropagation()

	resetStopwatch()
})

// Functions

/**
 * Starts the stopwatch if it is not already running.
 *
 * @return {undefined} No return value.
 */
const startStopwatch = () => {
	if (running) {
		return
	}

	startTime = Date.now() - elapsed
	time = setInterval(() => {
		updateTime()
	}, 10)

	running = true
}

/**
 * Stops the stopwatch if it is currently running.
 *
 * @returns {undefined} This function does not return a value.
 */
const stopStopwatch = () => {
	if (running) {
		elapsed = Date.now() - startTime
		running = false
		clearInterval(time)
	}
}

/**
 * Resets the stopwatch by setting the elapsed time to 0, stopping the stopwatch,
 * clearing the interval, and resetting the fields.
 *
 * @return {type} description of return value
 */
const resetStopwatch = () => {
	elapsed = 0
	running = false
	clearInterval(time)
	resetFields()
}

/**
 * Updates the time displayed on the page based on the elapsed time since the start of the timer.
 *
 * @return {None} None - This function does not return any value.
 */
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

/**
 * Resets the fields of the timer display.
 *
 * @param {none}
 * @return {none}
 */
const resetFields = () => {
	milliseconds.textContent = '000'
	seconds.style.setProperty('--value', 0)
	minutes.style.setProperty('--value', 0)
	hours.style.setProperty('--value', 0)
}
