import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { fetchContent } from "../services/contentService";



export const Context = createContext();

const ContextProvider = ({children})=>{
    const [isDark,setIsDark] =useLocalStorage("IsDark",false);
    const [language, setLanguage] = useLocalStorage("lang", "en");

    //gelen datayı tutmak ve bekleme durumu için content ve loading  state i oluşturuyoruz 
    const [content,setContent] = useState(null);
    const [loading,setLoading] = useState(true)

    // DARK MODE-- useEFFECT İLE İSDARK STATE İNİ İZLEYEREK HTML AGACINA DARK CLASS INI EKLEYİP ÇIKARIYORUZ.
    useEffect(()=>{
        const html =document.documentElement;
  
        if(isDark){
            html.classList.add("dark")
        }else{
            html.classList.remove("dark")
        }
    },[isDark])


    //LANGUAGE -- CONTENT --> Burada doğrudan ingilizce veya tr
    useEffect(()=>{

        setLoading(true);

        fetchContent().then((data)=>{
            setContent(data[language]);
            setLoading(false);
        })

    },[language])
    

    return( 
        <Context.Provider value={{isDark,setIsDark,language,setLanguage,content,loading}}>
            {children}

        </Context.Provider>
    )
}



export default ContextProvider;