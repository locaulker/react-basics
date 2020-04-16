import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// ES5: parameters & arguments
// function sayName(name) {
// 	console.log(name)
// }
// sayName('John')
// sayName('Bob')

// PARENT COMPONENT:
// passes data (attributes/parameters)
function People() {
	
	const friends = [
		{firstName:'John', job:'Developer', age:'23', company:'Apple'},
		{firstName:'Bob', job:'Designer', age:'21', company:'Facebook'},
		{firstName:'Susy', job:'Artist', age:'26', company:'Google'},
		
	]

	return (
		<section>
			<Person person={friends[0]} />
			<Person person={friends[1]} />
			<Person person={friends[2]} />
		</section>
	)
}

// CHILD COMPONENT:
// receives data as a 'collection of attributes' in an object
// the object is received as argument of the function
// the arguments are normally called "props"

// const person = {
// 	name: "John",
// 	age: 26
// }
// const {name} = person
// console.log(name);


// const showPerson = ({name,age}) => console.log(name, age);
// showPerson(person)

const Person = ({person: {firstName, job, age, company }}) => {
	// console.log(name)

	// Destructuring
	// const {firstName,job,age,company} = props.person

	return (
		<article>
			<h1>{firstName}</h1>
			<p>{job}</p>
			<p>{age}</p>
			<h3>{company}</h3>
			<hr />
		</article>
	)
}

ReactDOM.render(<People />, document.getElementById('root'))
