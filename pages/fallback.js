import Layout from "@/components/Layout";
import styles from "@/styles/Fallback.module.css";

export default function FallBack() {
  return (
    <Layout title="Offline">
      <div className={styles.fallback}>
        <h2>Hmmm! It seems that you are offline</h2>
        <p>Please connect to internet and try again....</p>
      </div>
    </Layout>
  );
}
