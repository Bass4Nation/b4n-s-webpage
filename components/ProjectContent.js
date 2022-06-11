import Link from "next/link";
import Image from 'next/image'
import styles from "../styles/Main.module.css";


const ProjectContent = ({ title, codeLang, description, projectLink, fullName }) => {

    let previewImg = "https://raw.githubusercontent.com/" + fullName + "/main/pictures/preview.png"

    return (
        <>
            <section className={styles.projectCard}>
                <section className={styles.flip}>
                    <section className={styles.front}>
                        <h3>Title: {title}</h3>
                        <p>Language used: {codeLang} and more</p>
                        <p>Description: {description}</p>
                        <p>Github link to this project click on picture on hover</p>
                    </section>
                    <section className={styles.back}>
                    <Link href={projectLink} passHref>
                        <img src={previewImg} />
                        </Link>
                    </section>
                </section>
            </section>
        </>
    )


}
export default ProjectContent;