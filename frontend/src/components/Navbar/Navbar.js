
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({OnClickBtn }) => {
    return (
        <nav className='navbar'>
            {/* Logo*/}
            <div className='navbar-logo'>
                <h2 Link to>GO Shopping</h2>
            </div>
            {/*links*/}
            <ul className='navbar-link'>
                <li>
                    <Link to="/cart" className='nav-cart-link'>
                        <i className='fas fa-shopping-cart'></i>
                        <span>
                            Cart
                           <span className='nav-cart-badge'> 0</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
            {/*hambuerger menu */}
            <div className='hamburger-menu' onClick={OnClickBtn}>
                <div></div>
                <div></div>
                <div></div>
            </div>


        </nav>
    )
};

export default Navbar;