import React from 'react'
import  './component.css'

function Navbar() {
  return (
    <div className='container-fluid navbar'>
        <div className='logo'><img src="../covid-19.jpg" alt="covid-19" />
        </div>
        <span className='navRight'>Statistic</span>
    </div>
  )
}

export default Navbar