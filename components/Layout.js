import stylesDark from "../styles/DarkMain.module.scss";
import styleLight from "../styles/LightMain.module.scss"
import styleBanana from "../styles/BananaMain.module.scss"
import { useState } from "react";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";
import { themes, themeDefault, setThemeDefault } from "../constants/global"

const Layout = ({ children }) => {
  let styles = stylesDark;

  const [selected, setSelected] = useState(themes[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  if(selected == "Light"){
    styles = styleLight;
    setThemeDefault("Light")
  }  
  if(selected == "Dark"){
    styles = stylesDark;
  }  
  if(selected == "Banana"){
    styles = styleBanana;
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
        {themes.map(option => (
          <button className={styles.themeSelection} onClick={handleChange} key={option} value={option}>
            {option}
          </button>
        ))}

        <main>{children}</main>
        <Footer />
      </section>
      </body>
    </>
  );
};

export default Layout;
