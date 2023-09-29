import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react';
import  RightArrow from '../../../Assets/Group 41.png'
import style from './CarouselRight.module.css'

const CarouselRightNav = () => {
    const swiper=useSwiper();
    const [isEnd, setIsEnd] = useState(false);
    const [repeat, setRepeat] = useState()

    useEffect(()=>{
  
      if(swiper){

        swiper.on("sliderChange",function(){
            setIsEnd(swiper.isEnd);
            console.log("event fired")
        }
        )
        return () => {
          swiper.off('sliderChange'); // Unbind the event
        };

      }
    }, [swiper])

    useEffect(()=>{

    console.log('isEnd---->', isEnd);
    },[repeat])

  
    const slideNext = () => {

        
        swiper.slideNext();
        swiper.on('sliderChange', function () {
          setIsEnd(swiper.isEnd);
          
        }
        )
        setRepeat(swiper.isEnd)
    };



  return (
    <div className={style.positionRight} >
        <img src={RightArrow} alt="Left Arrow" style={{ cursor: 'pointer' }}onClick={slideNext} />
    </div>
  )

}

export default CarouselRightNav