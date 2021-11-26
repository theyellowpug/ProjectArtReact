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
import LoginPage from './page/LoginPage';
import Upload from './component/product/Upload';


function App() {
  return (  
    <Router>
      <div className="App">
        <Header/>      
        <Route exact path='/' component={Newsfeed}></Route>
        <Route exact path='/newsFeed' component={Newsfeed}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path='/productDetails/:productId' component ={ProductDetailsPage}></Route>
        <Route exact path="/services" component={Services}></Route>
        <Route exact path="/cart" component={CartPage}></Route>
        <Route exact path="/checkout" component={CheckoutPage}></Route>
        <Route exact path="/profile/:clientId" component={Profile}></Route>
        <Route exact path ="/login" component={LoginPage}></Route>
        <Route exact path ="/register" component={RegisterPage}></Route>
        <Route exact path="/article/:articleId" component={ArticlePage}></Route>
        <Route exact path="/creators" component={Creators}></Route>
        <Route exact path="/upload" component={Upload}></Route>
      </div>
    </Router>
  );
}

export default App;
