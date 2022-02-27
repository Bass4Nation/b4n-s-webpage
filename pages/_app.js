import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const [ constState, setConstState] = useState(false)

  // Wants to add possibillity to change language on my page. From english to Norwegian.
  const [ langState, setLangState] = useState("en")

  // Message that will popup if constState is true
  if(constState == true){
    alert("This page is under construction.")
  }


  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
