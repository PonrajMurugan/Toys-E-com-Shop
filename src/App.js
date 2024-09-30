import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/navBar';
import SimpleSlider from './Components/Banner/Banner';
import ShopByAge from './Components/shopByAge/shopByAge';
import MostPopular from './Components/mostPopular/mostPopular';
import Exclusive from './Components/Exclusive-Banner/exclusive';
import Character from './Components/Characters/character';
import ShippingIcons from './Components/promotions/promotions';
import ToysAndGames from './Components/Footer/toysAndGames';

import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import EightMonths from './Components/18Months/eightMonths';
import ProductsPage from './Components/18Months/threeSix';
import ProductForThird from './Components/18Months/fiveYears';
import SevenMonths from './Components/18Months/sevenMonths';
import NineMonths from './Components/18Months/nineMonths';
import Cart from './Components/Cart';
import ProductDetails from './Components/mostPopular/product-details';

const App = () => {
  const location = useLocation();

  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SimpleSlider />
              <ShopByAge />
              <MostPopular />
              <Exclusive />
              <Character />
              <ShippingIcons />
            </>
          }
        />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/shop/1" element={<EightMonths />} /> 
        <Route path="/shop/2" element={<ProductsPage />} />
        <Route path="/shop/3" element={<ProductForThird />} />
        <Route path="/shop/4" element={<SevenMonths />} />
        <Route path="/shop/5" element={<NineMonths />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      {location.pathname !== '/cart' && <ToysAndGames />}
    </div>
  );
}

export default App;
