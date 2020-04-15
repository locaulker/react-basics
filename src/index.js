import React from "react"
import ReactDOM from "react-dom"

function Books() {
	return (
		<section>
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	)
}

// Explicit return
const Book = () => {
	return (
		<article>
			<CoverImage />
			<Title />
			<Author />
		</article>
	)
}

// Implicit return
const CoverImage = () => (
	<img
		width="200"
		src="https://m.media-amazon.com/images/I/71N4oeWwYlL._AC_UY327_FMwebp_QL65_.jpg"
		alt="Wonky Donkey"
	/>
)

const Title = () => <h1>The Wonky Donkey</h1>
const Author = () => <p>by Craig Smith</p>

ReactDOM.render(<Books />, document.getElementById("root"))
