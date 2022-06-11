import Link from "next/link";
import styles from "../styles/Main.module.css";

const ProjectContent = ({ title, codeLang, description, projectLink }) => {
    return (
        <>
            <section className={styles.projectCard}>
                <h3>Title: {title}</h3>
                <p>Language used: {codeLang}</p>
                <p>Description: {description}</p>
                <p>Github link to this project: <Link href={projectLink} passHref><a className={styles.projectLinks}>click here</a></Link></p>
            </section>

        </>
    )


}
export default ProjectContent;