import Layout from "@/components/Layout";
import Information from "@/components/Information";
import Footer from "@/components/Footer";
import PageLinks from "@/components/PageLinks";

export default function HomePage() {
  return (
    <Layout title="Home - Covid Tracker">
      <Information />
      <PageLinks />
      <Footer />
    </Layout>
  );
}
