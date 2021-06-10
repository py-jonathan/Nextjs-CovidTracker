import { CovidContextProvider } from "@/context/CovidContext";
import "spectre.css/dist/spectre.min.css";
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
