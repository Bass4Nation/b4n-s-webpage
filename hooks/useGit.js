import axios from "axios"
import { useEffect, useState } from "react"



export const useGit = () => {

    const [allRepo, setAllRepo] = useState([])
    const [allPatch, setAllPatch] = useState ([])

    useEffect(() =>{
        if(allRepo && allRepo.length > 0) return
        const getAllRepo = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/Bass4Nation/repos')
                if(response?.status == 200){
                    setAllRepo(response.data)
                }

            }catch (error) {
                console.log(error);
            }
        }
        getAllRepo()
    }, [allRepo])

    useEffect(() =>{
        if(allPatch && allPatch.length > 0) return
        const getAllPatch = async () => {
            try {
                const response = await axios.get('https://api.github.com/repos/Bass4Nation/b4n-s-webpage/events')
                // console.log(response.data);
                if(response?.status == 200){
                    setAllPatch(response.data)
                }

            }catch (error) {
                console.log(error);
            }
        }
        getAllPatch()
    }, [allPatch])

    return {allRepo, allPatch}
}