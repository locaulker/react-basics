import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

function Books() {
	return (
		<section className="books">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

// Explicit return has the "return" keyword
const Book = () => {
	return (
		<article className="book">
			<CoverImage />
			<Title />
			<Author />
		</article>
	)
}

// Implicit returns
const CoverImage = () => (
	<img
		width="200"
		src="https://m.media-amazon.com/images/I/71N4oeWwYlL._AC_UY327_FMwebp_QL65_.jpg"
		alt="Wonky Donkey"
	/>
)

// Inline Style
const Title = () => (
	<h1
		style={{
			fontSize: '2rem',
			color: '#fca746',
			fontWeight: 300
		}}
	>
		The Wonky Donkey
	</h1>
)

// Inline Style using aa variable
const authorStyle = {
	letterSpacing: '10px',
	color: 'green',
	fontSize: '12px'
}
const Author = () => <p style={authorStyle}>by Craig Smith</p>

ReactDOM.render(<Books />, document.getElementById('root'))
