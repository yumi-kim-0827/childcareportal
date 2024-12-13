import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
//components
import SideBar from "@/src/components/sidebar/SideBar";
import AutoBreadcrumb from "@/src/components/breadcrumb/AutoBreadcrumb";

export default function App({ Component, pageProps }) {
  return (
    <PrimeReactProvider>
      <div className="p-3 flex">
        <SideBar />
        <div className="flex flex-col gap-4 pl-[300px] mx-auto flex-1 max-medium:pl-[200px]">
          <AutoBreadcrumb />
          <Component {...pageProps} />
        </div>
      </div>
    </PrimeReactProvider>
  );
}
