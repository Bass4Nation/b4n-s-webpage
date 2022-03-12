import ProjectContent from "../components/ProjectContent"
import { doc, getDoc } from "firebase/firestore";


const Projects = () =>{

    const projectData = [{
        "key" : "1",
        "name": "B4N.no Webpage",
        "codeLang": "Next.js, HTML, CSS, JavaScript",
        "description": "This webpage. Wanted to make this webpage because it could show some of my coding skills.",
        "link": "https://github.com/Bass4Nation/b4n-s-webpage"
    },
        {
            "key": "2",
            "name": "Tello SDK Drone Controller ",
            "codeLang": "C#",
            "description": "Got a small programmable drone at home. It uses a UDP client to send information on what it should do." +
                " etl",
            "link": "https://github.com/Bass4Nation"
        },]

    const docRef = doc(db, "projects");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }

    return (
        <>
        <h3> Projects page</h3>
        {projectData.map((data) => 
            <ProjectContent key={data.key} title={data.name} codeLang={data.codeLang} description={data.description} projectLink={data.link}/>
        )}
        </>
    )
}
export default Projects