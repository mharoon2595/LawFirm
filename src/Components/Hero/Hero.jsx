import React from 'react'
import {ReactComponent as HeroLawyer} from '../../Assets/LawyerHero.svg'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
       <div className={style.orange}> </div>
       <div className={style.heroImage}>
         <HeroLawyer/>
       </div>
    </div>
  )
}

export default Hero