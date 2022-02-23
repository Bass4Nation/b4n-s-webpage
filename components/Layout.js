import Link from "next/link";
import Image from "next/image";
const Layout = ({ Children }) => {
  return (
    <>
      <h1> Bass4Nation Testpage</h1>
      <main>{/* <Children /> */}</main>
      <footer>
        <section>
          <section>
            <p>Git this page</p>
            <Link href="https://github.com/Bass4Nation/b4n-s-webpage">
              <>
                <Image src="/gitlogo.png" width="50" height="50" alt="Github" />
              </>
            </Link>
          </section>
          <section>
            <p>Git most of my stuff</p>
            <Link href="https://github.com/Bass4Nation">
              <>
                <Image src="/gitlogo.png" width="50" height="50" alt="Github" />
              </>
            </Link>
          </section>
        </section>
      </footer>
    </>
  );
};

export default Layout;
