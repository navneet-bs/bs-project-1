import { useEffect, useState } from "react"

function Footer() {
  const [footerData, setFooterData] = useState(null)

  const fetchFooterData = async() => {
    fetch("http://localhost:1337/api/footer?populate=*")
    .then(res => res.json())
    .then(res => {
      setFooterData(res.data)
    })
  }

  useEffect(() => {
    fetchFooterData()
  }, [])

  return (
    <footer className='full-w footer column'>
      <div className="footer-row display-row justify-content-between gap-3">
        <div className="footer-col footer-col-1">
          <h2>{footerData ? footerData.brandName : "Brand Name"}</h2>
          <p className="footer-desc">
            {
              footerData ? footerData.brandDescription : "No Desc"
            }
          </p>
        </div>
        <div className="footer-col column footer-col-2">
          <h4>Imp Links</h4>
          {
            footerData ? 
            footerData.footerLink.map(link => 
              <a key={link.id} href={link.href}>{link.label}</a>
            ) :
            "No Footers"
          }
        </div>
        <div className="footer-col column footer-col-3">
          <h4>Quick Links</h4>
          {
            footerData ? 
            footerData.footerLink.map(link => 
              <a key={link.id} href={link.href}>{link.label}</a>
            ) :
            "No Footers"
          }
        </div>
      </div>
      <div className="footer-row">
        <div>
          <p className="copyright text-center">
          {
          footerData ? footerData.copyRightText : "All rights reserved."
          }
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer