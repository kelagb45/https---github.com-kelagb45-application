import React, { useEffect, useState} from 'react'
import axios from 'axios'

import './portfolio.css'
import IMG1 from '../../assets/piv.webp'
import IMG2 from '../../assets/pik.webp'
import IMG3 from '../../assets/pivdn.webp'
import IMG4 from '../../assets/pivg.webp'
import IMG5 from '../../assets/port.webp'
import IMG6 from '../../assets/pg.webp'



const data = [
  {
    id: 1,
    image: IMG1,
    title:'Digital clothing',
    github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
    demo:'https://dribbble.com/tags/webdesign'

  },

   {
    id: 2,
    image: IMG2,
    title:'future savings',
    github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
    demo:"https://dribbble.com/tags/webdesign"

  } ,
  {
    id: 3,
    image: IMG3,
    title:'Design system',
    github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
    demo:"https://dribbble.com/tags/webdesign"

  },
   {
    id: 4,
    image: IMG4,
    title:'look beyond limits',
    github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
    demo:"https://dribbble.com/tags/webdesign"

  } ,
  {
    id: 1,
    image: IMG5,
    title:'Digital art guide',
    github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
    demo: "https://dribbble.com/tags/webdesign"

  },
   
  {
    id: 1,
    image: IMG6,
    title:'perfomance pltform',
    github: 'https://github.com/kelagb45/kelli/tree/master/portfolio',
    demo:"https://dribbble.com/tags/webdesign"

  },

]


const portfolio = () => {
  return (
    <section id='portfolio'>
    <h5>My Recent work</h5>
    <h2>Portfolio</h2>


    <div className="container portfolio__container">
    {
      data.map(({id, image, title, github, demo}) => {
return(
    <article  key={id} className='portfolio__item'>
    <div className='portfolio__item-image'>
    <img src={image} alt={title}/>
    </div>
    <h3>{title}</h3>
    <div className="portfolio__item-cta">
    <a href={github} className='btn'>Github</a>
    <a href={demo} className='btn btn-primary' target='_blank'>live demo</a>
</div>
    </article>
)
})
    }
</div>
</section>
 )
}
export default portfolio