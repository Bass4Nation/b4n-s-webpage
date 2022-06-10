import Link from "next/link";
import styles from "../styles/Main.module.css";



const ProjectContent = ( {title, codeLang, description, projectLink} ) => {


    return (
        <>
        <section className={styles.projectCard}>
            <h3>Title: {title}</h3>
            <p>Language used: {codeLang}</p>
            <p>Description: {description}</p>
            <p>Link to this project: <Link href={projectLink} passHref><a className={styles.projectLinks}>{projectLink}</a></Link></p>
        </section>
        
        </>
    )


}
export default ProjectContent;