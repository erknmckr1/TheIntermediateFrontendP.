import React from 'react'
import  './component.css'
import img from '../covid-19.png'
function Navbar() {
  return (
    <div className='container-fluid navbar'>
        <div className='logo'>
          <img alt='covid19' src={img}/>
        </div>
        <span className='navRight'>Statistic</span>
    </div>
  )
}

export default Navbar