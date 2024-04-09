import React from 'react'
import './Footer.css';
import company from '../Constant img/companylogo.png'

const Footer = () => {
  return (
    <div>
  {/* Footer start*/}
  <div className="shadow-lg footer">
        <div className="d-flex justify-content-end align-items-center h-100">
          <p>@2024 BarifloLabs. All Right Reserved</p>
          <img className="footerLogo" src={company} alt="company logo"  />
        </div>
      </div>

       {/* Footer End*/}

    </div>
  )
}

export default Footer;