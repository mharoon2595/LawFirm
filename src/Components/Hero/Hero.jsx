import React from 'react'
import {ReactComponent as HeroLawyer} from '../../Assets/LawyerHero.svg'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.hero}>
       <div className={style.textContainer}>

        <div className={style.text1}>
          <p>You don't have to </p>
          <p><strong>Fight them Alone.</strong></p>
          </div>

          <div className={style.text2}>
            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
          </div>
        
          <div className={style.inputContainer}>
          <input placeholder="Enter your email address" className={style.text3}>
          </input>
          <button className={style.text4} type="button">Let's talk</button>
          </div>

       </div>
       <div className={style.heroImage}>
         <HeroLawyer/>
       </div>
    </div>
  )
}

export default Hero