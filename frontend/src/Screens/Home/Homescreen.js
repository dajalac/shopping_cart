import './HomeScreen.css';
import Product from '../../components/Products/Products'

const HomeScreen = ()=>{
    return(
     <div className='home-screen'>
         <h2 className='home-screen-title'>Latest products</h2>

         <div className='home-screen-products'>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
             <Product/>
            
         </div>
     </div>

    )
};

export default HomeScreen;