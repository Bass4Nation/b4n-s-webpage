import ProjectContent from "../components/ProjectContent";
import style from "../styles/DarkMain.module.scss"
import { useGit } from "../hooks/useGit";

const Projects = () => {

  const { allRepo } = useGit()
  // console.log(allRepo)

  return (
    <>
      <section>
        <h3 className={style.projectTitle}> Projects page</h3>
        <section className={style.projectCards}>
          {allRepo.map((git) => (
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
