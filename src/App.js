//import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { CheckoutPage } from './page/CheckoutPage';
import { MarketPage } from './page/MarketPage';
import { ProductDetailsPage } from './page/ProductDetailsPage';
import { BrowserRouter as Router,Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={MarketPage}></Route>
        <Route exact path="/market" component={MarketPage}></Route>
        <Route exact path='/productDetails/:productId' component ={ProductDetailsPage}></Route>          
      </div>
    </Router>
  );
}




export default App;
