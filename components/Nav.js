import Link from "next/link";
import styles from "../styles/Nav.module.css";
import { useState } from "react";

const Nav = () => {


  const [screenState, setScreenState] = useState(true);

const fullscreen = (
  <>
        <section className={styles.nav_elements}>
          <Link href="/" passHref>
            Home
          </Link>
        </section>
        <section className={styles.nav_elements}>
          <Link href="/projects" passHref>
            Projects
          </Link>
        </section>

        <section className={styles.nav_elements}>
          <Link href="/aboutme" passHref>
            About me
          </Link>
        </section>

        <section className={styles.nav_elements}>
          <Link href="/contactme" passHref>
            Contact me
          </Link>
        </section>

    <section className={styles.nav_elements}>
      <Link href="/firebase" passHref>
        Firebase
      </Link>
    </section>
    <section className={styles.nav_elements}>
      <Link href="/firebase" passHref>
        MySQL
      </Link>
    </section>


  </>
);
const mobileMenu = (
  <>
  <a>Menu</a>
  </>
);

const mobileMenuPart1 = (
  <>
  
  </>
)

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
