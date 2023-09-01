import { Link } from "react-router-dom";
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                <p>Sister's Thai Kitchen Logo</p>
            </div>
            <div className="navbarOptions">
                <Link exact to="/"><p>Home</p></Link>
                <Link exact to="/story"><p>Our Story</p></Link>
                <Link exact to="/menu"><p>Menu</p></Link>
                <Link exact to="/contact"><p>Hours and Location</p></Link>
            </div>
            <button>Order Online</button>
        </div>
    )
};

export default Navbar;