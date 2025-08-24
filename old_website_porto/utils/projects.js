import { firestore } from "./firebase";

const getProjects = async () => {
    const snapshot = await firestore.collection("projects").get();
    snapshot.docs.forEach((docs) => console.log(doc.data()));
}

export {getProjects};

//https://www.youtube.com/watch?v=bReCIxeWayw