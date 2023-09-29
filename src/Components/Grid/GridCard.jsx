import React from 'react'
import style from './GridCard.module.css'

const GridCard = ({image, text}) => {
  return (
    <div className={style.wrapper}>
        <img className={style.img} src={image}></img>
        <p className={style.text}>{text}</p>
    </div>
  )
}

export default GridCard