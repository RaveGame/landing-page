import ErrorBoundary from "@/components/ErrorBoundary";
import AppLayout from "@/layouts/AppLayout";
import GlobalProvider from "Context/GlobalProvider";
import AOS from "aos";
import "aos/dist/aos.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "swiper/css";
import "swiper/css/pagination";
import "../styles/ckeditor.css";
import "../styles/custom.css";
import "../styles/globals.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { VenomProvider } from "Context/useVenomConnect";
import { ISeoProps } from "../models";
/* import { getMediaFormat } from "../utils"; */
import Script from "next/script";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const defaultSeo: ISeoProps =
    pageProps?.globalData?.data?.attributes?.defaultSeo;
  /* const favicon = pageProps?.globalData?.data?.attributes?.favicon; */
  const structuredData = JSON.stringify(defaultSeo?.structuredData);

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      once: true,
    });
  }, []);

  // useEffect(() => {
  //   const el = document.createElement("script");
  //   if (el) {
  //     el.src = "/js/scriptaddevent.js";
  //     document.body.appendChild(el);
  //   }
  // }, []);

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     const el = document.createElement("script");
  //     el.src = "/js/fbjs.js";
  //     document.body.appendChild(el);
  //   }, 10);
  //   return () => clearTimeout(delay);
  // }, []);

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Q7C9LZ4SCT" />
			<Script
				id='google-analytics'
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-Q7C9LZ4SCT', {
					page_path: window.location.pathname,
					});
					`,
				}}
			/>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        {/* <meta name="theme-color" content="#000000" /> */}
        <meta
          name="description"
          content="Rave is a virtual NFT car racing game on Venom blockchain. Rave allows players to collect, customize, race and earn with NFT cars."
        />
        <meta name="og:url" content="https://ravegame.net/" />
        <meta name="og:title" content="Rave - NFT racing game on Venom" />
        <meta content="/images/Icon_Racing-final.png" name="og:image" />
        <meta
          name="og:description"
          content="Rave is a virtual NFT car racing game on Venom blockchain. Rave allows players to collect, customize, race and earn with NFT cars."
        />
        <meta name="twitter:url" content="https://ravegame.net/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@rave" />
        <meta name="twitter:creator" content="@rave" />
        <meta name="twitter:title" content="Rave - NFT racing game on Venom" />
        <meta name="twitter:image" content="/images/Icon_Racing-final.png" />
        <meta
          name="twitter:description"
          content="Rave is a virtual NFT car racing game on Venom blockchain. Rave allows players to collect, customize, race and earn with NFT cars."
        />
        {/* <meta name="revisit-after" content="1 days" /> */}
        <meta
          name="keywords"
          content="nft, venom, crypto, nftgame, gamefi, token, rave, ravegame"
        />

        <link rel="shortcut icon" href="/images/favicon.ico" />
        {structuredData && (
          <script type="application/ld+json">{structuredData}</script>
        )}
      </Head>

      <DefaultSeo
        defaultTitle={"Rave - Race on Venom"}
        title={/* defaultSeo?.metaTitle ||  */ "Rave - Race on Venom"}
        /* titleTemplate={defaultSeo?.titleTemplate || "%s | ravegame.net"} */
        description={
          /* defaultSeo?.metaDescription ||  */ "Rave is a virtual NFT car racing game on Venom blockchain. Rave allows players to collect, customize, race and earn with NFT cars."
        }
        canonical={/* defaultSeo?.canonicalURL ||  */ `https://ravegame.net/`}
        robotsProps={{
          noarchive: true,
        }}
        openGraph={{
          site_name: "Rave - NFT racing game on Venom",
          title:
            /* defaultSeo?.metaTitle ||  */ "Rave - NFT racing game on Venom",
          description:
            "Rave is a virtual NFT car racing game on Venom blockchain. Rave allows players to collect, customize, race and earn with NFT cars.",
          url: `https://ravegame.net/`,
          images: [
            {
              url: "/images/Icon_Racing-final.png",
              /* width: defaultSeo?.metaImage?.data?.attributes?.width,
              height: defaultSeo?.metaImage?.data?.attributes?.height, */
              alt: "Rave - Race on Venom",
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: "Rave",
            content: "Rave - NFT racing game on Venom",
          },
        ]}
      />
      <GlobalProvider {...pageProps}>
        <VenomProvider>
          <ErrorBoundary>
            <ToastContainer
              position="bottom-right"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
            <AppLayout>
              <Component {...pageProps} />
            </AppLayout>
          </ErrorBoundary>
        </VenomProvider>
      </GlobalProvider>
    </>
  );
};

export default MyApp;
