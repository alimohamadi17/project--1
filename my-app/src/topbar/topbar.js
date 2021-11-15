import React from 'react'
import './topbar.css'
import Image from '../Asset/1.JPG'

function Topbar() {
    return (
        <div className="top">
          <div className='topleft'>
              <i className="Icon fab fa-facebook-square"></i>
              <i className="Icon fab fa-twitter-square"></i>
              <i className="Icon fab fa-instagram"></i>    
          </div>
          
          <div className='topcenter'>
          <ul className="toplist">
            <li className="listItem">Home</li>  
            <li className="listItem">About ME</li>  
            <li className="listItem">Resume</li>  
            <li className="listItem">Call Me</li>  
            <li className="listItem">Login</li>  

          </ul>  
          
          </div> 
          <div className='topright'>

            <img className="one" src={Image}  alt="profiles"/>  
            <i className="SearchIcon fas fa-search">search</i>

          </div> 

        </div>
    )
}

export default Topbar
