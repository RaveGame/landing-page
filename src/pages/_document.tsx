/* eslint-disable @next/next/no-script-in-document */
/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/next-script-for-ga */
import Document, { Head, Html, Main, NextScript } from "next/document";
// import Script from "next/script";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta name="theme-color" content="#061825" />
          <link
            rel="alternate"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
            hrefLang="vi"
          />
          <link
            rel="alternate"
            href={`${process.env.NEXT_PUBLIC_DOMAIN_URL}`}
            hrefLang="x-default"
          />
           
          {/* <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PJZ94XP');`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PJZ94XP');`,
            }}
          />
          <script src="/js/scriptone.js" /> */}
        </Head>

        <body>
          <Main />
          <NextScript />
         
          {/* <div id="fb-root" />
          <div id="fb-customer-chat" className="fb-customerchat" /> */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
