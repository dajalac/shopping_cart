import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
    return (
        <div className='cart-item'>
            <div className='cart-item-image'>
                <img src={item.imageUrl}
                    alt={item.name} />
            </div>
            <Link to={`/product/${item.product}`} className='cart-item-name'>
                <p> {item.name}</p>
            </Link>
            <p className='cart-item-price'>${item.price}</p>

            <select
                value={item.qty}
                onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
                className="cartItem__select"
            >
                {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                        {x + 1}
                    </option>
                ))}
            </select>

            <button className='cart-item-deletebtn' onClick={() => removeHandler(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
};

export default CartItem;