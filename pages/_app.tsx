import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { WindowProvider } from "@/context";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <WindowProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </WindowProvider>
  );
}
