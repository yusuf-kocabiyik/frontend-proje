import { useContent } from "../hooks/useContent";
import { usePreference } from "../hooks/usePreference";
import { toast } from 'react-toastify';
import axios  from "axios";

export const LanguageButton = ()=>{

    const {language,setLanguage} = usePreference();
     const { content } = useContent() ;
     
        //dil değişikliğini kontrol eden fonksiyon
     const handleLanguage = async () => {

        const newLanguage = language === "en" ? "tr" : "en";
        setLanguage(newLanguage);

        toast.success(newLanguage === "tr" ? "Türkçe’ye geçildi" : "Switched to English");
        

         try {
            const response = await axios.post(
             "https://jsonplaceholder.typicode.com/posts",
             {selectedLanguage: newLanguage,timestamp: new Date().toISOString()}
            );

            console.log("POST response:", response.data);
            } catch (error) {
            console.error("POST error:", error);
            }

     };
    return(
        <button
                onClick={handleLanguage}
                className="text-[#777777] cursor-pointer"
                >
                {language === "en" ? (
                    <>
                    <span className="text-indigo2 dark:text-[#BAB2E7]">
                        {content.preference.language}
                    </span>
                    ’YE GEÇ
                    </>
                ) : (
                    <>
                    SWITCH TO{" "}
                    <span className="text-indigo2 dark:text-[#BAB2E7]">
                        {content.preference.language}
                    </span>
                    </>
                )}
            </button>
    )
}