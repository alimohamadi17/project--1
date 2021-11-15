import './sidebar.css'
import Image from './../Asset/gandom.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
           <div className='sidebarItem'>
             <span className="sidebarTitle"> ABOUT ME</span> 
             
                <img src={Image} className="two"/>
                <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
            </div> 
            <div className='sidebarItem'>
             <span className="sidebarTitle"> CATEGORY</span> 
             <ul className="listItems">
                 <li  className="sidebarListItem">MY MUSIC</li>
                 <li className="sidebarListItem">MY FAVORITE</li>
                 <li className="sidebarListItem">CATEGORY</li>
                 <li className="sidebarListItem">BOOK</li>
                 <li className="sidebarListItem">ADDRESS</li>
             </ul>
             </div>
             <div className='sidebarItem'>
             <span className="sidebarTitle">FOLLOW US</span> 
             <div className='topleft'>
                <i className="Icon fab fa-facebook-square"></i>
                <i className="Icon fab fa-twitter-square"></i>
                <i className="Icon fab fa-instagram"></i>    
              </div>
            </div>
        </div>
    )
}

export default Sidebar
