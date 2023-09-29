import React from 'react'
import style from './GridCard.module.css'

const GridCard = ({image, text}) => {
  return (
    <div className={style.wrapper}>
        <img src={image}></img>
        <p className={style.desc}>{text}</p>
    </div>
  )
}

export default GridCard