import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from './components/Cart/Cart';
import {CartProvider} from './Context/CartContext';
import React from 'react' ;

export const CartContext = React.createContext('');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
        <NavBar />
      
       
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/detalle/:itemId" element={<ItemDetailContainer />} />
            <Route path='/cart' element = {<Cart/>}/>
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
          </CartProvider>
       
      </BrowserRouter>
    </div>
  );
}

export default App;
