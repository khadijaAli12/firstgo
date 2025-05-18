import React from 'react';

function Education() {
  const education = [
    {
      id: 1,
      degree: "Master of Computer Science",
      institution: "University Name",
      period: "2014 - 2016",
      description: "Specialized in Software Engineering with focus on distributed systems. Graduated with honors.",
      achievements: ["Dean's List", "Research Publication", "Academic Scholarship"]
    },
    {
      id: 2,
      degree: "Bachelor of Computer Science",
      institution: "University Name",
      period: "2010 - 2014",
      description: "Foundation in computer science principles, algorithms, and software development.",
      achievements: ["First Class Honors", "Final Year Project Award", "Student Representative"]
    }
  ];

  return (
    <section id="education" className="py-5" style={{ backgroundColor: "#2c3e50" }}>
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
        </div>
        <div className="timeline">
          {education.map(edu => (
            <div key={edu.id} className="timeline-item" data-aos="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="fw-bold">{edu.degree}</h4>
                <span className="fw-bold" style={{ color: "white" }}>
                  {edu.institution} | <strong>{edu.period}</strong>
                </span>
                <p style={{ color: "white" }}>{edu.description}</p>
                <h6 className="fw-bold" style={{ color: "white" }}>Achievements:</h6>
                <ul>
                  {edu.achievements.map((achievement, index) => (
                    <li key={index} style={{ color: "white" }}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
