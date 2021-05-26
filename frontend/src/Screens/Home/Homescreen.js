import './HomeScreen.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; //easier way instead of use mapDispatchToProps and mapStateToProps

// Components
import Product from "../../components/Products/Products";

//Actions
import { getProducts as getProductsActions } from "../../redux/actions/productActions";

const HomeScreen = () => {
    const dispatch = useDispatch();

    //getProducts from state.getProducts is the reducer. the same from the store
    const getProductsReducer = useSelector((state) => state.getProducts);

    //products, loading, error is what the reducer return
    const { products, loading, error } = getProductsReducer; 

    useEffect(() => {
        dispatch(getProductsActions());
    }, [dispatch]);

    return (
        <div className='home-screen'>
            <h2 className='home-screen-title'>Latest products</h2>

            <div className='home-screen-products'>
                {loading ? (
                    <h2>Loading...</h2>
                ) : error ? (
                    <h2>{error}</h2>
                ) : (
                    products.map((product) => (
                        <Product
                            key={product._id}
                            name={product.name}
                            description={product.description}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            productId={product._id}
                        />
                    ))
                )}
         </div>
        </div>

    )
};

export default HomeScreen;