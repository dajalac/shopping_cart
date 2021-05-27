import'./CartScreen.css';
import CartItem from '../../components/CartItem/CartItem'

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


// Actions
import { addToCart, removeFromCart } from '../../redux/actions/cartActions';

const CartScreen = ()=>{
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

 

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);  
  };

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2);
  };

    return(
     <div className='cart-screen'>
         <div className='cart-screen-left'>
             <h2>Shopping Cart</h2>
             {cartItems.length === 0 ? (
            <div>
              Your Cart Is Empty <Link to="/">Go Back</Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItem
                key={item.product}
                item={item}
                qtyChangeHandler={qtyChangeHandler}
                removeHandler={removeFromCartHandler}
              />
            ))
          )}
             

         </div>
         <div className='cart-screen-right'>
             <div className='cart-screen-info'>
             <p>Subtotal ({getCartCount()}) items</p>
            <p>${getCartSubTotal()}</p>
             </div>
             <div>
                 <button>Check out</button>
             </div>
         </div>

     </div>
    )
};

export default CartScreen;