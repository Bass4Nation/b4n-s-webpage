import Link from "next/link";


const ProjectContent = ( {title, description, projectLink} ) => {


    return (
        <>
        <section>
            <p>Title: {title}</p>
            <p>Description: {description}</p>
            <p>Link to this project: <Link href={projectLink}>{projectLink}</Link></p>
        </section>
        
        </>
    )


}
export default ProjectContent;