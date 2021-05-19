
import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


//Screens
import HomeScreen from './Screens/Home/Homescreen';
import ProductScree from './Screens/Product/ProductScreen';
import CartScreen from './Screens/Cart/CartScreen';

// components
import Navbar from './components/Navbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';


function App() {
// states
  const [sideToggle, setSideToggle] = useState(false);

  return (
    <Router>
     <Navbar OnClickBtn ={()=>setSideToggle(true)}/>
     <SideDrawer showSideDrawer ={sideToggle} OnClickBtn ={()=>setSideToggle(false)}/>
     <Backdrop showSideDrawer ={sideToggle} OnClickBtn ={()=>setSideToggle(false)}/>
     <main className="app">
       <Switch>
         <Route exact path ="/" component={HomeScreen}/>
         <Route exact path ="/product/:id" component={ProductScree}/>
         <Route exact path ="/cart" component={CartScreen}/>
       </Switch>
     </main>
  
    </Router>
  );
}

export default App;
