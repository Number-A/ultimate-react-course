import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CitiesProvider } from "./contexts/CitiesContext";

import CountryList from "./components/CountriesList";
import PageNotFound from "./pages/PageNotFound";
import CityList from "./components/CityList";
import AppLayout from "./pages/AppLayout";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import City from "./components/City";
import Home from "./pages/Homepage";
import Login from "./pages/Login";
import Form from "./components/Form";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to={"cities"} />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
