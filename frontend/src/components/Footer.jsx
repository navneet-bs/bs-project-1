function Footer() {
  return (
    <footer className='full-w footer column'>
      <div className="footer-row display-row justify-content-between gap-3">
        <div className="footer-col footer-col-1">
          <img src="logo.jpg" alt="" className="footer-logo" />
          <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias itaque eos sit quaerat tenetur assumenda.</p>
        </div>
        <div className="footer-col column footer-col-2">
          <h4>Imp Links</h4>
          <a href="#">LInk</a>
          <a href="#">LInk</a>
          <a href="#">LInk</a>
        </div>
        <div className="footer-col column footer-col-3">
          <h4>Quick Links</h4>
          <a href="#">LInk</a>
          <a href="#">LInk</a>
          <a href="#">LInk</a>
        </div>
        <div className="footer-col">
          <p className="copyright">All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer