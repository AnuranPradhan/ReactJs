
import './App.css'
import About from './Components/About';
import Header from './Components/Header'
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
function App() {
const name ="Anuran Pradhan";
const profession="Mern Stack Developer";
const projects=[
  {
    title:"project 1",
    description:"This is my first project",
    link:"#"
  },
    {
    title:"project 2",
    description:"This is my Second project",
    link:"#"
  },
    {
    title:"project 3",
    description:"This is my Third project",
    link:"#"
  }
]
  return (
    <div className="App">
      {/* Header Section */}
     <Header/>
      {/* About Section */}
     <About/>
      {/* Projects Section */}
      <Projects/>
        {/* Contact Section */}
       <Contact/>
         {/* Footer Section */}
         <Footer/>
    </div>
  )
}

export default App
