
import axios from "axios"

export const fetchContent = async ()=>{
    const response = await axios.get("/content.json")
    return response.data
}