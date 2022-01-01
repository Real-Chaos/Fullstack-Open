import React from 'react'



const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Content = (props) => {
  return (
    <>
      {props.parts.map(part => <p key={part.name}>{part.name} {part.exercises}</p>)}
    </>
  )
}
const Footer = (props) => {
  let sum = 0;
  props.exercises.forEach(part => sum += part.exercises)
  return (
    <>
      <p>Number of exercises {sum} </p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  class Person {
    constructor(name, age) {
      this.name = name
      this.age = age
    }

    greet() {
      console.log('Hello, my name is ' + this.name)
    }
  }
  const adam = new Person('Adam', 34)
  adam.greet()

  const janja = new Person('Janja Garnbret', 22)
  janja.greet()

  return (
    <div>
     <Header course={course.name} />
      <Content parts={course.parts} />
      <Footer exercises={course.parts}  />
    </div>
  )
}

export default App