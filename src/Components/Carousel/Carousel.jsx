import React from 'react'
import style from './Carousel.module.css'
import CarouselLeftNav from './CarouselNav/CarouselLeft';
import CarouselRightNav from './CarouselNav/CarouselRight';
import { Swiper} from 'swiper/react'
import { SwiperSlide, useSwiper } from 'swiper/react'
import {Navigation} from 'swiper/modules';
import 'swiper/css';
import CarouselCard from './CarouselCard';
import { useEffect } from 'react';


const Controls = ({data}) =>{
      
    const swiper=useSwiper();
  
    useEffect(()=>{
     if(swiper){
      // console.log(swiper)
      swiper.slideTo(0,null);
     }
    },[data, swiper])
  
    return (<></>)
  
  }

const Carousel = () => {
    const cardData = [
        { title: 'Card 1', description: 'Description for Card 1' },
        { title: 'Card 2', description: 'Description for Card 2' },
        { title: 'Card 3', description: 'Description for Card 3' },
        { title: 'Card 4', description: 'Description for Card 4' },
        { title: 'Card 5', description: 'Description for Card 5' },
        { title: 'Card 6', description: 'Description for Card 6' },
        { title: 'Card 7', description: 'Description for Card 7' },
        { title: 'Card 8', description: 'Description for Card 8' },
      ];


  return (
    <div className={style.wrapper}>
        
            <div className={style.choose}>
               <p>What says our</p>
               <p>happy clients</p>
            </div>
     
        <Swiper
    modules={[Navigation]}
    spaceBetween='40px'
    slidesPerView={3}
    allowTouchMove
    style={{padding:'40px'}}
     >
      
      <Controls data={cardData}/>
      <CarouselLeftNav />
      <CarouselRightNav />

      
      {cardData.map((items)=>(
       
       <SwiperSlide style={{paddingTop:'200px'}}><CarouselCard text={items.title} desc={items.description}/></SwiperSlide >
      
       ))}
      </Swiper>
    </div>
  )
}

export default Carousel