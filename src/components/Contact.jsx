import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or a service like EmailJS
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 5 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="bg-light py-5">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
        </div>

        <div className="row">
          <div className="col-lg-5 mb-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body">
                <h3 className="mb-4">Get In Touch</h3>
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-geo-alt text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5>Location</h5>
                    <p className="mb-0">123 Street, City, Country</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-envelope text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5>Email</h5>
                    <p className="mb-0">email@example.com</p>
                  </div>
                </div>
                
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
                    <i className="bi bi-phone text-white"></i>
                  </div>
                  <div className="ms-3">
                    <h5>Phone</h5>
                    <p className="mb-0">+123 456 7890</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <h5>Follow Me</h5>
                  <div className="d-flex gap-2 mt-3">
                    <a href="#" className="btn btn-outline-dark btn-sm rounded-circle">
                      <i className="bi bi-linkedin"></i>
                    </a>
                    <a href="#" className="btn btn-outline-dark btn-sm rounded-circle">
                      <i className="bi bi-github"></i>
                    </a>
                    <a href="#" className="btn btn-outline-dark btn-sm rounded-circle">
                      <i className="bi bi-twitter"></i>
                    </a>
                    <a href="#" className="btn btn-outline-dark btn-sm rounded-circle">
                      <i className="bi bi-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-7">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h3 className="mb-4">Send Message</h3>
                
                {formSubmitted && (
                  <div className="alert alert-success alert-dismissible fade show" role="alert">
                    Your message has been sent. Thank you!
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="name"
                          placeholder="Your Name" 
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="email"
                          placeholder="Your Email" 
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          name="subject"
                          placeholder="Subject" 
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-floating mb-3">
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          placeholder="Message" 
                          style={{ height: '150px' }}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact