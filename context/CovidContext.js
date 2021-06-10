import { createContext, useState } from "react";

const CovidContext = createContext();

export const CovidContextProvider = ({ children }) => {
  const [covidData, setCovidData] = useState([]);

  return (
    <CovidContext.Provider value={{ covidData, setCovidData }}>
      {children}
    </CovidContext.Provider>
  );
};

export default CovidContext;