import ProjectContent from "../components/ProjectContent"



const Projects = () =>{

    const projectData = [{
        "name": "B4N.no Webpage",
        "description": "This webpage. Wanted to make this webpage because it could show some of my coding skills.",
        "link": "https://github.com/Bass4Nation/b4n-s-webpage"
    }]

    return (
        <>
        <h3> Projects page</h3>
        {projectData.map((data) => 
            <ProjectContent title={data.name} description={data.description} projectLink={data.link}/>
        )}
        </>
    )
}
export default Projects