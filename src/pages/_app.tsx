import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RootLayout from "@layouts/RootLayout";
import { ToastContainer } from "react-toastify";

// Global stylesheet: https://tailwindcss.com/docs/guides/nextjs
import "@styles/globals.css";

// Fonts: https://fontsource.org
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/syne/700.css";

// Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
function useNormalScrollRoutes() {
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
    });
  });
}

export default function App({ Component, pageProps }: AppProps) {
  useNormalScrollRoutes();
  return (
    <RootLayout>
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </RootLayout>
  );
}
