import React from 'react'
import categories from './Categories'
import Head from './Head'
import Filter from '../../container/Filter/Filter';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './Header.css'

const Header = () => {
  return (
    <>
      <Head />
      <header className='header d-flex justify-center align-center'>
        <nav className='nav container d-flex align-center'>
          <ul className='nav-list d-flex'>
            <Swiper
              modules={[Navigation]}
              spaceBetween={45}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
            >
              {
                categories.map(cat => {
                  return (
                    <SwiperSlide  className='nav-li d-flex f-col align-center justify-center txt-center'>
                      <img src={cat.image} alt="Somthing went wrong !!!" />
                      <h1>{cat.title}</h1>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </ul>
          <Filter />
        </nav>
      </header>
    </>
  )
}

export default Header