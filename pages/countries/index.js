import Link from "next/link";

import Layout from "@/components/Layout";
import DataTable from "@/components/DataTable";
import Footer from "@/components/Footer";

import styles from "@/styles/Countries.module.css";

export default function Countries({ data }) {
  return (
    <Layout title="Countries Cases - Covid Tracker">
      <div className={styles.country_cases}>
        <div className={styles.go_back}>
          <Link href="/">Go Back</Link>
        </div>
        {data.length === 0 ? (
          <div className="loading loading-lg"></div>
        ) : (
          <>
            <DataTable data={data} />
            {data.length > 0 && <Footer />}
          </>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
  const data = await res.json();

  return {
    props: { data },
    revalidate: 1,
  };
}
