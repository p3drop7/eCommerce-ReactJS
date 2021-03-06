import React from 'react';
import 'core-js'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContextProvider } from './components/Context/CartContext';
import NavBarContainer from './components/NavBar/NavBarContainer';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import CartContainer from './components/Cart/CartContainer';
import Logo from './components/Logo/Logo';
import Order from './components/Order/Order';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">

      <CartContextProvider> 
        <BrowserRouter>
          <NavBarContainer />
          <Logo />
          
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
              <Order />
            </Route>

          </Switch>

          <Footer />
        </BrowserRouter>
      </CartContextProvider>

    </div>
  );
}

export default App;