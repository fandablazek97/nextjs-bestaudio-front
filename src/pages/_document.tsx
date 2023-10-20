import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";
import { cbid } from "../../cookiebot.config.js";
import CookieBotDeclaration from "../components/CookieBotDeclaration";

export default function Document() {
  return (
    <Html lang="cs" className="scroll-pt-28 scroll-smooth">
      <Head>
        {/* <Script
          strategy="beforeInteractive"
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid={cbid}
          data-blockingmode="auto"
          type="text/javascript"
        /> */}
        <Script
          strategy="afterInteractive"
          id="CookieDeclaration"
          src="/api/cookiebot-proxy"
          data-cbid={cbid}
          data-blockingmode="auto"  
          type="text/javascript"
       />
      </Head>
      <body className="overflow-x-hidden bg-body font-sans text-base font-normal text-copy antialiased transition-colors duration-150 selection:bg-primary/80 selection:text-white">
        <Main />
        <CookieBotDeclaration />
        <NextScript />
      </body>
    </Html>
  );
}
