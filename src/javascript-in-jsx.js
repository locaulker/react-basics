import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const btnText = 'Big Button'

function Person() {
	const btn = 'Search Button'
	const firstName = 'John'
	const lastName = 'Doe'

	return (
		<section>
			<button>{btnText}</button>
			<br />
			<button>{btn}</button>

			{/* ES5 : Concatenation */}
			<h2>{firstName + ' ' + lastName}</h2>

			{/* ES6 : Template Literals */}
			<h3>{`${firstName} ${lastName}`}</h3>

			{/* Math Expression */}
			<h3>{12 + 23}</h3>

			<p>Info: Cras mattis consectetur purus sit amet fermentum.</p>
		</section>
	)
}

ReactDOM.render(<Person />, document.getElementById('root'))
