import MyButton from './Components/MyButton'
import './App.css'

function nameFunction(name){
  return <h1>Hello,{name}</h1>;
}
function Greeting(isMorning){
  if(isMorning){
    return <h1>Good Morning</h1>
  }else{
    return <h1>Good Night</h1>
  }
}
function App() {
  const now = new Date();
  const isMorning =now.getHours()<12;

const isLoggedIn = true;
const element = <h1>{isLoggedIn?"Welcome Back":"Please Log on"}</h1>
const message =["1","2"];

return (
  <>
  {element}
  {message.length>0 && <p>You Have {message.length} message </p>}
  {nameFunction("Ravi")}
  {Greeting(isMorning)}
  <MyButton/>
  </>
)
}

export default App
