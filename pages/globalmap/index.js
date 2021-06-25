import Map from "@/components/Map";
import styles from "@/styles/GlobalMap.module.css";

export default function Index({ data, token }) {
  return (
    <div className={styles.map}>
      <Map data={data} token={token} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
  const data = await res.json();

  return {
    props: { data, token: process.env.MAPBOX_API_TOKEN },
    revalidate: 20
  };
}
