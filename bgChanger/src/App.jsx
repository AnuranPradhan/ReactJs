import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [color,setcolor]=useState("white")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"red"}} onClick={()=>setcolor("red")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"olive"}} onClick={()=>setcolor("olive")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"blue"}} onClick={()=>setcolor("blue")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"pink"}} onClick={()=>setcolor("pink")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"black"}} onClick={()=>setcolor("black")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"violet"}} onClick={()=>setcolor("violet")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"green"}} onClick={()=>setcolor("green")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"yellow"}} onClick={()=>setcolor("yellow")}> Red</button>
        <button className="outline-none px-4 py-1 rounded-full text-black  shadow-lg" style={{backgroundColor:"skyblue"}} onClick={()=>setcolor("skyblue")}> Red</button>
        </div>
      </div>
    </>
  )
}

export default App
