import { useEffect, Fragment } from "react";
import "../styles/globals.css";
import Layout from "../components/organisms/layout";
// import { Layout } from "../components/organisms/";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";
// import MessengerCustomerChat from "react-messenger-customer-chat";
// import { MessengerChat } from "react-messenger-chat-plugin";
const isProd = process.env.NODE_ENV === "production";
import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      if (isProd) {
        window.gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
          page_path: url,
        });
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Fragment>
      <Layout>
        <DefaultSeo
          title="Admisión UNJBG"
          description="ADMISIÓN - UNIVERISDAD NACIONAL JORGE BASADRE GROHMANN"
          keywords="unjbg,admision,admisionunjbg"
          canonical="https://admision.unjbg.edu.pe"
          openGraph={{
            type: "website",
            title: "Dirección de admisión UNJBG",
            url: "https://admision.unjbg.edu.pe",
            description: "Página web de la Dirección de Admisión UNJBG",
            image: "",
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
