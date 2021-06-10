import { useContext } from "react";
import Image from "next/image";

import CovidContext from "@/context/CovidContext";
import styles from "@/styles/DataTable.module.css";
import "spectre.css/dist/spectre.min.css";

export default function DataTable() {
  const { covidData } = useContext(CovidContext);
  return (
    <table className={`table table-striped table-hover table-scroll ${styles.responsive_table}`}>
        <thead>
          <tr>
            <th>country</th>
            <th>cases</th>
            <th>deaths</th>
            <th>recovered</th>
            <th>today cases</th>
            <th>today deaths</th>
            <th>today recovered</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((country) => (
            <tr>
              <td>
                <strong>{country.country}</strong>
                {"   "}
                <Image alt={`${country.country}_image`} src={country.countryInfo.flag} width={30} height={20} />
              </td>
              <td>
                {country.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                {" "}
                {country.deaths
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                {" "}
                {country.recovered
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                {country.todayCases !== 0 && "+"}
                {country.todayCases
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                {country.todayDeaths !== 0 && "+"}
                {country.todayDeaths
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
              <td>
                {country.todayRecovered !== 0 && "+"}
                {country.todayRecovered
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </td>
            </tr>
          ))}
        </tbody>
    </table>
  );
}
