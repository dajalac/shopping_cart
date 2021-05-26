import './ProductScreen.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// Actions
import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";


const ProductScree = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetailsReducer = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetailsReducer;

    useEffect(() => {
        //match.params check the params in the url..
        // match.params.id !== of the object that is in state
        if (product && match.params.id !== product._id) {
            dispatch(getProductDetails(match.params.id));
        }
    }, [dispatch, match, product]);

    const addToCartHandler = () => {
        dispatch(addToCart(product._id, qty));
        history.push(`/cart`);
    };
    return (
        <div className='product-screen'>
            {loading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <>
                    <div className='product-screen-left'>
                        <div className='left-image'>
                            <img src={product.imageUrl} alt={product.name} />
                        </div>
                        <div className='left-info'>
                            <p className='left-name'>{product.name}</p>
                            <p className='left-price'>Price: ${product.price}</p>
                            <p className='left-description'>Description: {product.description}</p>
                        </div>
                    </div>
                    <div className='product-screen-right'>
                        <div className='right-info'>
                            <p>
                                Price : <span> {product.price}</span>
                            </p>
                            <p>
                                Status : <span>
                                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                                </span>
                            </p>
                            <p>
                                Qty:
                        <select value={qty} onChange={(e) => setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x) => (
                                        <option key={x + 1} value={x + 1}>
                                            {x + 1}
                                        </option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type='button'onClick={addToCartHandler}> Add</button>
                            </p>

                        </div>
                    </div>
                </>

            )}
        </div>
    )
};

export default ProductScree;