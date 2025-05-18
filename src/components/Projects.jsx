function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project1",
      demo: "https://project1-demo.com"
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "Analytics dashboard for social media management with real-time data visualization.",
      technologies: ["React", "D3.js", "Firebase", "Material UI"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project2",
      demo: "https://project2-demo.com"
    },
    {
      id: 3,
      title: "Task Management App",
      description: "Mobile-responsive task management application with collaborative features and notifications.",
      technologies: ["React", "Redux", "Express", "MongoDB"],
      image: "https://via.placeholder.com/600x400",
      github: "https://github.com/yourusername/project3",
      demo: "https://project3-demo.com"
    }
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <div className="section-title">
          <h2>Projects</h2>
        </div>

        <div className="row">
          {projects.map(project => (
            <div className="col-md-4 mb-4" key={project.id}>
              <div className="card h-100 border-0 shadow-sm">
                <img src={project.image} className="card-img-top" alt={project.title} />
                <div className="card-body">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <div className="mb-3">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="badge bg-secondary me-1 mb-1">{tech}</span>
                    ))}
                  </div>
                  <div className="d-flex justify-content-between">
                    <a href={project.github} className="btn btn-outline-dark" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-github me-2"></i>GitHub
                    </a>
                    <a href={project.demo} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                      <i className="bi bi-eye me-2"></i>Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
