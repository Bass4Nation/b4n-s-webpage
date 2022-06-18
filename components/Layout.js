import stylesDark from "../styles/DarkMain.module.scss";
import styleLight from "../styles/LightMain.module.scss"
import styleBanana from "../styles/BananaMain.module.scss"
import { useState } from "react";
import Nav from "./Nav";
import Head from "next/head";
import Footer from "./Footer";
import { themes, themeDefault, setThemeDefault } from "../constants/global"
import { useTheme } from "../hooks/useTheme"

const Layout = ({ children }) => {
  const { theme, setTheme } = useTheme();
  // console.log(theme);
  let styles;


  const handleChange = event => {
    setTheme(event.target.value);
  };

  if(theme == "Light"){
    styles = styleLight;
  }  
  if(theme == "Dark"){
    styles = stylesDark;
  }  
  if(theme == "Banana"){
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
        <Nav theme={theme} />
        {themes.map(option => (
          <button className={styles.themeSelection} onClick={handleChange} key={option} value={option}>
            {option}
          </button>
        ))}

        <main>{children}</main>
        <Footer theme={theme}/>
      </section>
      </body>
    </>
  );
};

export default Layout;
