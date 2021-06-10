import Link from "next/link";

import Layout from "@/components/Layout";

import styles from "@/styles/404.module.css";

export default function NotFound() {
  return (
    <Layout title="Not Found">
      <div className={styles.notfound}>
        <h1>OOPS!</h1>
        <h3>The page you're looking for is now beyond our reach.</h3>
        <Link href="/">
          <a className="btn btn-error">Go Back Home</a>
        </Link>
      </div>
    </Layout>
  );
}
