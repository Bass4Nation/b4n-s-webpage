import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <section className={styles.flex_footer}>
        <section className={styles.footer_element}>
          <p>Git this page</p>
          <Link href="https://github.com/Bass4Nation/b4n-s-webpage" passHref>
            <Image
              src="/gitlogo.png"
              width="50"
              height="50"
              alt="Github this page"
            />
          </Link>
        </section>
        <section className={styles.footer_element}>
          <p>Git most of my stuff</p>
          <Link href="https://github.com/Bass4Nation" passHref>
            <Image
              src="/gitlogo.png"
              width="50"
              height="50"
              alt="Github User"
            />
          </Link>
        </section>
      </section>
    </>
  );
};

export default Footer;
