import React from 'react'
import './about.css'
import Me from '../../assets/keli.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const about = () => {
  return (
<section id='about'>
<h5>
Get To Know
</h5>
<h2> 
About Me
</h2>
 <div className="container about__container">
 <div className="about__me"> 
 <div className="about__me-image"> 
 <img src={Me} alt="About Image" />
 </div>
 </div>


 <div className="about__content">
 <div className="about__cards">
 <article className="about__card">
 <FaAward className='about__icon'/>
<h5>
Experience
</h5>
<small>
4+ Years Working
</small>
 </article>
 <article className="about__card">
 <FiUsers className='about__icon'/>
<h5>
Clients
</h5>
<small>
200+ Worldwide
</small>
 </article>
 <article className="about__card">
 <VscFolderLibrary className='about__icon'/>
<h5>
Projects
</h5>
<small>
80+ completed
</small>
 </article>
</div>
<p>
I am AGBOR NKONGHO KELLY.I know i am in all aspects skillfull
</p>
<a href="#contact" className='btn btn-primary'>Let's Talk</a>
</div>
</div>
</section>
  )
}

export default about