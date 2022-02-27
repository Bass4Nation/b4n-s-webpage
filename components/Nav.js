import Link from "next/link";
import styles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <section className={styles.nav_background}>
        <a className={styles.main_title}>B4N&apos;s Portfolio Page</a>
        <section className={styles.nav_section}>
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
        </section>
      </section>
    </>
  );
};
export default Nav;
