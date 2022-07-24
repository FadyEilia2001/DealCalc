import React from 'react'
import logo from '../assets/imgs/logo.png'


export default function Nav() {
  return (
    <nav>
        <div className='img-container'>
            <img className='logo' src={logo} alt="Logo" />
        </div>
        <h4 className='nav-title'>Rehab and new builds deal analyzer</h4>
    </nav>
  )
}
