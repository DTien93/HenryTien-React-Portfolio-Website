import '../toggle/toggle.css'
import Moon from '../../img/sun.png'
import Sun from '../../img/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: 'TOGGLE'})
    }
    return (
        <div className='toggle'>
            <img src={Sun} alt=""  className='toggle-icon'/>
            <img src={Moon} alt="" className='toggle-icon' />
            <div className="toggle-button" onClick={handleClick}></div>
        </div>
    )
}

export default Toggle
