import './Header.css'
import React from 'react'

const Header = () => {
  return (
    <header className='header-bg'>
      <nav className='navbar-bg'>
        <a className='nav-link' href='#Features'>Çözüm ve Hizmetler</a>
        <a className='nav-link' href='#CTA'>Ürünler</a>
        <a className='nav-link' href='#About'>Teknolojiler</a>
        <a className='nav-link' href='#Collaborations'>İnsan Kaynakları</a>
        <a className='nav-link' href='#Contact'>Kurumsal</a>
        <button className='btn'>İletişim</button>
      </nav>
    </header>
  )
}

export default Header
