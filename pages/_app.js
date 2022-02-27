import "../styles/globals.css";
import Layout from "../components/Layout";
import { useState } from "react";

function MyApp({ Component, pageProps }) {

  const [ constState, setConstState] = useState(true)

  const [ langState, setLangState] = useState("en")

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
