import "./CartItem.css";
import {Link} from "react-router-dom";

const CartItem = ({item, quantityChangeHandler, removeHandler}) => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src={item.imageUrl}
                    alt={item.name}
                />
            </div>
            <Link to={`/product/${item.product}`} className="cartitem__name">
                <p>{item.name}</p>
            </Link>
            <p className="cartitem__price">${item.price}</p>
            <select className="cartitem__select" value={item.quantity} onChange={(event) => quantityChangeHandler(item.product, event.target.value)}>
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={`${item.product}_${x+1}`} value={x+1}>{x+1}</option>
                ))}
            </select>
            <button className="cartitem__deletebutton" onClick={() => removeHandler(item.product)}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default CartItem;
