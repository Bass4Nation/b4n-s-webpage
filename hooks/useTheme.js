import axios from "axios"
import { useEffect, useState } from "react"



export const useTheme = () => {

    const [theme, setTheme] = useState('Dark')


    return {theme, setTheme}
}