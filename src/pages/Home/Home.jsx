import './Home.css'
import React from 'react'

const Home = () => {
  return (
    <div className='home-bg'>
      <div className='home-content-div'>
        <h1 className='title'>Bilgi Teknolojilerinde<br />23 Yıllık Tecrübe</h1>
        <p className='content'>Müşterilerimizin yüksek kalite seviyelerini koruyabilmeleri için farklı sektörlerde tecrübe kazanmış uzman kadrolarımızla Proje Yönetimi, İş Analizi ve Test Yönetimi hizmetleri sunmaktayız.</p>
        <div className='get-started-div'>
            <input type='text' placeholder='Mail bültenimize kayıt ol' className='input-mail'/>
            <button className='btn'>Kayıt Ol</button>
        </div>
      </div>
    </div>
  )
}

export default Home
