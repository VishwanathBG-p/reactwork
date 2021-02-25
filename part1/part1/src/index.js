

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
//using props
/*
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
*/
/*
const App=()=>{
  const course='half Stack application deelopment'
  const part1='Fundamentals Of React'
  const exercises1=10
  const part2="using the props to pass the data"
  const exercises2=7
  const part3="State of component"
  const exercises3=14

  return(
    <div>
      <h1>{course}</h1>
      <p>
        {part1}{exercises1}
      </p>
      <p>
        {part2}{exercises2}
      </p>
      <p>
        {part3}{exercises3}
      </p>
      <p>Number of exercises{exercises1+exercises2+exercises3}</p>
    </div>
  )

  
}
*/
/*
const Hello=(props)=>{
  const {name,age}=props

  const bornYer=()=> new Date().getFullYear() -age

  
  return(
    <div>
      <p>
        Hello {name} you are {age}
      </p>
      <p>
        your bronyear {bornYer()}
      </p>
    </div>
  )
}

const App=()=>{
  
 
  return(
    <div>
      <Hello name={'petere'}  age={24}/>
      
    </div>
  )
}

ReactDOM.render(<App/>,document.getElementById('root'))

*/


import React from 'react';
import ReactDOM from 'react-dom';

const App=( props)=>{
  const {counter} = props
    return(
        <>
        <h1>Hello</h1>
        <div>{counter}</div>
        </>
    )
}

let counter=1

const refres=()=>{
ReactDOM.render(<App counter={counter}/>,document.getElementById('counter'))
}
setInterval(()=>{
refres()
counter+=1

},1000)

