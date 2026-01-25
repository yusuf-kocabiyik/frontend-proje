import { useContent } from "../hooks/useContent";
import { usePreference } from "../hooks/usePreference";
import ThemeToggleButton from "./ThemeToggleButton";


export const Theme = ()=>{

    const {isDark} = usePreference();

    const { content } = useContent() ;
    
    return(
        <>
        <ThemeToggleButton/>
        {
            isDark ? (
            <>
                <p className="text-[#777777] dark:text-[#D9D9D9]">{content.preference.themeLight}</p>
            </>
            ):( 
                <>
                 <p className="text-[#777777] dark:text-[#D9D9D9]">{content.preference.themeDark}</p>
            </>
            )
        }

        </>
        
    )
}