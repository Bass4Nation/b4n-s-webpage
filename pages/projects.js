import ProjectContent from "../components/ProjectContent";

const Projects = () => {
  const projectData = [
    {
      key: "1",
      name: "B4N.no Webpage",
      codeLang: "Next.js, HTML, CSS, JavaScript",
      description:
        "This webpage. Wanted to make this webpage because it could show some of my coding skills.",
      link: "https://github.com/Bass4Nation/b4n-s-webpage",
    },
    {
      key: "2",
      name: "Tello SDK Drone Controller ",
      codeLang: "C#",
      description:
        "Got a small programmable drone at home. It uses a UDP client to send information on what it should do." +
        " etl",
      link: "https://github.com/Bass4Nation/Tello-Drone",
    },
    {
      key: "3",
      name: "F1Tenth Autonomous Driving Car (Ongoing)",
      codeLang: "Python, Shell, C++",
      description:
        "Self driven RC car, 2D lidar mapping, also possible with manuell control",
      link: "https://github.com/fredlau95/AutonomousRacecar",
    },
      {
      key: "4",
      name: "All git repositories",
      codeLang: "Java, C#, Python, Shell, C++",
      description:
        "This is a direct link to my account at Github.com. It should be possible to see other projects and some school assignments I have worked on.",
      link: "https://github.com/Bass4Nation",
    },
  ];

  

  return (
    <>
      <h3> Projects page</h3>

      {projectData.map((data) => (
        <ProjectContent
          key={data.key}
          title={data.name}
          codeLang={data.codeLang}
          description={data.description}
          projectLink={data.link}
        />
      ))}
    </>
  );
};
export default Projects;
