import './post.css'
import images from './../Asset/gandom2.jpg'


function Post() {
    return (
        
        <div className='post'>
            
        <img src={images} className="postimg"/>   
        <div className="postinfo">
            <div className="postcats">
                <span className="postcats">Music</span>
                <span className="postcats">Life</span>
            </div>
            <span className="postTitle">lorem
            In publishing and graphic design, Lorem ipsum 
           
            </span>
            <p className="postDesc">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.
            </p>
            <hr/>
            <span className="postHours">1 hours ago</span>
            
        </div>
        </div>
        
    )
}

export default Post
