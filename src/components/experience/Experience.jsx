import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className='container experience_container'>
        <div className='experience__frontend'>
            <h3>Frontend Developer</h3>
            <div className='experience_content'>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>HTML</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>CSS</h4>
                  <small className='text-light'>Intermediate</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>JavaScript</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>Bootstrap</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>React</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>Angular</h4>
                  <small className='text-light'>Experienced</small>
                </article>
            </div>
        </div>
        <div className='experience_backend'>
        <h3>Backend Development</h3>
            <div className='experience_content'>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>Node JS</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>MongoDB</h4>
                  <small className='text-light'>Intermediate</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>PHP</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>Python</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>MySQL</h4>
                  <small className='text-light'>Experienced</small>
                </article>
                <article className='experience_detalis'>
                  <BsPatchCheckFill />
                  <h4>Express.js</h4>
                  <small className='text-light'>Experienced</small>
                </article>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Experience