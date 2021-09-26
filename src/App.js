//import './App.css';
import { Navbar } from './component/navbar/Navbar';
import { CheckoutPage } from './page/CheckoutPage';
import { MarketPage } from './page/MarketPage';
import { ProductDetailsPage } from './page/ProductDetailsPage';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { CartPage } from './page/CartPage';

function App() {
  return (  
    <Router>
      <div>
      <Navbar/>
        <Route exact path="/" component={MarketPage}></Route>
        <Route exact path="/market" component={MarketPage}></Route>
        <Route exact path='/productDetails/:productId' component ={ProductDetailsPage}></Route>  
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
      </div>
    </Router>
  );
}




export default App;
