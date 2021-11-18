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
import ArticlePage from './page/ArticlePage';
import RegisterPage from './page/RegisterPage';
import LoginPage from './page/LoginPage'

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
        <Route exact path="/alkotoknak"></Route>
        <Route exact path ="/bejelentkezes" component={LoginPage}></Route>
        <Route exact path ="/regisztracio" component={RegisterPage}></Route>
        <Route exact path="/alkotok" component={Creators}></Route>
        <Route exact path="/cikk" component={ArticlePage}></Route>
      </div>
    </Router>
  );
}

export default App;
