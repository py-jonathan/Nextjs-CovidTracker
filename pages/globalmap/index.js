import Map from "@/components/Map";
import styles from "@/styles/GlobalMap.module.css";

export default function Index({ data }) {
  return (
    <div className={styles.map}>
      <Map data={data} />
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://disease.sh/v3/covid-19/countries`);
  const data = await res.json();

  return {
    props: { data },
  };
}
