import SierpinskiTriangle from "../components/SierpinskiTriangle";
import Updates from "../components/Updates";
import style1 from "../styles/DarkMain.module.scss"


export default function Home() {
  let style = style1;


  return (
    <>
      <section className={style.mainContent}>
      <h2>Frontpage</h2>
        <p>This page is under construction :)</p>
        <p>
          Hi. This is Bass4Nation AKA Kristoffer S Søderkvist&apos;s portfolio
          page. On top of this page is is a couple of choice for what you want
          to read about. And in the bottom of this page is two Github links.
          First one is for this project, and the second one is for all my public
          github projects.
        </p>
        <h2> Other pages I am working on: </h2>
        <p>ps: This page is the only one with a domain name. All other pages is using netlify's free web host</p>
        <p> Quiz page (Started working on it 18/07/2022) : <a className={style.linkremove} href="https://b4n-question-page.netlify.app">HERE </a> </p>
      </section>
      <section>
        <SierpinskiTriangle />
      </section>
      <section>
        <Updates />
      </section>
    </>
  );
}
