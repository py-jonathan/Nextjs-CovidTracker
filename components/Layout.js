import Head from "next/head";
import Header from "./Header";

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />

      {children}
    </div>
  );
}

Layout.defaultProps = {
  title: "Covid Tracker - Get latest data regarding covid-19",
  description:
    "Covid Tracker is the best website for you to find the realtime data of covid cases. This website addresses all the data of covid cases in every respective countries and presents you the most appropriate and accurate data.",
  keywords: "covid-tracker, covid tracker, covid-19, covid cases, covid data",
};
