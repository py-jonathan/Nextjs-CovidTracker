import Link from "next/link";

import styles from "@/styles/WorldWideData.module.css";

export default function WorldWideData({ data }) {
  return (
    <div className={styles.buttons_group}>
      <div className={styles.world_wide}>
        <div>
          <h3>WorldWide Cases</h3>
          <h4>{data.cases.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</h4>
        </div>
        <div>
          <h3>WorldWide Deaths</h3>
          <h4 className="deaths-text">
            {data.deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
        <div>
          <h3>WorldWide Recovered</h3>
          <h4 className="recovered-text">
            {data.recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </h4>
        </div>
      </div>
      <Link href="/countries">
        <a className="btn btn-primary">See all countries cases</a>
      </Link>
    </div>
  );
}
