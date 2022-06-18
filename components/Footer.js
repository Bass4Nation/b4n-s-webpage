import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import stylesDark from "../styles/DarkMain.module.scss";
import styleLight from "../styles/LightMain.module.scss"
import styleBanana from "../styles/BananaMain.module.scss"
import { themes } from "../constants/global"

const Footer = () => {
  let styles = stylesDark;

  const [selected, setSelected] = useState(themes[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  if(selected == "Light"){
    styles = styleLight;
  }  
  if(selected == "Dark"){
    styles = stylesDark;
  }  
  if(selected == "Banana"){
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
