import Link from "next/link";
import stylesDark from "../styles/DarkMain.module.scss";
import styleLight from "../styles/LightMain.module.scss"
import styleBanana from "../styles/BananaMain.module.scss"

import { useState } from "react";
import { useRouter } from "next/router";

const Nav = ({theme}) => {
  const router = useRouter();
  const [screenState, setScreenState] = useState(true);
  
  let styles;

  if(theme == "Light"){
    styles = styleLight;
  }  
  if(theme == "Dark"){
    styles = stylesDark;
  }  
  if(theme == "Banana"){
    styles = styleBanana;
  }

  const fullscreen = (
    <>
      <Link href="/" passHref>
        <section
          className={
            router.pathname == "/" ? styles.nav_active : styles.nav_elements
          }
        >
          <p>Home</p>
        </section>
      </Link>

      <Link href="/projects" passHref>
        <section
          className={
            router.pathname == "/projects"
              ? styles.nav_active
              : styles.nav_elements
          }
        >
          <p>Projects</p>
        </section>
      </Link>

      <Link href="/aboutme" passHref>
        <section
          className={
            router.pathname == "/aboutme"
              ? styles.nav_active
              : styles.nav_elements
          }
        >
          <p>About me</p>
        </section>
      </Link>

      <Link href="/contactme" passHref>
        <section
          className={
            router.pathname == "/contactme"
              ? styles.nav_active
              : styles.nav_elements
          }
        >
          <p>Contact me</p>
        </section>
      </Link>

      {/* <Link href="/firebase" passHref>
        <section
          className={
            router.pathname == "/firebase"
              ? styles.nav_active
              : styles.nav_elements
          }
        >
          <p>Firebase</p>
        </section>
      </Link> */}
    </>
  );
  const mobileMenu = (
    <>
      <a>Menu</a>
    </>
  );

  const mobileMenuPart1 = <></>;

  return (
    <>
      <section className={styles.nav_background}>
        <a className={styles.main_title}>B4N&apos;s Portfolio Page</a>
        <section className={styles.nav_section}>
          {screenState ? fullscreen : mobileMenu}
        </section>
      </section>
    </>
  );
};
export default Nav;
