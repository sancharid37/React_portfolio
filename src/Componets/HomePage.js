import React from 'react';
import './components.css';
import Header from './Header.js';
import own from '../images/slef.jpg';
import insta from '../images/instagram-fill.png';
import fb from '../images/facebook-circle-fill.png';
import linkedin from '../images/linkedin-box-fill.png';
import github from '../images/github-fill.png';
import twitter from '../images/twitter-fill.png';







function HomePage() {
  return (
   <div className='homepage'>
       <Header/>
       <div className='homepageinnersec'>
            <div className='homepagecontentare'>
                <p className='homepageheading'>Hi, my name is Sanchari, I am a Designer/ UI DEVELOPER</p>
                <p className='homepagesubtxt'>I create beautiful functional websites. </p>
                <div className='connctwithme'>
                <a target='_' 
                href='https://www.instagram.com/unchilledbeer/?fbclid=IwAR1zrVAWprpb2PPtzC8TV4sBEEofwkn_XkjkHZY8dtybut3Prx7HI3bY-iM'>
                <img src={insta}/>
                </a>
                <a target='_' href='https://www.facebook.com/unchilledbeer/'>
                <img src={fb}/>
                </a>
                <a target='_' 
                href='https://www.linkedin.com/in/sanchari-dasgupta-76881790?fbclid=IwAR0p3OlIdxVruKcoz4qmPjVEP1ZoplxvhVO7VHQXEr4GVjXr-wp_--8zdH0'>
                <img src={linkedin}/>
                </a>
                <a  target='_' href='https://github.com/sancharid37?fbclid=IwAR1ETK7BXbKt5n5xC530NrLdJijFEtOb2tDInZInwaqynb1-6Ccz3FmQHW8'>
                <img src={github}/>
                </a>
                <a target='_'  href='https://twitter.com/unchilledbeer?fbclid=IwAR30MQBYKLpSzfIl-wva50Je_jXbzXtuXntQtENNVVoHMRwUmTR8v3DmDIA'>
                <img src={twitter}/>
                </a>
                </div>
                <p className='commingsoontxt'>I am working on it ....</p>
            </div>
            <div className='homepagerightside'>
                <img src={own}/>
            </div>

       </div>
   </div>
  );
}

export default HomePage;
