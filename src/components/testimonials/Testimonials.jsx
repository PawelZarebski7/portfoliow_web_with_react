import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import './testimonials.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

const data = [
  {
    id: 1,
    img: AVTR1,
    name: 'Lisa Ann',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam deserunt neque quia ad rem nesciunt architecto, at sit eos, ullam similique nobis magnam itaque ut reprehenderit ex obcaecati doloremque omnis?'
  },
  {
    id: 2,
    img: AVTR2,
    name: 'Henryk Chain',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam deserunt neque quia ad rem nesciunt architecto, at sit eos, ullam similique nobis magnam itaque ut reprehenderit ex obcaecati doloremque omnis?'
  },
  {
    id: 3,
    img: AVTR3,
    name: 'Tommy Gun',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam deserunt neque quia ad rem nesciunt architecto, at sit eos, ullam similique nobis magnam itaque ut reprehenderit ex obcaecati doloremque omnis?'
  },
  {
    id: 4,
    img: AVTR4,
    name: 'Jan Kowalski',
    desc: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam deserunt neque quia ad rem nesciunt architecto, at sit eos, ullam similique nobis magnam itaque ut reprehenderit ex obcaecati doloremque omnis?'
  }

]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({id, img, name, desc}) => {
           return(
            <SwiperSlide key={id} className="testimonial">
            <div className="client__avatar">
              <img src={img} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
               {desc}
              </small>
          </SwiperSlide>
           )
          })
        }
      </Swiper>
      
    </section>

    
  )
}

export default Testimonials