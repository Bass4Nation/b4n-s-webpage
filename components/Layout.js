import stylesDark from "../styles/DarkMain.module.scss";
import styleLight from "../styles/LightMain.module.scss"
import { useState } from "react";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";
import { themes } from "../constants/global"

const Layout = ({ children }) => {
  let styles = stylesDark;

  const [selected, setSelected] = useState(themes[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  if(selected == "Light"){
    styles = styleLight;
  }
  
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
        <select value={selected} onChange={handleChange}>
        {themes.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
        <main>{children}</main>
        <Footer />
      </section>
      </body>
    </>
  );
};

export default Layout;
