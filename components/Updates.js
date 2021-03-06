import { useGit } from "../hooks/useGit";
import stylesDark from "../styles/DarkMain.module.scss";


const Updates = () => {
    const { allPatch } = useGit()

    const timeFormat = (stringTime) => {
        let strTime = stringTime.replace("Z","")
        const [dateRelated, timeRelated] = strTime.split('T');

        const [year, month, day] = dateRelated.split('-');
        const [hours, minutes, seconds] = timeRelated.split(':');

        const date2 = new Date(+year, month - 1, +day, +hours, +minutes, +seconds);

        let created_date = "Date: " + date2;
        
        return created_date;
    }

    const styles = stylesDark;

    return (
        <>
        <section>
            <h3>Patch notes sent to Github. Push messages</h3>
            <section className={styles.patchnotes}>
            {allPatch.map((arg) => (
                    arg.payload.commits.map((arg1) => (<section key={arg1.sha} className={styles.patchnote}>
                    <p>{arg1.message}</p>
                    <p>{timeFormat(arg.created_at)}</p>
                    </section>
                    ))
                ))}
            </section>
        </section>
        </>
    )
}

export default Updates;