import ProjectContent from "../components/ProjectContent";
import style from "../styles/DarkMain.module.scss"


// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/Bass4Nation/repos`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}



const Projects = ({ data }) => {
  // console.log(data)

  return (
    <>
      <section>
        <h3 className={style.projectTitle}> Projects page</h3>
        <section className={style.projectCards}>
          {data.map((git) => (
            <ProjectContent
              key={git.node_id}
              title={git.name}
              codeLang={git.language}
              description={git.description}
              projectLink={git.svn_url}
              fullName={git.full_name}
            />
          ))}
        </section>
      </section>
    </>
  );
};
export default Projects;
