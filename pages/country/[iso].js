import Link from "next/link";
import DataShower from "@/components/DataShower";

import Footer from "@/components/Footer";
import Layout from "@/components/Layout";

import styles from "@/styles/CountryData.module.css";

export default function CountryData({ data, status }) {
  return (
    <Layout>
      <div>
        {status === 404 && (
          <div className={styles.notfound_country}>
            <Link href="/countries">
              <a href="btn btn-primary">Go Back</a>
            </Link>
            <h3>No Country Found with such ISO.</h3>
          </div>
        )}
        {status === 200 && (
          <>
            <DataShower data={data} href="/countries" />
          </>
        )}
      </div>
      <Footer />
    </Layout>
  );
}

export async function getServerSideProps({ params: { iso } }) {
  const res = await fetch(
    `https://disease.sh/v3/covid-19/countries/${iso}?strict=true`
  );
  const data = await res.json();

  return {
    props: { data, status: res.status },
  };
}
