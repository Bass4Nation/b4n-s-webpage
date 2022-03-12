import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Bass4Nation&apos;s webpage</title>
        <meta name="description" content="Kristoffer S Søderkvist's portfolio page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={styles.flexlayout}>
        <Nav />
        <main >{children}</main>
        <Footer />
      </section>

    </>
  );
};

export default Layout;
