const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.exercise}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].part} exercise={props.parts[0].exercise}/>
      <Part part={props.parts[1].part} exercise={props.parts[1].exercise}/>
      <Part part={props.parts[2].part} exercise={props.parts[2].exercise}/>
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises {props.total_exercises}
      </p>
    </>
  )

}


const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {part: 'Fundamentals of React', exercise: 10},
    {part: 'Using props to pass data', exercise: 7},
    {part: 'State of a component', exercise: 14}
  ]

  let total_exercises = 0

  for (let i = 0; i < parts.length; i++) {
    total_exercises += parts[i].exercise;
  }

  console.log('Total exercises: ', total_exercises)

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total total_exercises={total_exercises} />
    </div>
  )
}

export default App