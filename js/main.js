const pass = document.querySelector('#password')
const p = document.querySelector('.container__passinfo')
const letters = /[a-z]/i
const highletters = /[a-z]/
const numbers = /[0-9]/
const special = /[!@#$%^&*()]/
const minValue = 8

// PASSWORD CHECK
const handleMsg = () => {
	if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(highletters) &&
		pass.value.match(numbers) &&
		pass.value.match(special)
	) {
		p.textContent = 'Twoje hasło jest wręcz idealne!'
		p.style.color = 'green'
	} else if (
		pass.value.length > minValue &&
		pass.value.match(letters) &&
		pass.value.match(highletters) &&
		pass.value.match(numbers)
	) {
		p.textContent = 'Twoje hasło jest całkiem ok'
		p.style.color = 'orange'
	} else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(highletters)) {
		p.textContent = 'Twoje hasło jest dosyć słabe...'
		p.style.color = 'tomato'
	} else {
		p.textContent = 'Twoje hasło jest baardzo słabe :('
		p.style.color = 'red'
	}
}

const checkPass = () => {
	if (pass.value.length === 0) {
		p.textContent = 'Nie podałeś hasła'
		p.style.color = 'rgb(177, 101, 101)'
	} else {
		handleMsg()
	}
}

pass.addEventListener('keyup', checkPass)

// DARK MODE
const btn = document.querySelector('.mode')
const body = document.querySelector('body')

const changeMode = () => {
	if (body.dataset.mode === 'dark') {
		body.dataset.mode = 'light'
	} else {
		body.dataset.mode = 'dark'
	}
}

btn.addEventListener('click', changeMode)
