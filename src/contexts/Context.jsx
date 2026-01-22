import { createContext, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";



export const Context = createContext();

const ContextProvider = ({children})=>{
    const [isDark,setIsDark] =useLocalStorage("IsDark",false);

    //useEFFECT İLE İSDARK STATE İNİ İZLEYEREK HTML AGACINA DARK CLASS INI EKLEYİP ÇIKARIYORUZ.
    useEffect(()=>{
        const html =document.documentElement;
  
        if(isDark){
            html.classList.add("dark")
        }else{
            html.classList.remove("dark")
        }

    },[isDark])

    return( 
        <Context.Provider value={{isDark,setIsDark}}>
            {children}

        </Context.Provider>
    )
}



export default ContextProvider;