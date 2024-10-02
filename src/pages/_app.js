import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
//components
import SideBar from "@/src/components/sidebar/SideBar";
import AutoBreadcrumb from "@/src/components/breadcrumb/AutoBreadcrumb";
import MobileBtMenuBar from "@/src/components/mobileBtMenubar/MobileBtMenuBar";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col gap-4 p-4 mx-auto w-full max-w-7xl border-1 border-yellow-500 bg-white">
          <AutoBreadcrumb />
          <Component {...pageProps} />
        </div>
        <MobileBtMenuBar />
      </div>
    </PrimeReactProvider>
  );
}
