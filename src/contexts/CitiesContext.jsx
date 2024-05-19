import { createContext, useContext, useEffect, useState } from "react";

const BASE_URL = "http://localhost:8000";
const CitiesContext = createContext();

// eslint-disable-next-line react/prop-types
function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      try {
        setisLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);

        const data = await res.json();
        setCities(data);
      } catch (error) {
        setisLoading(false);
        alert("there was an error loading data......");
      } finally {
        setisLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      setisLoading(true);
      const res = await fetch(`${BASE_URL}/cities/${id}`);

      const data = await res.json();
      setCurrentCity(data);
    } catch (error) {
      setisLoading(false);
      alert("there was an error loading data......");
    } finally {
      setisLoading(false);
    }
  }
  return (
    <CitiesContext.Provider value={{ cities, isLoading, getCity, currentCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  return context;
}
export { CitiesProvider, useCities };
