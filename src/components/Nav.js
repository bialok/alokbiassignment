import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div className='header'>
        <img src='https://binaryinformatics.co/assets/binary-icon%20(1).svg'
        alt='' className='bi-icon'
        />
        <div className='header-text'>
            <div className='header-para'>
                <p className='para-talk'>Talk to an Expert Call Toll Free</p>
                <p className='para-tollfree'>+1509-619-7072</p>
            </div>
            <button className='header-button'>TRY IT FREE</button>
        </div>
      
    </div>
  )
}

export default Nav;
