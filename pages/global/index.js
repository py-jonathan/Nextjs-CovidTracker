import Layout from "@/components/Layout";
import Footer from "@/components/Footer";
import DataShower from "@/components/DataShower";

export default function Global({ data }) {
  return (
    <Layout title="Global Statistics - Covid Tracker">
      <DataShower data={data} />
      <Footer />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`https://disease.sh/v3/covid-19/all`);
  const data = await res.json();
  return {
    props: { data },
    revalidate: 20,
  };
}
