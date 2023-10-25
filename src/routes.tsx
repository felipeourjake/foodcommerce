import { Route, Routes } from "react-router-dom";
import Main from './pages/Main'
import BurguersPage from './pages/Main/Burguers'
import PizzasPage from './pages/Main/Pizzas'
import DrinksPage from './pages/Main/Drinks'
import SobremesasPage from './pages/Main/Sobremesas'

import Cart from './pages/Cart'
import PaymentPage from "./pages/Payment";
import PaymentSuccess from "./pages/Payment/Success";

export function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<Main />} >
          <Route path="/" element={<BurguersPage/>} />
          <Route path="/pizzas" element={<PizzasPage/>} />
          <Route path="/bebidas" element={<DrinksPage/>} />
          <Route path="/sobremesas" element={<SobremesasPage/>} />
        </Route>
        <Route path="/cart" element={<Cart/>} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment/success" element={<PaymentSuccess />} />
      </Routes>
    );
}