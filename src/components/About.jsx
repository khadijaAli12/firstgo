function About() {
  return (
    <section id="about" className="py-5 mt-5">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="row">
          <div className="col-lg-4">
            <div className="text-center mb-4">
              <img 
                src="/src/assets/profile.jpg" 
                alt="Profile" 
                className="img-fluid rounded-circle" 
                style={{ width: '200px', height: '200px', objectFit: 'cover' }}
              />
            </div>
          </div>
          
          <div className="col-lg-8 pt-4 pt-lg-0">
            <h3>Software Engineer | Builder of Scalable Web Solutions</h3>
            <p className="fst-italic">
              Turning Complexity into Elegant Simplicity
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> 25 December 2004</li>
                  {/* <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> www.example.com</li> */}
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> +92 3274230793</li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong>Girls Hostels Of University Of Punjab</li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong>Bachelor</li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong>khadijaali5858@gmail.com</li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> Available</li>
                </ul>
              </div>
            </div>
            <p>
            Full-Stack Developer with a strong focus on Ruby on Rails and modern web technologies.
Skilled in building scalable apps using Rails, React, and PostgreSQL.
Passionate about clean code, rapid prototyping, and delivering real-world impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About