import Link from "next/link";
import Image from "next/image";
import Layout from "@/components/Layout";
import styles from "@/styles/CountryData.module.css";

export default function CountryData({ data, status }) {
  return (
    <Layout>
      <div className={styles.country_data}>
        <Link href="/">
          <a href="btn btn-primary">Go Back</a>
        </Link>

        {status === 404 && (
          <div className={styles.notfound_country}>
            <h3>No Country Found with such ISO.</h3>
            <Link href="/">
              <a className="btn btn-primary">Go Back Home</a>
            </Link>
          </div>
        )}

        <div className={styles.country_info}>
          <Image src={data.countryInfo.flag} width={200} height={100} />
          <h2>
            <strong>{data.country}</strong>
          </h2>

          <div className={styles.cases}>
            <h3>Total Cases</h3>
            <h4>
              <strong>
                {data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </h4>
          </div>
          <div className={styles.cases}>
            <strong>
              <h3>Total Deaths</h3>
            </strong>
            <h4 className={styles.deaths}>
              <strong>
                {data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </h4>
          </div>
          <div className={styles.cases}>
            <h3>Total Recovered</h3>
            <h4 className={styles.recovered}>
              <strong>
                {data.recovered
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </strong>
            </h4>
          </div>
        </div>
      </div>
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
