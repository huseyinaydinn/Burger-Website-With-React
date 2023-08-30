import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../styles/Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="social-media">
        <FacebookIcon/>
        <InstagramIcon/>
        <WhatsAppIcon/>
        </div>
        <p>Tüm hakkları saklıdır || 2023 </p>
    </div>
  )
}

export default Footer