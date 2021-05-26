import './Products.css';
import {Link} from 'react-router-dom'

const Products = ({imageUrl, name, price, description, productId})=>{
    return(
     <div className='product'>
        <img src ={imageUrl}
         alt={name}/>

        <div className='product-info'>
            <p className='product-name'>{name}</p>
            <p className='product-description' >
               {description.substring(0,100)}...
            </p>
            <p className='product-price'>${price}</p>

            <Link to={`/product/${productId}`} className= 'product-info-btn'>View</Link>

        </div>
     </div>

    )
};

export default Products;