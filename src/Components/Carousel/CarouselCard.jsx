import React from 'react'
import style from './CarouselCard.module.css'

const CarouselCard = ({text, desc}) => {
    return(
        <div className={style.card}>
         <h1>{text}</h1>
         <h5>{desc}</h5>
        </div>
        )
}

export default CarouselCard