import React from 'react'
import '../toggle/toggle.css'
import Moon from '../../img/sun.png'
import Son from '../../img/moon.png'
const Toggle = () => {
    return (
        <div className='toggle'>
            <img src={Sun} alt="" />
            <img src={Moon} alt="" />
        </div>
    )
}

export default Toggle
