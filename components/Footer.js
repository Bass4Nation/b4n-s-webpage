import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.flex_footer}>
        <Link href="https://github.com/Bass4Nation/b4n-s-webpage" passHref>
          <section className={styles.footer_element}>
            <p>Git this page</p>
            <Image
              src="/gitlogo.png"
              width="50"
              height="50"
              alt="Github this page"
            />
          </section>
        </Link>

        <Link href="https://github.com/Bass4Nation" passHref>
          <section className={styles.footer_element}>
            <p>Git most of my stuff</p>
            <Image
              src="/gitlogo.png"
              width="50"
              height="50"
              alt="Github User"
            />
          </section>
        </Link>
      </section>
    </>
  );
};

export default Footer;
