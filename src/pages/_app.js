import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Head from "next/head";

import Header from "../Components/Header/Header";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="bg-gray-400 p-2">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
