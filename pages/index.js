import Updates from "../components/Updates";
import style1 from "../styles/DarkMain.module.scss"


export default function Home() {
  let style = style1;


  return (
    <>
      <section className={style}>
      <h2>Frontpage</h2>
        <p>This page is under construction :)</p>
        <p>
          Hi. This is Bass4Nation AKA Kristoffer S Søderkvist&apos;s portfolio
          page. On top of this page is is a couple of choice for what you want
          to read about. And in the bottom of this page is two Github links.
          First one is for this project, and the second one is for all my public
          github projects.
        </p>
      </section>
      <section>
        <Updates />
      </section>
    </>
  );
}
