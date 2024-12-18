import "primereact/resources/themes/saga-orange/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import Script from "next/script";

//components
import SideBar from "@/src/components/sidebar/SideBar";
import AutoBreadcrumb from "@/src/components/breadcrumb/AutoBreadcrumb";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-DD7033VBTZ`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DD7033VBTZ');
        `}
      </Script>
      <PrimeReactProvider>
        <div className="p-3 flex">
          <SideBar />
          <div className="flex flex-col gap-4 pl-[300px] mx-auto flex-1 max-medium:pl-[200px]">
            <AutoBreadcrumb />
            <Component {...pageProps} />
          </div>
        </div>
      </PrimeReactProvider>
    </>
  );
}
