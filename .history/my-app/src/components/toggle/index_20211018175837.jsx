import React from 'react'
import '../toggle/toggle.css'
import Moon from '../../img/sun.png'
import Sun from '../../img/moon.png'

const Toggle = () => {
    const theme = useContext(ThemeContext)
    return (
        <div className='toggle'>
            <img src={Sun} alt=""  className='toggle-icon'/>
            <img src={Moon} alt="" className='toggle-icon' />
            <div className="toggle-button"></div>
        </div>
    )
}

export default Toggle
