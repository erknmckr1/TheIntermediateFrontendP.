import React from 'react'
import "./footer.css"


function Footer() {
   const date = new Date()
   const today = date.toLocaleDateString()
   const currentTime= date.toLocaleTimeString()
   console.log(today)
  return (
    <footer className='container-fluid'>
    <div className='row footer_row'>
        <div className='col-md-4 footer_title'>
            <h1>Note App</h1>
        </div>
        <div className='col-md-4'>
            <ul className='list-group'>
                <li className='list-item'><a href="https://www.linkedin.com/in/erkan-mustafa-cak%C4%B1r/" target="blank">Linkedin</a></li>
                <li className='list-item'><a href="https://github.com/erknmckr1" target="blank">GitHub</a></li>
            </ul>
        </div>
        <div className='col-md-4 time_Div'>{`${today} - ${currentTime}`}</div>
    </div>
    </footer>
  )
}

export default Footer