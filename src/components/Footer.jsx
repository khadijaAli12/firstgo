function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <p className="mb-0">© {new Date().getFullYear()} Khadija Ali . All rights reserved.</p>
            <p className="small">Designed with <i className="bi bi-heart-fill text-danger"></i> using React & Bootstrap</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
