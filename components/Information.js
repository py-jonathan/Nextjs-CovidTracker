import Image from "next/image";

import styles from "@/styles/Information.module.css";

export default function Information() {
  return (
    <div className={styles.information}>
      <h1>COVID-19 TRACKER</h1>
      <p>Get accurate and realtime data on covid-19</p>
      <Image
        className={styles.corona_image}
        src="/images/corona.png"
        alt="corona png image"
        width={200}
        height={200}
      />
    </div>
  );
}
