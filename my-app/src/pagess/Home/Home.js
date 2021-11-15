import  "./Home.css"
import Posts from "../../post/posts"
import Sidebar from "../../sidebar/sidebar"
import Header from '../../Header/Header'

function Home() {
    return (
        <>
          <Header/>
        <div className="home">
            <Posts/>
            <Sidebar/>
        </div>
        </>
    )
}

export default Home
