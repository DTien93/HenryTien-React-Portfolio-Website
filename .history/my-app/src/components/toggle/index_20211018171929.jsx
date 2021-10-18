import React from 'react'
import '../toggle/toggle.css'
import Moon from '../../img/sun.png'
import Sun from '../../img/moon.png'

const Toggle = () => {
    return (
        <div className='toggle'>
            <img src={Sun} alt="" />
            <img src={Moon} alt="" />
            <div className="toggle-button"></div>
        </div>
    )
}

export default Toggle
