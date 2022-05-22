import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    images: IMG1,
    title: 'Remote World - Website using Wordpress',
    github: 'https://remoteworld.pl/',
    demo: 'https://dribbble.com/'
  },
  {
    id: 2,
    images: IMG2,
    title: 'Curenncy Crypto Dashboard & Financial Visualization',
    github: 'https://remoteworld.pl/',
    demo: 'https://dribbble.com/'
  },
  {
    id: 3,
    images: IMG3,
    title: 'Figma dashboard UI kot for data design web apps',
    github: 'https://remoteworld.pl/',
    demo: 'https://dribbble.com/'
  },
  {
    id: 4,
    images: IMG4,
    title: 'SCSS Dashboard UI kit for data design web apps',
    github: 'https://remoteworld.pl/',
    demo: 'https://dribbble.com/'
  },
  {
    id: 5,
    images: IMG5,
    title: 'Maintening tasks and trackingo progress',
    github: 'https://remoteworld.pl/',
    demo: 'https://dribbble.com/'
  },
  {
    id: 6,
    images: IMG6,
    title: 'Cgarts templates & infographics in Figma',
    github: 'https://remoteworld.pl/',
    demo: 'https://dribbble.com/'
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My React Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, images, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={images} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          }) 
        }
      </div>
    </section>
  )
}

export default Portfolio