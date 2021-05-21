import './Products.css';
import {Link} from 'react-router-dom'

const Products = ()=>{
    return(
     <div className='product'>
        <img src ="https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
         alt=''/>

        <div className='product-info'>
            <p className='product-name'>Product 1</p>
            <p className='product-description' >
                quando alguem perguntar por mim, diz q fui por ai levando um violao de baixo do braco.
            </p>
            <p className='product-price'>$ 50.00</p>

            <Link to={`/product/${154}`} className= 'product-info-btn'>View</Link>

        </div>
     </div>

    )
};

export default Products;