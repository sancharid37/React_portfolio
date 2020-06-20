import React from 'react';
import logo from '../images/icon.png';
import './components.css';

function Header() {
  return (
   <div className='header'>
       <div className='logo'><img src={logo} className='logoicon'/></div>
        <div className='headerrightside'>
            <p>Home</p>
            <p className='comingdesble'>About</p>
            <p className='comingdesble'>Contact Me</p>
        </div>
   </div>
  );
}

export default Header;
