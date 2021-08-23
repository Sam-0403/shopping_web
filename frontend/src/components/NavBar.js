import "./NavBar.css";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const NavBar = ({click}) => {

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
    }

    return (
        <nav className="navbar">
            {/* logo */}
            <div className="navbar__logo">
                <h2>MERN Shopping Cart</h2>
            </div>
            {/* links */}
            <ul className="navbar__links">
                <li>
                    <Link to="/cart" className="cart__link">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="cartlogo__badge">{getCartCount()}</span>
                        </span>
                        
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {/* Icon */}
                        Shop
                    </Link>
                </li>
            </ul>
            {/* hamburger menu */}
            <div className="hamburger__menu" onClick={click}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>
    )
}
export default NavBar;
