import ProjectContent from "../components/ProjectContent";
import style from "../styles/Main.module.css"
// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://api.github.com/users/Bass4Nation/repos`)
  const data = await res.json()
  // Pass data to the page via props
  return { props: { data } }
}

const Projects = ({ data }) => {
  const projectData = [
    {
      key: "1",
      name: "B4N.no Webpage",
      codeLang: "Next.js, HTML, CSS, JavaScript",
      description:
        "This webpage. Wanted to make this webpage because it could show some of my coding skills.",
      link: "https://github.com/Bass4Nation/b4n-s-webpage",
      picture: "/public/drone_controller.png",
    },
    {
      key: "2",
      name: "Tello SDK Drone Controller ",
      codeLang: "C#",
      description:
        "Got a small programmable drone at home. It uses a UDP client to send information on what it should do." +
        " etl",
      link: "https://github.com/Bass4Nation/Tello-Drone",
      picture: "/public/drone_controller.png",
    },
    {
      key: "3",
      name: "F1Tenth Autonomous Driving Car (Complete Bachlor Assignment)",
      codeLang: "Python, Shell, C++",
      description:
        "Self driven RC car, 2D lidar mapping, also possible with manuell control",
      link: "doesn't have a github link",
      picture: "/public/drone_controller.png",
    },
    {
      key: "4",
      name: "All git repositories",
      codeLang: "Java, C#, Python, Shell, C++",
      description:
        "This is a direct link to my account at Github.com. It should be possible to see other projects and some school assignments I have worked on.",
      link: "https://github.com/Bass4Nation",
      picture: "/public/drone_controller.png",
    },
  ];
  console.log(data)

  return (
    <>
      <section>
        <h3> Projects page</h3>
        <section className={style.projectCards}>
          {projectData.map((data) => (
            <ProjectContent
              key={data.key}
              title={data.name}
              codeLang={data.codeLang}
              description={data.description}
              projectLink={data.link}
            />
          ))}

        </section>
        <h3>This is the rest of my github</h3>

        <section className={style.projectCards}>
          {data.map((git) => (
            <ProjectContent
              key={git.node_id}
              title={git.name}
              codeLang={git.language}
              description={git.description}
              projectLink={git.svn_url}
            />
          ))}
        </section>

      </section>
    </>
  );
};
export default Projects;
