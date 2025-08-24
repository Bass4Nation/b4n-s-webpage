import Link from "next/link";
import styles from "../styles/DarkMain.module.scss";


const ProjectContent = ({ title, codeLang, description, projectLink, fullName }) => {

    // let previewImg = "https://raw.githubusercontent.com/" + fullName + "/main/pictures/preview.png"

    return (
        <>
            <section className={styles.projectCard}>
                <section className={styles.flip}>
                    <section className={styles.front}>
                        <h3>Title: {title}</h3>
                        <p>Language used: {codeLang} and more</p>
                        <p>Description: {description}</p>
                        <Link href={projectLink} passHref><p>Go to Github repository</p></Link>
                    </section>
                </section>
            </section>
        </>
    )


}
export default ProjectContent;