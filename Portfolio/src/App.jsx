
import './App.css'

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
     <header className="header">
      <h1>{name}</h1>
      <p>{profession}</p>
      <nav>
        <a href='#about'>About</a>
         <a href='#about'>Projects</a>
          <a href='#about'>Contact</a>
      </nav>
     </header>
      {/* About Section */}

      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>I am a {profession} with experience in building web applications using React, Node.js, and MongoDB. I love coding and learning new technologies.</p>

      </section>

      {/* Projects Section */}
      <section id='projects' className='projects-section'>
        <h2>My Projects</h2>
        <div className='projects-list'>
          {projects.map((project,index)=>(
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          ))}
        </div>
        </section>
        {/* Contact Section */}
        <section id='contact' className='contact-section'>
          <h2>Contact Me</h2>
          <p>if you would like to get in touch , feel free to email me at <a href='mailto:anuranpradhan002@gmail.com'>anuranpradhan002@gmail.com</a></p>
         </section>
         {/* Footer Section */}
          <footer className='footer'>
            <p>&copy; 2024 {name}. All rights reserved.</p>
            </footer>
    </div>
  )
}

export default App
