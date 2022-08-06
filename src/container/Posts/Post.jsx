import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import postTest from '../../assets/posts/post-1.jpg'

import './Post.css'
import 'swiper/css';
import 'swiper/css/pagination'


const Post = () => {
  return (
    <div className='post'>
      <Swiper className='slider' spaceBetween={5} pagination={true} modules={[Pagination]}>
        <SwiperSlide className='slide'>
          <img src={postTest} alt="" className='post-img' />
        </SwiperSlide>
        <SwiperSlide className='slide'>
          <img src={postTest} alt="" className='post-img' />
        </SwiperSlide>
      </Swiper>
      <h4 className='post-title'>Malasiya</h4>
      <div className='post-distance'>85 miles away</div>
      <div className='post-date'>Sep 25-30</div>
      <span className='post-price'>$524 night</span>
    </div>
  )
}

export default Post