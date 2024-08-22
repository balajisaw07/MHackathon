import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Component/Navbar/Navbar';
import { Hero } from './Component/Hero/hero'; // Make sure the filename matches the case
import { Popular } from './Component/Popular/Popular';
import { Offers } from './Component/Offers/offers'; // Make sure the filename matches the case
import { NewCollection } from './Component/NewCollections/NewCollection';
import { Footer } from './Component/Footer/Footer';
import { Shopcategories } from './Pages/Shopcategories';
import { Product } from './Pages/Product';
import men_banner from './Component/Assest/banner_mens.png';
import women_banner from './Component/Assest/banner_women.png';
import kid_banner from './Component/Assest/banner_kids.png';
import './App.css';
// import { Loginp } from './Pages/Loginp';
import { Loginp } from './Pages/Loginp';
import { Loginsingup } from './Pages/Loginsingup';
import {Chatbot} from './Pages/Chatbot';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Chatbot/> */}
      <Routes>
        <Route
          path='/'
          element={
            <div>
              <Hero />
              <Popular />
              <Offers />
              <NewCollection />
              {/* <Shopcategories banner={men_banner} categories="mens" /> Example, adjust if needed */}
            </div>
          }
        />
        <Route
          path='/men'
          element={
            <div>
              {/* <Hero /> */}
              <Shopcategories banner={men_banner} categories="men" />
            </div>
          }
        />
        <Route
          path='/women'
          element={
            <div>
              {/* <Hero /> */}
              <Shopcategories banner={women_banner} categories="women" />
            </div>
          }
        />
        <Route
          path='/kids'
          element={
            <div>
              {/* < ShopContextProvider/> */}
              <Shopcategories banner={kid_banner} categories="kid" />
            </div>
          }
        />
        <Route
          path='/login'
          element={
            <div>
              {/* < ShopContextProvider/> */}
            <Loginp/>
            </div>
          }
        />
          <Route
          path='/signup'
          element={
            <div>
              {/* < ShopContextProvider/> */}
            <Loginsingup/>
            </div>
          }
        />
        <Route
          path='/product'
          element={
            <div>
              <Product />
            </div>
          }
        />
        <Route
          path='/product/:productId'
          element={
            <div>
              <Product />
            </div>
          }
        />
      </Routes>
      <Chatbot/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
