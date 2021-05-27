import './SideDrawer.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SideDrawer= ({showSideDrawer, OnClickBtn})=>{
    //dynamic style
    const sideDrawerClass = ['sidedrawer'];

   // if true, push into array a new style
   if(showSideDrawer){
       sideDrawerClass.push("display-sideDrawer")
   }

   const cart = useSelector(state =>state.cart);
   const {cartItems} = cart; 

   const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);  
  };

    {/*the join will join the two classesNames above into one style string*/}
    return(
        
     <div className= {sideDrawerClass.join(" ")}>
         <ul className='sideDrawer-link'onClick={OnClickBtn}>
             <li>
                <Link to='/cart'>
                    <i className ='fas fa-shopping-cart'></i>
                        <span> 
                            Cart
                            <span className ='sideDrawer-cart-badge'>{getCartCount()}</span>
                            
                        </span>
                </Link>
             </li>
             <li>
             <Link to='/'>Shop</Link>
             </li>
         </ul>

     </div> 
    )
};

export default SideDrawer;