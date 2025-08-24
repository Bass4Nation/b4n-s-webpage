import Link from "next/link";
import Image from "next/image";

import stylesDark from "../styles/DarkMain.module.scss";
import styleLight from "../styles/LightMain.module.scss"
import styleBanana from "../styles/BananaMain.module.scss"
import { useTheme } from "../hooks/useTheme"

// import banana from "../styles/easter/banana2.png"

const Footer = ({theme}) => {

  let styles;
  const { setTheme } = useTheme();


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
