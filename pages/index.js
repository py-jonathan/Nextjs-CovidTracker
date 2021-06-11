import { useContext, useEffect } from "react";
import Link from "next/link";

import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";

import CovidContext from "@/context/CovidContext";
import styles from "@/styles/Home.module.css";

export default function HomePage({ data }) {
  const { covidData } = useContext(CovidContext);

  return (
    <Layout title="Home - Covid Tracker">
      <Information />
      <div className={styles.buttons_group}>
        <div className={styles.world_wide}>
          <div>
            <h3>Worldwide Cases</h3>
            <h4>
              {data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
          <div>
            <h3>Worldwide Deaths</h3>
            <h4 className="deaths-text">
              {data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
          <div>
            <h3>Worldwide Recovered</h3>
            <h4 className="recovered-text">
              {data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </h4>
          </div>
        </div>
        <Link href="/countries">
          <a className="btn btn-primary">See all countries cases</a>
        </Link>
      </div>
      {covidData.length > 0 && <Footer />}
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://disease.sh/v3/covid-19/all`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
