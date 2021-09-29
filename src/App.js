import { CheckoutPage } from './page/CheckoutPage';
import { MarketPage } from './page/MarketPage';
import { ProductDetailsPage } from './page/ProductDetailsPage';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Newsfeed from './page/Newsfeed';
import Products from './page/Products';

function App() {
  return (
    <div className="App">
        <Header/>
          <BrowserRouter>
          <Route path='/' exact>
            <Newsfeed/>
          </Route>
          <Route path='/termekek'>
            <Products/>
          </Route>
        </BrowserRouter>
    </ div>
  );
}

export default App;
