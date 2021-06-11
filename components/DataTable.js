import { useContext } from "react";
import Link from "next/link";

import CovidContext from "@/context/CovidContext";
import styles from "@/styles/DataTable.module.css";

export default function DataTable() {
  const { covidData } = useContext(CovidContext);
  return (
    <table
      className={`table table-striped table-hover table-scroll ${styles.responsive_table}`}
    >
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
        {covidData.map((country, index) => (
          <tr key={index}>
            <td>
              <Link href={`/country/${country.countryInfo.iso3}`}>
                <a className="text-primary"><strong>{country.country}</strong></a>
              </Link>
            </td>
            <td>
              {country.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td>
              {country.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </td>
            <td>
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
