import Link from "next/link";
import styles from  "../styles/Nav.module.css";

const Nav = () => {
  return (
    <>
      <section>
        <h3>Test</h3>
        <section className={styles.nav_section}>
          <Link href="/" passHref>
            Home
          </Link>
          <Link href="/projects" passHref>
            Projects
          </Link>

          <Link href="/aboutme" passHref>
            About me
          </Link>

          <Link href="/contactme" passHref>
            Contact me
          </Link>

          <Link href="/firebase" passHref>
            Firebase
          </Link>
        </section>
      </section>
    </>
  );
};
export default Nav;
