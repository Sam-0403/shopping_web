import "./CartScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//Components
import CartItem from "../components/CartItem";

//Actions
import {addToCart, removeFromCart} from "../redux/actions/cartActions";

const CartScreen = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const quantityChangeHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
      return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0);
  }

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price*item.quantity) + price, 0)
  }

  return (
    <div className="cartscreen">
      <h2>Shopping Cart</h2>
      <div className="cartscreen__container">
        <div className="cartscreen__left">
          {cartItems.length === 0 ? (
            <div>
              Your cart is empty!
              <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => <CartItem item={item} quantityChangeHandler={quantityChangeHandler} removeHandler={removeHandler} key={item.product}/>)
          )}
        </div>
        <div className="cartscreen__right">
          <div className="cartscreen__info">
            <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal().toFixed(2)}</p>
          </div>
          <div className="cartscreen__button">
            <button>Proceed To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
