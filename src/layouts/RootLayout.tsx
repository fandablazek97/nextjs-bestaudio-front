import NextHead from "next/head";
import Navbar from "../components/root/navbar/Navbar";
import SkipToContent from "@components/root/SkipToContent";
import Footer from "@components/root/footer/Footer";
import { config } from "@configs/site-config";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <NextHead>
        <meta charSet="utf-8" />
        <meta
          name="author"
          content={`${config.author.company} - ${config.author.name} - ${config.author.url}`}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </NextHead>
      <header>
        <SkipToContent />
        <Navbar />
      </header>
      <main id="content">{children}</main>
      <Footer />
    </>
  );
}
