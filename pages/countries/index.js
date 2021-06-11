import { useContext } from "react";
import Link from "next/link";

import Layout from "@/components/Layout";
import DataTable from "@/components/DataTable";
import Footer from "@/components/Footer";

import CovidContext from "@/context/CovidContext";
import styles from "@/styles/Countries.module.css";

export default function Countries() {
  const { covidData } = useContext(CovidContext);
  return (
    <Layout title="Countries Cases - Covid Tracker">
      <div className={styles.country_cases}>
        <div className={styles.go_back}>
          <Link href="/">Go Back</Link>
        </div>
        {covidData.length === 0 ? (
          <div className="loading loading-lg"></div>
        ) : (
          <>
            <DataTable />
            {covidData.length > 0 && <Footer />}
          </>
        )}
      </div>
    </Layout>
  );
}
