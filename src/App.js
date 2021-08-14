import React from 'react';
import 'core-js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './components/Cart/CartContext';
import NavBarContainer from './components/NavBar/NavBarContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartContainer from './components/Cart/CartContainer';
import OrderContainer from './components/Order/OrderContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">

      <CartContextProvider> 
        <BrowserRouter>
          <NavBarContainer />
          <Switch>
            
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            <Route exact path="/category/:categoryId" >
              <ItemListContainer />
            </Route>

            <Route exact path="/item/:itemId" >
              <ItemDetailContainer />
            </Route>

            <Route exact path="/cart" >
              <CartContainer />
            </Route>

            <Route exact path="/order" >
              <OrderContainer />
            </Route>

          </Switch>
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;