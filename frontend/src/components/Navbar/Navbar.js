
import './Navbar.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ()=>{
    return(
        <nav className ='navbar'>
         {/* Logo*/}
         <div className='navbar-logo'>
             <h2>GO Shopping</h2>
         </div>
         {/*links*/}
            <ul className = 'navbar-link'>
                <li>
                    <Link to ="/cart">

                    </Link>
                </li>

            </ul>
         {/*hambuerger menu */}

        </nav>
    )
};

export default Navbar;