import { useContext, useEffect, useState } from "react"
import { BackendURLContext } from "../../main"

function Footer() {
  const [footerData, setFooterData] = useState(null)
  const {backend_url} = useContext(BackendURLContext)

  const fetchFooterData = async() => {
    fetch(`${backend_url}/api/footer?populate=*`)
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
          <h2 className="gradient-text">{footerData ? footerData.brandName : "Brand Name"}</h2>
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
        <div className="footer-col column footer-col-4">
          <h4>Social Links</h4>
          <div className="display-row gap-2">
          {
            footerData ? 
            footerData.socialLink.map(link => 
              <a key={link.id} href={link.socialLink}><img src={`/icon/${link.socialName.toLowerCase()}.svg`} alt={link.socialName} /></a>
            ) :
            "No Footers"
          }
          </div>
        </div>
      </div>
      <div className="footer-row">
        <div>
          <p className="copyright text-center mt-3">
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