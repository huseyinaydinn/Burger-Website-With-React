import React from 'react'
import BannerImage from '../assets/banner.png'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className="contactContainer">
      <div className="bannerContainer">
        <img src={BannerImage} alt="" />
      </div>

      <div className="formWrapper">
        <form className="contactForm">
          <h1>Bizimle İletişime Geçin</h1>

          <label>Ad Soyad</label>
          <input placeholder="Lütfen adınızı soyadınızı giriniz..." />

          <label>Email</label>
          <input placeholder="Lütfen email giriniz..." />

          <label>Mesajınız</label>
          <textarea placeholder="Lütfen mesajınızı giriniz..." rows={5}/>

          <button className="contactBtn">Gönder</button>
        </form>
      </div>
    </div>
  )
}

export default Contact