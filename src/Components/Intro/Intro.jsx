import React from 'react'
import style from './Intro.module.css'


const Card=({title})=>{
    return(
    <div className={style.card}>
     <img src='../../Assets/Group 19.png'></img>
    </div>
    )
}

const Intro = () => {
  
  return (
    <div>
    <div className={style.wrapper}>
    <div className={style.intro}>Let’s Introduce Ourselves</div>
    <div className={style.line}></div>
    <div className={style.intro}>
        <p className={style.title}>Criminal Lawyer</p>
        <p className={style.para}>Amet minim mollit non deserunt ullamco est
sit aliqua dolor do amet sint. Velit officia consequatduis
enim velit mollit Exercitation.</p>
    </div>
    </div>
    <p className={style.choose}>Why choose us?</p>
    <div className={style.cardWrapper}>
    <Card/>
    <Card/>
    <Card/>
    </div>
    </div>
  )
}

export default Intro