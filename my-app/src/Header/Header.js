import "./Header.css"
import images from '../Asset/asemon.jpg'

function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="span1">
                 Personal WebSite
                </span>
                <span className="span2">
                    Ali Mohamadi
                </span>
                    
            </div>
            <img className="headerImage" src={images}/>
        </div>
    )
}

export default Header
