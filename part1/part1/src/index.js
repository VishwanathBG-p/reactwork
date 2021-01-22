import React from 'react';
import ReactDOM from 'react-dom';

//display the helloworld using react
/*const App=()=>(
  <div>
    <h1>Hello World</h1>
  </div>
)
ReactDOM.render(

    <App />,
  document.getElementById('root')
);*/

//example1
/*
const App=()=>{
  const now =new Date()
  const a=10
  const b=20

  return(
    <div>
      <p>Hello world</p>
      <p>total:{a+b} </p>
      <p> Todays Date is {now.toString()}</p>
    </div>

  )

}*/
//example2 in JSX
/*
const App=()=>{
  const name="vishwa1";
  const age=58;

  return(
    //there Must be a parent tag
    <>
    <p>Hello </p>
    <p>name:{name} age:{age}</p>
    <p>name:"hello" age:"22"</p>
    </>

  )
}
*/
const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

const App=()=>{
  const corse='half Stack application deelopment'
  const part1='Fundamentals Of React'
  const exercises1=10
  const part2="using the props to pass the data"
  const exercises2=7
  const part3="State of component"
  const exercises3=14

  
}

ReactDOM.render(<App/>,document.getElementById('root'))



