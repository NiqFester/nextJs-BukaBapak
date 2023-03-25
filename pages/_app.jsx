import "@/styles/globals.css";
import "@splidejs/react-splide/css";
import { useEffect } from "react";
import MainLayout from "../src/components/Layout/main-Layout";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const use = async () => {
      (await import("tw-elements")).default;
    };
    use();
  }, []);
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}
