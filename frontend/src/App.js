
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//Screens
import HomeScreen from './Screens/Home/Homescreen';
import ProductScree from './Screens/Product/ProductScreen';
import CartScreen from './Screens/Cart/CartScreen';

// components
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <Router>
     <Navbar/>
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
