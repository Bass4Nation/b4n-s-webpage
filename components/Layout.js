import styles from "../styles/Main.module.scss";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bass4Nation&apos;s webpage</title>
        <meta name="description" content="Kristoffer S Søderkvist's portfolio page" />
        <meta name="topColor" content="#4285f4" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={styles.bodyStyle} >

      <section className={styles.flexlayout}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </section>
      </body>
    </>
  );
};

export default Layout;
