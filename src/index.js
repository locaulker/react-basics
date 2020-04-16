import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

function People() {
	const friends = [
		{firstName: "John", job: "Developer", age: "23", company: "Apple"},
		{firstName: "Bob", job: "Designer", age: "21", company: "Facebook"},
		{firstName: "Susy", job: "Artist", age: "26", company: "Google"},
	]

	return (
		<section>
			<Person person={friends[0]}>
				<div>
					<h1>Some Heading</h1>
					<p>Some info about me</p>
				</div>
			</Person>
			<Person person={friends[1]} />
			<Person person={friends[2]} />
		</section>
	)
}

const Person = (props) => {
	const {firstName, job, age, company} = props.person
	const {children} = props
	console.log(props)

	return (
		<article>
			<h1>{firstName}</h1>
			{children}
			<p>{job}</p>
			<p>{age}</p>
			<h3>{company}</h3>
			<hr />
		</article>
	)
}

ReactDOM.render(<People />, document.getElementById("root"))
