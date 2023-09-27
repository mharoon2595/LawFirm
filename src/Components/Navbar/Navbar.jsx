import React from 'react'
import style from './Navbar.module.css'
import {ReactComponent as Logo} from '../../Assets/Group 10386.svg'

const Navbar = () => {
  return (
    <div className={style.navbar}>
        <Logo/>
        <div className={style.centerMenus}>
            <h4 className={style.menuHover}>Home</h4>
            <h4 className={style.menuHover}>Attorneys</h4>
            <h4 className={style.menuHover}>Practice areas</h4>
            <h4 className={style.menuHover}>About us</h4>
        </div>
        <div className={style.contact}>
            <h5>Contact Now</h5>
        </div>
    </div>
  )
}

export default Navbar