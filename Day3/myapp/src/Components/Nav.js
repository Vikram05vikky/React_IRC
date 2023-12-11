import '../Assets/Css/Nav.css';

const Nav=()=>{
    return(
        <header>
            <h1> <a href="#" class="logo">Decor Delight</a></h1>
            <div class="navigation">
                <a href="../Components/Home.js" class="info-btn">Home</a>
                <a href="#" class="info-btn">About</a>
                <a href="#" class="info-btn">Info</a>
                <a href="#" class="info-btn">Service</a>
                <a href="#" class="info-btn">Contact</a>

            </div>
        </header>
    )
}

export default Nav;