
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
   
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
