import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'
import './experience.css'

const experience = () => (
  <section id='experience'>
    <h5>The skills I  have</h5>
    <h2>My Experience</h2>

    <div className="container experience__container">
      <div className="experience__frontend">
         <h3>Frontend Development</h3>
        <div className="experience__content">
          <article className='experience details'>
            <BsPatchCheckFill className='experience__details-icon'/>
            <div><h4>HTML</h4></div>
            <small className='text-light'>Experienced</small>
          </article>
          <article className='experience details'>
          <BsPatchCheckFill className='experience__details-icon'/>
          <div><h4>CSS</h4></div>
          <small className='text-light'>Intermediate</small>
        </article>
      <article className='experience details'>
      <BsPatchCheckFill className='experience__details-icon'/>
      <div><h4>Booststrap</h4></div>
      <small className='text-light'>Experienced</small>
    </article>
    <article className='experience details'>
    <BsPatchCheckFill className='experience__details-icon'/>
    <div><h4>Tailwind</h4></div>
    <small className='text-light'>Experienced</small>
  </article>
  <article className='experience details'>
  <BsPatchCheckFill className='experience__details-icon'/>
 <div> <h4>React</h4></div>
  <small className='text-light'>Experienced</small>
</article>
          </div>
</div>

      
      {/*end of frontend*/}

      <div className="experience__backend">
       <h3>Backend Development</h3>
      <div className="experience__content">
        <article className='experience details'>
          <BsPatchCheckFill className='experience__details-icon' />
          <h4>Nodejs</h4>
          <small className='text-light'>Experienced</small>
        </article>
        <article className='experience details'>
        <BsPatchCheckFill className='experience__details-icon'/>
        <div><h4>MongoDB</h4></div>
        <small className='text-light'>Intermediate</small>
      </article>
    <article className='experience details'>
    <BsPatchCheckFill className='experience__details-icon' />
    <div><h4>PHP</h4></div>
    <small className='text-light'>Experienced</small>
  </article>
  <article className='experience details'>
  <BsPatchCheckFill className='experience__details-icon' />
  <div><h4>Mysql</h4></div>
  <small className='text-light'>basic</small>
</article>
<article className='experience details'>
<BsPatchCheckFill className='experience__details-icon' />
<div><h4>python</h4></div>
<small className='text-light'>Experienced</small>
</article>
</div>
        </div>


    </div>


  </section>
)

export default experience