import "./SideDrawer.css";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux";

const SideDrawer = ({show, click}) => {
    const sideDrawerClass = `sidedrawer ${show && "show"}`;

    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;

    const getCartCount = () => {
        return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
    }

    return (
        <div className={sideDrawerClass} onClick={click}>
            <ul className="sidedrawer__links">
                <li>
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="sidedrawer_cartbadge">{getCartCount()}</span>
                        </span>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        Shop
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default SideDrawer;
