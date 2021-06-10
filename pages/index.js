import { useContext, useEffect } from "react";

import DataTable from "@/components/DataTable";
import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";

import CovidContext from "@/context/CovidContext";

export default function HomePage({ data }) {
  const { covidData, setCovidData } = useContext(CovidContext);
  useEffect(() => setCovidData(data), []);

  return (
    <Layout title="Home - Covid Tracker">
      <Information />
      <div className="container">
        {covidData.length === 0 ? (
          <div className="loading loading-lg"></div>
        ) : (
          <DataTable />
        )}
      </div>
      {covidData.length > 0 && <Footer />}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1
  };
}
