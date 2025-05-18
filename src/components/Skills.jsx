import React from 'react';

function Skills() {
  const technicalSkills = [
    { name: "HTML", level: 99 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 89 },
    { name: "Node.js", level: 75 },
    { name: "MongoDB", level: 70 },
    { name: "SQL", level: 80 },
    { name: "Git", level: 85 }
  ];

  const softSkills = [
    { name: "Project Management", level: 85 },
    { name: "Team Leadership", level: 80 },
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 85 },
    { name: "Time Management", level: 82 }
  ];

  return (
    <section id="skills" className="bg-light py-5">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
        </div>

        <div className="row">
          {/* Technical Skills */}
          <div className="col-lg-6">
            <h3 className="mb-4">Technical Skills</h3>
            {technicalSkills.map((skill, index) => (
              <div className="mb-3" key={index}>
                <div className="d-flex justify-content-between">
                  <h6>{skill.name}</h6>
                  <h6>{skill.level}%</h6>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-primary" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }} 
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="col-lg-6">
            <h3 className="mb-4">Soft Skills</h3>
            {softSkills.map((skill, index) => (
              <div className="mb-3" key={index}>
                <div className="d-flex justify-content-between">
                  <h6>{skill.name}</h6>
                  <h6>{skill.level}%</h6>
                </div>
                <div className="progress">
                  <div 
                    className="progress-bar bg-success" 
                    role="progressbar" 
                    style={{ width: `${skill.level}%` }} 
                    aria-valuenow={skill.level} 
                    aria-valuemin="0" 
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
