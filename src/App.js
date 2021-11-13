import { CheckoutPage } from './page/CheckoutPage';
import { ProductDetailsPage } from './page/ProductDetailsPage';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { CartPage } from './page/CartPage';
import Header from './component/header/Header';
import Newsfeed from './page/Newsfeed';
import Products from './page/Products';
import { Profile } from './page/Profile';

function App() {
  return (  
    <Router>
      <div className="App">
        <Header/>      
        <Route exact path='/' component={Newsfeed}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path='/productDetails/:productId' component ={ProductDetailsPage}></Route>  
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </div>
    </Router>
  );
}

export default App;
