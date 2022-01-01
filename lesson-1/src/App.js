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
      {props.parts.map(part => <p key={part.name}>{part.name} {part.exercise}</p>)}
    </>
  )
}
const Footer = (props) => {
  let sum = 0;
  props.exercises.forEach(exercise => sum += exercise)
  return (
    <>
      <p>Number of exercises {sum} </p>
    </>
  )
}

const App = () => {
  const course = 'Half stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'state of component'
  const exercises3 = 14

  return (
    <div>
     <Header course={course} />
      <Content parts={[{name: part1, exercise: exercises1}, {name: part2, exercise: exercises2}, {name: part3, exercise: exercises3}]} />
      <Footer exercises={[exercises1, exercises2, exercises3]}  />
    </div>
  )
}

export default App