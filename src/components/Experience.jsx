import React from 'react';

function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Senior Developer",
      company: "Tech Company",
      period: "2020 - Present",
      description: "Led development of core products, managed team of 5 junior developers, implemented CI/CD pipelines.",
      achievements: [
        "Reduced system downtime by 40%",
        "Introduced new architecture improving scalability",
        "Mentored 3 junior developers who were promoted"
      ]
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Digital Agency",
      period: "2018 - 2020",
      description: "Developed responsive websites and web applications for various clients using React, Node.js and MongoDB.",
      achievements: [
        "Delivered 15+ projects on time and within budget",
        "Improved page load time by 35% across client websites",
        "Implemented automated testing reducing bugs by 25%"
      ]
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "Startup Inc.",
      period: "2016 - 2018",
      description: "Assisted in frontend and backend development tasks using JavaScript, HTML5 and CSS3.",
      achievements: [
        "Contributed to the company's flagship product",
        "Developed internal tool saving 10 hours/week for the team",
        "Awarded employee of the month twice"
      ]
    }
  ];

  return (
    <section id="experience" className="py-5" style={{ backgroundColor: "#ffffff" }}>
     <div className="container">
        <div className="section-title">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item" data-aos="fade-up">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4 className="fw-bold" style={{ color: "#2980b9" }}>{exp.role}</h4>
                <span className="text-muted d-block mb-2">
                  {exp.company} | <strong>{exp.period}</strong>
                </span>
                <p style={{ color: "#2c3e50" }}>{exp.description}</p>
                <h6 className="fw-bold" style={{ color: "#2c3e50" }}>Key Achievements:</h6>
                <ul>
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} style={{ color: "#2c3e50" }}>{achievement}</li>
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

export default Experience;
