import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <style jsx global>{
        `body {
          margin: 0px;
          padding: 0px;
         }`}
      </style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
