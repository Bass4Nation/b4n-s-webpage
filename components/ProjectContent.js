import Link from "next/link";
import styles from "../styles/Main.module.css";



const ProjectContent = ( {title, codeLang, description, projectLink} ) => {


    return (
        <>
        <section>
            <p>Title: {title}</p>
            <p>Language used: {codeLang}</p>
            <p>Description: {description}</p>
            <p  >Link to this project: <Link href={projectLink}><a className={styles.projectLinks}>{projectLink}</a></Link></p>
        </section>
        
        </>
    )


}
export default ProjectContent;