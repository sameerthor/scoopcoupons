import 'bootstrap/dist/css/bootstrap.css';
import "@/styles/global.css";
import "@/styles/montserrat.css";
import Head from "next/head";
import { useEffect } from "react"
import Header from "@/components/header";
import Footer from "@/components/footer";
import Script from 'next/script';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <script src="/custom.js" defer></script>
      </Head>
      {/* <GoogleAnalytics gaId="G-HS1M2KPJTL" /> */}
      {/* <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HS1M2KPJTL"
        strategy="lazyOnload" defer
      />
      <Script id="google-analytics" strategy="lazyOnload" defer>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HS1M2KPJTL');
        `}
      </Script> */}
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>)
}
