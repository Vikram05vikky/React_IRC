import '../Assets/Nav.css'
import { Link } from 'react-router-dom'
const Nav=()=>{
    return(
        <body className='ho'>
        <header>
            
            <h1> <a className="logo">Paws</a></h1>
            <div class="navigation">
                <a  class="info-btn">Home</a>
                <a  className="info-btn">About</a>
                <a  className="info-btn">Info</a>
                <a  className="info-btn">Contact</a>
                <a  className="info-btn"><Link to='/'> Logout</Link></a>
                
            </div>
        </header>
        </body>
    )
}

export default Nav;