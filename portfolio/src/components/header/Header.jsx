import React from 'react'
import './header.css'
import HeaderSocial from './HeaderSocial'
import CTA from './CTA'
import me from './../../assets/ima.png'
function Header() {
  return (
    <header>
    <div className='info'>
      <h5>hello I'm</h5>
      <h1>agbor kelly</h1>
      <h5 className='text-light'>Software Engineer </h5>
      <CTA />
      <div className='my_image'>
        <HeaderSocial />
        <img src={me} alt='image' />
      </div>
      <a href='#contact' className='scroll__down'>Scroll down</a>
    </div>
    </header>
  )
} export default Header