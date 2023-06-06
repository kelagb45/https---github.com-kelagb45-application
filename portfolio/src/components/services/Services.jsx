import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'

export default function Sevices() {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h5>Services</h5>
    <div className="container services__container">
    <article className="service">
    <div className="service__head">
    <h3>UI/UX Design</h3>
    </div>
    <ul className='service__list'>
    <li>
    <BiCheck className='service__list-icon' />
    <p> ui/ux principles</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> ui/ux essential vocabulary</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> ui/ux  design with sketch app</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> PLUTTER</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> FIGMA</p>
    </li>
    </ul>
    </article>
    {/*end of ui/ux*/}

    <article className="service">
    <div className="service__head">
    <h3>Web Development</h3>
    </div>
    <ul className='service__list'>
    <li>
    <BiCheck className='service__list-icon' />
    <p> web development principles</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> web development principles</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> web development essential vocabulary</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> web development design with sketch app</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> HTML AND CSS</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> JAVA SCRIPT</p>
    </li>
    </ul>
    </article>
    {/*end of web development*/}
    <article className="service">
    <div className="service__head">
    <h3>CONTENT CREATION</h3>
    </div>
    <ul className='service__list'>
    <li>
    <BiCheck className='service__list-icon' />
    <p> AIR RESERVATION SYSTEM</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p> LIBRARY SYSTEM</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p>BANK SYSTEM</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p>WEBSITES FOR MEDICAL FACILITIES</p>
    </li>
    <li>
    <BiCheck className='service__list-icon' />
    <p>MUSIC APP</p>
    </li>
    </ul>
    </article>
    {/*end of content creation*/}
    </div>
    </section>
  )
}