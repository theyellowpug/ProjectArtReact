import './App.css';
import { CheckoutPage } from './page/CheckoutPage';
import { MarketPage } from './page/MarketPage';
import { ProductDetailsPage } from './page/ProductDetailsPage';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Ajanlo from './page/Ajanlo';
import Termekek from './page/Termekek';

function App() {
  return (
    <div className="App">
        <Header/>
          <BrowserRouter>
          <Route path='/' exact>
            <Ajanlo></Ajanlo>
          </Route>
          <Route path='/termekek'>
            <Termekek></Termekek>
          </Route>
        </BrowserRouter>
    </ div>
  );
}

export default App;
