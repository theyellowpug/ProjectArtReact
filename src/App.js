import { CheckoutPage } from './page/CheckoutPage';
import { ProductDetailsPage } from './page/ProductDetailsPage';
import { BrowserRouter as Router,Route } from 'react-router-dom';
import { CartPage } from './page/CartPage';
import Header from './component/header/Header';
import Newsfeed from './page/Newsfeed';
import Products from './page/Products';
import { Profile } from './page/Profile';
import Services from './page/Services';
import Creators from './page/Creators';

function App() {
  return (  
    <Router>
      <div className="App">
      <Header/>
        <Route exact path='/' component={Newsfeed}></Route>
        <Route exact path='/hirfolyam' component={Newsfeed}></Route>
        <Route exact path="/termekek" component={Products}></Route>
        <Route exact path="/szolgaltatasok" component={Services}></Route>
        <Route exact path='/termekInfo/:productId' component ={ProductDetailsPage}></Route>  
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/alkotoknak"><Profile clientId="1"/></Route>
        <Route exact path="/alkotok" component={Creators}></Route>
      </div>
    </Router>
  );
}

export default App;
