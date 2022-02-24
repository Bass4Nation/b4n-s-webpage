import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
import Footer from "./Footer";

const Layout = ( {children} ) => {
  return (
    <>
      <Nav/>
      <main>
       {children}
       </main>
       <Footer />
    </>
  );
};

export default Layout;
