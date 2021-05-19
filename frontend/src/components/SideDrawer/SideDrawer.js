import './SideDrawer.css';
import { Link } from "react-router-dom";

const SideDrawer= ({showSideDrawer, OnClickBtn})=>{
    //dynamic style
    const sideDrawerClass = ['sidedrawer'];

   // if true, push into array a new style
   if(showSideDrawer){
       sideDrawerClass.push("display-sideDrawer")
   }

    {/*the join will join the two classesNames above into one style string*/}
    return(
        
     <div className= {sideDrawerClass.join(" ")}>
         <ul className='sideDrawer-link'onClick={OnClickBtn}>
             <li>
                <Link to='/cart'>
                    <i className ='fas fa-shopping-cart'></i>
                        <span> 
                            Cart
                            <span className ='sideDrawer-cart-badge'>0</span>
                            
                        </span>
                </Link>
             </li>
             <Link to='/'>Shop</Link>
         </ul>

     </div> 
    )
};

export default SideDrawer;