function Project(){
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
    return <section id='projects' className='projects-section'>
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
}
export default Project;