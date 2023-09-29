import React from 'react'
import style from'./Team.module.css'
import Individuals from './Individuals'

const Team = () => {
  return (
    <div className={style.wrapper}>
         <p className={style.choose}>Our team</p>
    <div className={style.grid}>
        <Individuals/>
        <Individuals/>
        <Individuals/>
        <Individuals/>
        <Individuals/>
        <Individuals/>
    </div>
    </div>
  )
}

export default Team