import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useState } from "react";

const Nav = () => {
  const [screenState, setScreenState] = useState(true);

  const fullscreen = (
    <>
      <Link href="/" passHref>
        <section className={styles.nav_elements}>
          <p>Home</p>
        </section>
      </Link>

      <Link href="/projects" passHref>
        <section className={styles.nav_elements}>
          <p>Projects</p>
        </section>
      </Link>

      <Link href="/aboutme" passHref>
        <section className={styles.nav_elements}>
          <p>About me</p>
        </section>
      </Link>

      <Link href="/contactme" passHref>
        <section className={styles.nav_elements}>
          <p>Contact me</p>
        </section>
      </Link>

      <Link href="/firebase" passHref>
        <section className={styles.nav_elements}>
          <p>Firebase</p>
        </section>
      </Link>

      <Link href="/firebase" passHref>
        <section className={styles.nav_elements}>
          <p>MySQL</p>
        </section>
      </Link>
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
