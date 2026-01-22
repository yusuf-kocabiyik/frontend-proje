import { useContext } from "react"
import { Context } from "../contexts/Context"


export const usePreference =()=>{

    const context = useContext(Context)

    if(!context){

        throw new Error("usePreference must be used within ContextProvide")
    }

    return context
}