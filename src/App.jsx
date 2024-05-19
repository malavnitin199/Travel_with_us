import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import "./index.css";
import Login from "./pages/Login";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
// import { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";
// const BASE_URL = "http://localhost:8000";
function App() {
  // const [cities, setCities] = useState([]);
  // const [isLoading, setisLoading] = useState(false);

  // useEffect(function () {
  //   async function fetchCities() {
  //     try {
  //       setisLoading(true);
  //       const res = await fetch(`${BASE_URL}/cities`);

  //       const data = await res.json();
  //       setCities(data);
  //     } catch (error) {
  //       setisLoading(false);
  //       alert("there was an error loading data......");
  //     } finally {
  //       setisLoading(false);
  //     }
  //   }
  //   fetchCities();
  // }, []);
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}></Route>
          <Route path="product" element={<Product />}></Route>
          <Route path="pricing" element={<Pricing />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />}></Route>
            <Route path="countries" element={<CountryList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
