import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import RootLayout from "@layouts/RootLayout";
import { ToastContainer } from "react-toastify";
// import { Transition } from "@headlessui/react";

// Global stylesheet: https://tailwindcss.com/docs/guides/nextjs
import "@styles/globals.css";

// Fonts: https://fontsource.org
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/syne/700.css";

// Disable smooth scroll on route change: https://github.com/vercel/next.js/issues/20125#issuecomment-757547865
// function useNormalScrollRoutes() {
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();

//   useEffect(() => {
//     router.events.on("routeChangeStart", () => {
//       setLoading(true);
//       document.documentElement.classList.add("!scroll-auto");
//     });
//     router.events.on("routeChangeComplete", () => {
//       setLoading(false);
//       document.documentElement.classList.remove("!scroll-auto");
//     });
//   });
// }

export default function App({ Component, pageProps }: AppProps) {
  // const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      document.documentElement.classList.add("!scroll-auto");
      // setLoading(true);
      // setTimeout(() => {
      // }, 300);
    });
    router.events.on("routeChangeComplete", () => {
      document.documentElement.classList.remove("!scroll-auto");
      // setTimeout(() => {
      //   setLoading(false);
      // }, 500);
    });
  });
  return (
    <RootLayout>
      {/* <Transition
        as="div"
        appear={true}
        show={loading}
        enter="transition-transform ease-in-out duration-300"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition-transform ease-in-out duration-[700ms]"
        leaveFrom="translate-y-0"
        leaveTo="-translate-y-full"
        className="fixed inset-0 z-[1000] h-screen w-screen bg-body-50"
      /> */}
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
