import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@/styles/globals.css";
import { PrimeReactProvider } from "primereact/api";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <Component {...pageProps} />{" "}
    </PrimeReactProvider>
  );
}
