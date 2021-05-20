import './HomeScreen.css';

const HomeScreen = ()=>{
    return(
     <div className='home-screen'>
         <h2 className='home-screen-title'>Latest products</h2>

         <div className='home-screen-products'>
             <Product/>
         </div>
     </div>

    )
};

export default HomeScreen;