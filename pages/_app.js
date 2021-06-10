import { CovidContextProvider } from "@/context/CovidContext";
import "../styles/globals.css";
import "spectre.css/dist/spectre.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <CovidContextProvider>
      {" "}
      <Component {...pageProps} />
    </CovidContextProvider>
  );
}

export default MyApp;
