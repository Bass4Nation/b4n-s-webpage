import ProjectContent from "../components/ProjectContent"



const Projects = () =>{

    const projectData = [{
        "name": "B4N.no Webpage",
        "codeLang": "Next.js, HTML, CSS5, JavaScript",
        "description": "This webpage. Wanted to make this webpage because it could show some of my coding skills.",
        "link": "https://github.com/Bass4Nation/b4n-s-webpage"
    },
     {
        "name": "Tello SDK Drone Controller ",
        "codeLang": "C#",
        "description": "Got a small programmable drone at home. It uses a UDP client to send information on what it should do." +
        " ",
        "link": "Not uploaded to Github yet"
        },]

    return (
        <>
        <h3> Projects page</h3>
        {projectData.map((data) => 
            <ProjectContent title={data.name} codeLang={data.codeLang} description={data.description} projectLink={data.link}/>
        )}
        </>
    )
}
export default Projects