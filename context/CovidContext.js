import { createContext, useEffect, useState } from "react";

const CovidContext = createContext();

export const CovidContextProvider = ({ children }) => {
  const [covidData, setCovidData] = useState([]);

  useEffect(async() => {
    const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
    const data = await res.json();

    setCovidData(data);
  }, []);

  return (
    <CovidContext.Provider value={{ covidData, setCovidData }}>
      {children}
    </CovidContext.Provider>
  );
};

export default CovidContext;
