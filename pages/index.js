import Footer from "@/components/Footer";
import Information from "@/components/Information";
import Layout from "@/components/Layout";
import WorldWideData from "@/components/WorldWideData";


export default function HomePage({ data }) {
  return (
    <Layout title="Home - Covid Tracker">
      <Information />
      <WorldWideData data={data} />
      <Footer />
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
