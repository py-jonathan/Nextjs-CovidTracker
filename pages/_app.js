import { CovidContextProvider } from "@/context/CovidContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <CovidContextProvider>
      {" "}
      <Component {...pageProps} />
    </CovidContextProvider>
  );
}

export default MyApp;
