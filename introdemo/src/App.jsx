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
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exercise={props.parts[2].exercises} />
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
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  }


  let total_exercises = 0

  for (let i = 0; i < course.parts.length; i++) {
    total_exercises += course.parts[i].exercises;
  }

  console.log('Total exercises: ', total_exercises)

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total_exercises={total_exercises} />
    </div>
  )
}

export default App