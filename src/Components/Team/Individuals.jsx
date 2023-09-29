import React from 'react'
import style from './Individuals.module.css'
import image from '../../Assets/guy1.png'

const Individuals = () => {
  return (
    <div className={style.box}>
        <div className={style.img}>
      <img src={image}></img>
      </div>
      <div >
        <h4>Daniel Defo</h4>
        <p>360 cases</p>
      </div>
    </div>
  )
}

export default Individuals